import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';
import { OnepieceModule } from './onepiece/onepiece.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    OnepieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
