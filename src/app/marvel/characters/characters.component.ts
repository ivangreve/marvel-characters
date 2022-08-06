import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Array<any>;
  public nameFilter: string = '';

  public offset: number = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 5;

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) {
    this.characters = [],
      this.subscribeToQueryParams();
  }

  public subscribeToQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.offset = 0;
      this.characters = [];
      this.nameFilter = params['nameStartsWith']
      this.onChangeFilters(this.offset, this.nameFilter);

    });
  }

  ngOnInit(): void {
    this.fetchCharacters(this.offset);
  }

  public fetchCharacters(offset?: number, nameFilter?: string) {
    this.marvelService.getCharacters(offset, nameFilter).subscribe(response => {
      this.characters = this.characters.concat(response.data.results);
    })
  }

  public onChangeFilters(offset?: number, nameFilter?: string) {
    this.marvelService.getCharacters(offset, nameFilter).subscribe(response => {
      this.characters = response.data.results;
    })
  }


  public onScrollDown() {
    console.log('scrolled!!');
    console.log(this.offset);
    this.offset = this.offset + 20;
    this.fetchCharacters(this.offset, this.nameFilter)
    debugger
  }
}
