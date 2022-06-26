import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() cancelButton: string;
  @Output() cancelClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.cancelClicked.emit();
  }

}
