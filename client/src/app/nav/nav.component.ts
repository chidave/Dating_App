import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_modals/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn: boolean = false;
  
  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //console.log(this.loggedIn);
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members'); 
    }, err => {
      console.log(err);
      this.toastr.error(err.error);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }

  /*getCurrentUser() {
    this.accountService.currentuser$.subscribe(user => {
      this.loggedIn = !!user;  //changes the user to a boolean
      console.log('User: ');
      console.log(user);
    }, error => {
      console.log(error);
    });
  }*/

}
