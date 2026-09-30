import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }

  constructor(private http: HttpClient,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {
      username, password, firstName, lastName
    } = this.form

    console.log(this.form);

    this.http.post("https://localhost:7035/api/Login/register", this.form, { responseType: 'text' }).subscribe(data => {
      this.route.navigate(['/login'])
    })
  }

}
