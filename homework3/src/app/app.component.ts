import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authenticatio/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework3';

  constructor(public authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    let toggler = document.getElementsByClassName("caret");
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.parentElement.querySelector(".arrow").classList.toggle("arrow-down");
        this.classList.toggle("caret-border");

      });
    }
  }

}
