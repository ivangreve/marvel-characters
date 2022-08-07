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


  public characters: Array<any>;
  public characterSelected: any;
  public nameFilter: string = '';
  public loading: boolean = false;

  public offset: number = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 5;

  constructor(private marvelService: MarvelService, private route: ActivatedRoute, private modalService: NgbModal) {
    this.characters = new Array<any>();
    this.subscribeToQueryParams();
  }

  public subscribeToQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.offset = 0;
      this.characters = new Array<any>();
      this.nameFilter = params['nameStartsWith']
      this.onChangeFilters(this.offset, this.nameFilter);

    });
  }

  ngOnInit(): void {
    this.fetchCharacters(this.offset);
  }

  public fetchCharacters(offset?: number, nameFilter?: string) {
    this.loading = true;
    this.marvelService.getCharacters(offset, nameFilter).subscribe(response => {
      this.characters = this.characters.concat(response.data.results);
      this.loading = false;
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
    console.log('scrolled!!');
    console.log(this.offset);
    this.offset = this.offset + 20;
    this.fetchCharacters(this.offset, this.nameFilter)
  }


  public auxCharacter: any;
  public editCharacter(content: any, character: any) {
    this.characterSelected = character;
    //this.auxCharacter = classToClassFromExist(this.characterSelected, this.auxCharacter);
    this.modalService.open(content);
  }

  public onSave() {
    this.characterSelected = this.auxCharacter;
  }
}
