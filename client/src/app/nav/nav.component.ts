import { Component, OnInit } from '@angular/core';
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
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //console.log(this.loggedIn);
  }

  login() {
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      /*this.loggedIn = true;
      console.log('user in nav comp: ')
      console.log(this.loggedIn);*/  
    }, err => {
      //this.loggedIn = false;
      console.log(err);
    });
  }

  logout() {
    this.accountService.logout();
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
