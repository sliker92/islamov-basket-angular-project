import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AsideLeftViewComponent } from './asides/aside-left-view/aside-left-view.component';
import { AsideRightViewComponent } from './asides/aside-right-view/aside-right-view.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { NavListComponent } from './nav/nav-list/nav-list.component';
import { SurveyComponent } from './survey/survey.component';
import { NavService } from './nav/nav.service';
import { SharedModule } from '../shared/shared.module';
import { FakeBackendInterceptor } from './fake-back-end.interceptor';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideLeftViewComponent,
    AsideRightViewComponent,
    NavItemComponent,
    NavListComponent,
    SurveyComponent
  ],
  providers: [
    NavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    AsideLeftViewComponent,
    AsideRightViewComponent,
    NavItemComponent,
    NavListComponent,
    SurveyComponent
  ]
})
export class CoreModule {
}
