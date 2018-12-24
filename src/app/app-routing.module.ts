import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MTLoginComponent } from './m-tlogin/m-tlogin.component';
import { MTDashboardComponent } from './m-tdashboard/m-tdashboard.component';
import { MTCodingOnlineComponent } from './m-tcoding-online/m-tcoding-online.component';
import { MTRegisterComponent } from './m-tregister/m-tregister.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: '/mTLogin', pathMatch: 'full' },
  { path: 'mTLogin',component: MTLoginComponent },
  { path: 'mTDashboard',component:MTDashboardComponent,canActivate: [AuthGuardService]},
  { path: 'mTCodingOnline',component:MTCodingOnlineComponent},
  { path: 'mTRegister',component:MTRegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
