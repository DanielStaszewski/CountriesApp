import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { SetRegionActive } from 'src/store/actions/world.actions';

@Component({
  selector: 'regions-item-component',
  templateUrl: './regions-item.component.html',
  styleUrls: ['./regions-item.component.scss']
})
export class RegionsItemComponent implements OnInit {

  @Input() region: Region;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onRegionClick(): void{
    this.store.dispatch(new SetRegionActive({region: this.region}));
    this.router.navigate(['/regions', this.region]);
  }

}
