import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StockService } from '../service/stock.service';
import { StockCompany, StockDetails } from '../stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  stockDetails: StockDetails[];
  company: String;


  constructor(private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location) { }

  ngOnInit(): void {
    this.getStockDetails();
  }

  getStockDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.stockService.getStockDetails(id)
      .subscribe(stockDetails => {
        this.stockDetails = stockDetails
        console.log(stockDetails);
        this.company = this.stockDetails[0].company;
      }
        );
  }

  goBack(): void {
    this.location.back();
  }

}
