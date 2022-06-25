

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {Reducers} from '../store/index';
import { EffectsModule } from '@ngrx/effects';
import { WorldEffects } from 'src/store/effects/world.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/components/layout/header/header.component';
import { BodyComponent } from 'src/components/layout/body/body.component';
import { FooterComponent } from 'src/components/layout/footer/footer.component';
import { WizardComponent } from 'src/components/layout/wizard/wizard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegionsComponent } from 'src/components/regions/regions/regions.component';
import { RegionsListComponent } from 'src/components/regions/regions-list/regions-list.component';
import { RegionsItemComponent } from 'src/components/regions/regions-item/regions-item.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesListComponent } from 'src/components/countries/countries-list/countries-list.component';
import { CountriesComponent } from 'src/components/countries/countries/countries.component';
import { BreadcrumbsComponent } from 'src/components/layout/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WizardComponent,
    RegionsComponent,
    RegionsListComponent,
    RegionsItemComponent,
    CountriesListComponent,
    CountriesComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot([
      WorldEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
