import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    FaceSnapListComponent, 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
