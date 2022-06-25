import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Region } from 'src/models/types/region.type';
import { AppState } from 'src/store';
import { countriesForRegion } from '../../../store/index';

@Component({
  selector: 'countries-list-component',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  @Input() region: Region;
  private subscription: Subscription = new Subscription();
  public countries$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
      this.countries$ = this.store.pipe(
        select(countriesForRegion),
        filter((countries) => !!countries && countries?.length > 0)
        )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onCountryRowClicked(country){

  }

}
