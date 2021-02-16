import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StockRoutingModule } from "./stocks.routing";
import { StocksComponent } from "./stocks.component";
import { StockDetailComponent } from "../stock-detail/stock-detail.component";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    StockRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    })
  ],
  exports:[
     FormsModule,
    RouterModule,

    ReactiveFormsModule,
  StocksComponent,

  StockDetailComponent
  ],
  declarations:
  [
     StocksComponent,
     StockDetailComponent
    ]
})
export class StockModule {}
