import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.character = new Character()
  }

  closeResult = '';

  public character: Character;

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  @Output()
  public save: EventEmitter<any> = new EventEmitter();


  public closeModal() {
    this.close.emit();
  }

  public onSave() {
    this.save.emit(this.character);
  }

}
