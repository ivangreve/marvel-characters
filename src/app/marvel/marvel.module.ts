import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    CharactersComponent,
    EditCharacterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MarvelModule { }
