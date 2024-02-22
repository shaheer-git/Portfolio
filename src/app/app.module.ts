import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyPicComponent } from './my-pic/my-pic.component';
import { AboutComponent } from './about/about.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyPicComponent,
    AboutComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
