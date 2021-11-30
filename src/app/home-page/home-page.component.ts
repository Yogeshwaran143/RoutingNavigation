import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  data: any = this.router.getCurrentNavigation()?.extras.state;
  viewInvoice: boolean = false;
  createInvoice: boolean = false;
  updateInvoice: boolean = false;
  errorDisplay: string | undefined;

  userRole(){
    if ( this.data.username.toLowerCase() == 'user') {
      this.router.navigate(['viewInvoice']);
    } else {
      this.errorDisplay = `<p>${ this.data.username } is not athourised to access View Invoice.</p>`;
    }
  }

  adminRole(){
    if ( this.data.username.toLowerCase() == 'admin') {
      this.router.navigate(['viewInvoice']);
    } else {
      this.errorDisplay = `<p>${ this.data.username } is not athourised to access Create Invoice.</p>`;
    }
  }
  
  superAdminRole(){
    if ( this.data.username.toLowerCase() == 'superadmin' || this.data.username.toLowerCase() == 'super admin') {
      this.router.navigate(['viewInvoice']);
    } else {
      this.errorDisplay = `<p>${ this.data.username } is not athourised to access Update Invoice.</p>`;
    }
  }

}
