import { Component, OnInit } from '@angular/core';
import { PlatziService } from '../../services/platzi.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers: [PlatziService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
