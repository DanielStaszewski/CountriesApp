import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { GetCountriesByRegion } from 'src/store/actions/world.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  region: Region;
  public routeForBreadcrumbs: {
    route: string;
    routeName: string
  }[];

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.store.dispatch(new GetCountriesByRegion({region: this.region}))
    this.routeForBreadcrumbs = [
      {
        route: '/regions',
        routeName: 'Regions'
      },
      {
        route: '/regions/' + this.region,
        routeName: this.capitalizeFirstLetter(this.region)
      },
    ]
  
  
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

}

