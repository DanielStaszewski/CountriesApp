import { Component, Input, OnInit } from '@angular/core';
import { Region } from 'src/models/types/region.type';

@Component({
  selector: 'regions-item-component',
  templateUrl: './regions-item.component.html',
  styleUrls: ['./regions-item.component.scss']
})
export class RegionsItemComponent implements OnInit {

  @Input() region: Region;

  constructor() { }

  ngOnInit(): void {
  }

}
