import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MTLoginComponent } from './m-tlogin/m-tlogin.component';
import { MTDashboardComponent } from './m-tdashboard/m-tdashboard.component';
import { MTCodingOnlineComponent } from './m-tcoding-online/m-tcoding-online.component';
const routes: Routes = [
  { path: '', redirectTo: '/mTLogin', pathMatch: 'full' },
  { path: 'mTLogin',component: MTLoginComponent },
  { path: 'mTDashboard',component:MTDashboardComponent},
  { path: 'mTCodingOnline',component:MTCodingOnlineComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
