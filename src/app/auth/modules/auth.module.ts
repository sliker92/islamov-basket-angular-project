import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import { RegisterGuard } from '../guards/register.guard';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    RegisterGuard
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {
}
