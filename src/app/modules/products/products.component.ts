import { Component, OnInit } from '@angular/core';
import { PlatziService } from '../../services/platzi.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/icons/loading/loading.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LoadingComponent, ProductComponent],
  providers: [PlatziService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  loading = true

  constructor(private platziService: PlatziService) { }

  ngOnInit(): void {
    this.platziService.getAllProducts().subscribe(response => {
      this.products = response
      this.loading = false
    })
  }

}
