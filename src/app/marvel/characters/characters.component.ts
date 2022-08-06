import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Array<any>;

  public offset: number = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 5;

  constructor(private marvelService: MarvelService) {
    this.characters = []
  }

  ngOnInit(): void {
    this.fetchCharacters(this.offset);
  }

  public fetchCharacters(offset: number) {
    this.marvelService.getCharacters(offset).subscribe(response => {
      debugger
      this.characters = this.characters.concat(response.data.results);
    })
  }

  public onScrollDown() {
    console.log('scrolled!!');
    console.log(this.offset);
    this.offset = this.offset + 20;
    this.fetchCharacters(this.offset)
    debugger
  }
}
