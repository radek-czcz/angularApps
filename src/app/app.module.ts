import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame-comp/frame-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MainContentComponent } from './components/mainComponents/main-content/main-content.component';
import { ContentProjectionCompComponent } from './components/content-projection-comp/content-projection-comp.component';
import { ButtonThatCreatesCompComponent } from './components/button-that-creates-comp/button-that-creates-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
   MainContentComponent,
   ContentProjectionCompComponent,
   ButtonThatCreatesCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
