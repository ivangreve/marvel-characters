import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { classToClassFromExist } from 'class-transformer';
import { Character } from '../character.model';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @ViewChild('editCharacterModal') editCharacterModal: any;
  @ViewChild('createCharacterModal') createCharacterModal: any;

  public characters: Array<Character>;
  public characterSelected: any;
  public nameFilter: string = '';
  public loading: boolean = false;

  public offset: number = 0;
  public throttle: number = 300;
  public scrollDistance: number = 1;
  public scrollUpDistance: number = 5;

  constructor(private marvelService: MarvelService, private route: ActivatedRoute, private modalService: NgbModal) {
    this.characters = new Array<Character>();
    this.subscribeToQueryParams();
  }

  ngOnInit(): void {
    this.fetchCharacters(this.offset);
  }

  public subscribeToQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.offset = 0;
      this.characters = new Array<Character>();
      this.nameFilter = params['nameStartsWith']
      this.onChangeFilters(this.offset, this.nameFilter);
    });
  }

  public fetchCharacters(offset?: number, nameFilter?: string) {
    this.marvelService.getCharacters(offset, nameFilter).subscribe(response => {
      this.characters = this.characters.concat(response.data.results);
    })
  }

  public onChangeFilters(offset?: number, nameFilter?: string) {
    this.loading = true;
    this.marvelService.getCharacters(offset, nameFilter).subscribe(response => {
      this.characters = response.data.results;
      this.loading = false;

    })
  }

  public onScrollDown() {
    console.log(this.offset);
    this.offset = this.offset + 20;
    this.fetchCharacters(this.offset, this.nameFilter)
  }


  public auxCharacter: Character;
  public openEditCharacter(character: Character) {
    this.characterSelected = character;
    this.auxCharacter = classToClassFromExist(this.characterSelected, this.auxCharacter);
    this.modalService.open(this.editCharacterModal);
  }

  public saveCharacter(character: Character) {
    classToClassFromExist(character, this.characterSelected);
    this.closeEditModal();
  }

  public closeEditModal() {
    this.modalService.dismissAll(this.editCharacterModal);
  }

  public openCreateCharacter() {
    this.modalService.open(this.createCharacterModal);
  }

  public createCharacter(newCharacter: Character) {
    const checkCharacterExist = this.characters.some(ch => ch.name === newCharacter.name)
    if (checkCharacterExist) {
      alert("El personaje ya existe!")
      return
    }

    this.characters = this.prepend(newCharacter, this.characters);
    this.closeCreateModal()
  }

  public closeCreateModal() {
    this.modalService.dismissAll(this.createCharacterModal);
  }

  private prepend(value, array) {
    var newArray = array.slice();
    newArray.unshift(value);
    return newArray;
  }
}


