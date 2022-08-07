import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../character.model';

@Component({
  selector: 'create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
  closeResult = '';

  public character: Character;

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  @Output()
  public save: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {
    this.character = new Character()
  }

  public closeModal() {
    this.close.emit();
  }

  public onSave() {
    this.save.emit(this.character);
  }
}
