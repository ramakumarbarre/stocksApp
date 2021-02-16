import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock.service';
import { StockCompany } from '../stock';
import { StockCompanyClass } from '../stockCompany';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: StockCompany[];
  addClicked: boolean = false;
  stockCompany: StockCompany;
  stockCompanyClass: StockCompanyClass = new StockCompanyClass();
  stockForm: FormGroup;
  submitted = false;
  popoverTitle = 'Delete Stock!!!';
  popoverMessage = 'Are you sure to delete';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private stockService: StockService,private toastr: ToastrService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.getStocks();
    this.stockForm = this.formBuilder.group({
      'company': new FormControl('', Validators.required),
      'open': new FormControl('', Validators.required),
      'high': new FormControl('', Validators.required),
      'low': new FormControl('', Validators.required),
      'close': new FormControl('', Validators.required),
      'volume': new FormControl('', Validators.required)
    });
  }

  getStocks(): void {
    this.stockService.getStockCompnies()
    .subscribe(stocks => this.stocks = stocks);

  }

  delete(stockCompany: StockCompany): void {
    this.confirmClicked = true
    this.stocks = this.stocks.filter(h => h !== stockCompany);
    this.stockService.deleteStockCompany(stockCompany).subscribe();
    this.toastr.success('Successfully Deleted!');
  }

  add(): void {
    this.addClicked = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.stockForm?.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.stockForm?.invalid) {
      return;
    }

    const found = this.stocks.find(element => this.stockCompanyClass.company === element.company);
    if (found === undefined){
      this.addClicked = false;
      console.log(this.stockCompanyClass);
      this.stockService.addStockCompany(this.stockCompany )
         .subscribe(stockCompany => {
           //no impl, direct pussing new element in array
           });
      this.stocks.push(this.stockCompanyClass);
      this.toastr.success('Successfully Added!');
    } else {
      this.toastr.error('Stock company is already exists!');
    }

    this.stockCompanyClass = null;
  }

}
