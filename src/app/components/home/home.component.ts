import { Component } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  username: string='';
  password: string='';

  constructor(private log:HomeService) {}

  home(){
    if (this.username === 'admin' && this.password === 'pass'){
     this.log.isValidUser = true;
     console.log(this.log.isValidUser)
      alert("Login Suceessfull")
    }
  }

}
