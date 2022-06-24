
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {Reducers} from '../store/index';
import { EffectsModule } from '@ngrx/effects';
import { WorldEffects } from 'src/store/effects/world.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/layout/header/header.component';
import { BodyComponent } from 'src/components/layout/body/body.component';
import { FooterComponent } from 'src/components/layout/footer/footer.component';
import { WizardComponent } from 'src/components/layout/wizard/wizard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(Reducers),
    CommonModule,
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