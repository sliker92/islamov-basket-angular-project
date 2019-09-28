import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoImageBlockComponent } from './header/logo-image-block/logo-image-block.component';
import { MenuViewComponent } from './main/aside-left/menu-dashboard/components/menu-view/menu-view.component';
import { MenuDashboardComponent } from './main/aside-left/menu-dashboard/containers/menu-dashboard/menu-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoImageBlockComponent,
    MenuViewComponent,
    MenuDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
