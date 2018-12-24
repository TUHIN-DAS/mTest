import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-m-tdashboard',
  templateUrl: './m-tdashboard.component.html',
  styleUrls: ['./m-tdashboard.component.css']
})
export class MTDashboardComponent implements OnInit {

  constructor(private authService:AuthenticateService) { }

  ngOnInit() {
   this.authService.authobject = null;
  }

}
