import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { GetCountriesByRegion } from 'src/store/actions/world.actions';
import { countriesForRegion } from '../../../store/index';

@Component({
  selector: 'countries-list-component',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  private region: Region;
  private subscription: Subscription = new Subscription();
  public countries = [];

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') as Region;
    this.store.dispatch(new GetCountriesByRegion({region: this.region}))

    this.subscription.add(
      this.store.pipe(
        select(countriesForRegion),
        filter((countries) => !!countries && countries?.length > 0)
        )
        .subscribe(countries => {
          this.countries = countries;
          console.log(this.countries);
        })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
