import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MTLoginComponent } from './m-tlogin/m-tlogin.component';
import { MTDashboardComponent } from './m-tdashboard/m-tdashboard.component';
import { MTCodingOnlineComponent } from './m-tcoding-online/m-tcoding-online.component';
import { MTRegisterComponent } from './m-tregister/m-tregister.component';
import { AuthGuardService } from './services/authguard.service';
import { MTCodingTestListComponent } from './m-tcoding-test-list/m-tcoding-test-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/mTLogin', pathMatch: 'full' },
  { path: 'mTLogin',component: MTLoginComponent },
  { path: 'mTDashboard',component:MTDashboardComponent,canActivate: [AuthGuardService]},
  { path: 'mTCodingOnline',component:MTCodingOnlineComponent,canActivate: [AuthGuardService]},
  { path: 'mTRegister',component:MTRegisterComponent},
  { path: 'mTCodingTests',component:MTCodingTestListComponent,canActivate: [AuthGuardService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
