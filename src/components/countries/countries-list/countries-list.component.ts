import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Regions } from 'src/models/namespaces/regions.namespace';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { GetCountriesByRegion } from 'src/store/actions/world.actions';

@Component({
  selector: 'countries-list-component',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  private region: Region;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.store.dispatch(new GetCountriesByRegion({region: this.region}))
  }

}
