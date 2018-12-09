import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNG } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MTLoginComponent } from './m-tlogin/m-tlogin.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MTDashboardComponent } from './m-tdashboard/m-tdashboard.component';
import { MTNavBarComponent } from './m-tnav-bar/m-tnav-bar.component';
import { MTCodingOnlineComponent } from './m-tcoding-online/m-tcoding-online.component';
import { MTBreadCrumbComponent } from './m-tbread-crumb/m-tbread-crumb.component';
import { FormsModule } from '@angular/forms';
import { Notification } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    MTLoginComponent,
    MTDashboardComponent,
    MTNavBarComponent,
    MTCodingOnlineComponent,
    MTBreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    PrimeNG,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [Notification],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
