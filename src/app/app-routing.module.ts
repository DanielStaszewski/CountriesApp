import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from 'src/components/countries/countries-list/countries-list.component';
import { RegionsComponent } from 'src/components/regions/regions/regions.component';

const routes: Routes = [
    {path: '', redirectTo: 'regions', pathMatch: 'full'}, 
    {path: 'regions', component: RegionsComponent}, 
    {path: 'countries', component: CountriesListComponent}, 
    {path: '**', redirectTo: 'regions', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }