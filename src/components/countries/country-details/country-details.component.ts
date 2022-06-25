import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { country } from '../../../store/index';

@Component({
  selector: 'country-details-component',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryName: string;
  region: Region;
  country$: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.countryName = this.route.snapshot.paramMap.get('country');

  this.country$ = this.store.pipe(
    select(country, {
      regionName: this.region,
      country: this.countryName
    }),
    filter((country) => !!country)
  )
  }

}
