import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule
  ]
})
export class MarvelModule { }
