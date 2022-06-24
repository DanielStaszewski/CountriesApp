import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Regions } from 'src/models/namespaces/regions.namespace';
import { AppState } from 'src/store';
import { GetCountriesByRegion } from 'src/store/actions/world.actions';

@Component({
  selector: 'countries-list-component',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCountriesByRegion(Regions.EUROPE))
  }

}
