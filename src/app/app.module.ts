import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetaisComponent } from './hero-detais/hero-detais.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ExpeLengthPipePipe, ExponentialStrength } from './expe-length-pipe.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { FormMbqdComponent } from './form-mbqd/form-mbqd.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetaisComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    UnlessDirective,
    ExpeLengthPipePipe,
    ExponentialStrength,
    PowerBoosterComponent,
    NameEditorComponent,
    ForbiddenValidatorDirective,
    FormMbqdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
