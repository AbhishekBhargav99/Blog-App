import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  login(Email: HTMLInputElement, Password: HTMLInputElement){
    let email = Email.value.trim();
    let password = Password.value.trim();
    if(!email)
      alert("Enter Email");
    else if(!password)
      alert("Enter Password");
    
    if(email === "superadmin@123" && password === "super@123")
      this.router.navigate(['..', 'approve' ], {relativeTo: this.route});

    else if(email === "admin@123" && password === "admin@123")
      this.router.navigate(['..', 'add-blog' ], {relativeTo: this.route});

    else
      alert("Wrong Credential")
    
  }

}
