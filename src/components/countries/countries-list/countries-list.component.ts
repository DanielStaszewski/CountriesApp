import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Country } from 'src/models/interfaces/country.model';
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

  public countries$: Observable<Country[]>;
  public region: Region;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.region = this.route.snapshot.paramMap.get('region') as Region;
      this.store.dispatch(new GetCountriesByRegion({region: this.region}))

    this.countries$ = this.store.pipe(
      select(countriesForRegion, this.region),
      filter((countries) => !!countries && countries?.length > 0)
    )
  }

  onCountryRowClicked(country: Country): void{
    this.router.navigate(['/regions', this.region, country.name.common]);
  }

}
