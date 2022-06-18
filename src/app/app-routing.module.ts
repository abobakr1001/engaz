import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/guard/authGuard.service';
import { NoauthGuardService } from './services/guard/noauth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[NoauthGuardService]},

  {path:'register',component:RegisterComponent,canActivate:[NoauthGuardService]},

  {path:'Panel',
  loadChildren: () => import("src/app/shared/app-panel/app-panel.module").then(m => m.AppPanelModule),
  canActivate:[AuthGuardService]

 },
  {path:'Landing',
  loadChildren: () => import("src/app/shared/landing/landing.module").then(m => m.LandingModule),

 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
