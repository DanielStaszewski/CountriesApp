import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { GetCountryDetails } from 'src/store/actions/world.actions';
import { capitalizeFirstLetter } from 'src/utils/capitalize';
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
  public routeForBreadcrumbs: {
    route: string;
    routeName: string;
  }[];


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.countryName = this.route.snapshot.paramMap.get('country');
    this.store.dispatch(new GetCountryDetails({regionName: this.region, countryName: this.countryName}));

    this.routeForBreadcrumbs = [
      {
        route: '/regions',
        routeName: 'Regions'
      },
      {
        route: '/regions/' + this.region,
        routeName: capitalizeFirstLetter(this.region)
      },
      {
        route: '/regions/' + this.region + '/' + this.countryName,
        routeName: this.countryName
      }
    ]

  this.country$ = this.store.pipe(
    select(country, {
      regionName: this.region,
      country: this.countryName
    }),
    filter((country) => !!country)
    )
  }
}
