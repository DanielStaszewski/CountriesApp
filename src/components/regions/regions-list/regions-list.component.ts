import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/models/namespaces/regions.namespace';

@Component({
  selector: 'regions-list-component',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.scss']
})
export class RegionsListComponent implements OnInit {

  public regions = Regions;

  constructor() { }

  ngOnInit(): void {
  }

}
