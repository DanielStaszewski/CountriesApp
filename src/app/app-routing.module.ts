import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from 'src/components/countries/countries/countries.component';
import { RegionsComponent } from 'src/components/regions/regions/regions.component';

const routes: Routes = [
    {path: '', redirectTo: 'regions', pathMatch: 'full'}, 
    {path: 'regions', component: RegionsComponent}, 
    {path: 'regions/:region', component: CountriesComponent },
    {path: '**', redirectTo: 'regions', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }