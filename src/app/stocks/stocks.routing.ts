import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StockDetailComponent } from "../stock-detail/stock-detail.component";
import { StocksComponent } from "./stocks.component";



const routes: Routes = [
    { path: "",  component:StocksComponent},
     {path:":id",component:  StockDetailComponent}

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class StockRoutingModule { }
