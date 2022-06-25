import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from 'src/components/countries/countries/countries.component';
import { CountryDetailsComponent } from 'src/components/countries/country-details/country-details.component';
import { RegionsComponent } from 'src/components/regions/regions/regions.component';

const routes: Routes = [
    {path: '', redirectTo: 'regions', pathMatch: 'full'}, 
    {path: 'regions', component: RegionsComponent}, 
    {path: 'regions/:region', component: CountriesComponent },
    {path: 'regions/:region/:country', component: CountryDetailsComponent },
    {path: '**', redirectTo: 'regions', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }