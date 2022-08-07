import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edit-character-modal',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
  closeResult = '';

  @Input()
  public character;

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  @Output()
  public save: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public closeModal() {
    this.close.emit();
  }

  public onSave() {
    this.save.emit(this.character);
  }
}
