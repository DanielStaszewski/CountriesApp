import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { GetCountriesByRegion } from 'src/store/actions/world.actions';
import { capitalizeFirstLetter } from 'src/utils/capitalize';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  private region: Region;
  public capitalizedRegion: string;
  public routeForBreadcrumbs: {
    route: string;
    routeName: string;
  }[];

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.capitalizedRegion = capitalizeFirstLetter(this.region);
    if(this.region) 
    this.routeForBreadcrumbs = [
      {
        route: '/regions',
        routeName: 'Regions'
      },
      {
        route: '/regions/' + this.region,
        routeName: capitalizeFirstLetter(this.region)
      }
    ]
  }

}

