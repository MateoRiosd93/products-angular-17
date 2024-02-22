import { Component, OnInit } from '@angular/core';
import { PlatziService } from '../../services/platzi.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers: [PlatziService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToProducts(){
    this.router.navigate(["products"])
  }
}
