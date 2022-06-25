import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/models/types/region.type';

@Component({
  selector: 'regions-item-component',
  templateUrl: './regions-item.component.html',
  styleUrls: ['./regions-item.component.scss']
})
export class RegionsItemComponent implements OnInit {

  @Input() region: Region;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegionClick(){
    this.router.navigate(['/regions', this.region]);
  }

}
