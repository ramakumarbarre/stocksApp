import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from './stocks/stocks.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './AuthGurd/AuthGuard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [


  { path: 'stocks',loadChildren: () => import('./stocks/stocks.module').then(m => m.StockModule),canActivate:[AuthGuard] },
  // { path: 'stocks/:id', component: StockDetailComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  { path: '**', redirectTo: 'stocks' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
