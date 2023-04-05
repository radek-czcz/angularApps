import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FrameComponent } from './frame-comp/frame-comp.component';
import { UpperToolbarButton } from './button-upperToolbar/button-upperToolbar.component';
import { CompParComponent } from './components/testComponents/comp-par/comp-par.component';
import { CompChiComponent } from './components/testComponents/comp-chi/comp-chi.component';
import { ContentCompComponent } from './components/testComponents/content-comp/content-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NameChildComponent } from './components/testComponents/name-child/name-child.component';
import { NameParentComponent } from './components/testComponents/name-parent/name-parent.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MainContentComponent } from './components/mainComponents/main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    FrameComponent,
    UpperToolbarButton,
    CompParComponent,
    CompChiComponent,
    ContentCompComponent,
    NameChildComponent,
   NameParentComponent,
   MainContentComponent,
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
