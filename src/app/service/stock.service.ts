import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { StockCompany } from '../stock';
import { StockDetails } from '../stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocksUrl = 'api/stocksCompanies';  // URL to web api
  private stockDetailsUrl = 'api/stocksDetails';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getStockCompnies(): Observable<StockCompany[]> {
    return this.http.get<StockCompany[]>(this.stocksUrl);
  }

  getStockDetails(id: number): Observable<StockDetails[]> {
    return this.http.get<StockDetails[]>(`${this.stockDetailsUrl}/?perentId=${id}`);
  }

  deleteStockCompany(stockCompany: StockCompany | number): Observable<StockCompany> {
    const id = typeof stockCompany === 'number' ? stockCompany : stockCompany.id;
    const url = `${this.stocksUrl}/${id}`;

    return this.http.delete<StockCompany>(url, this.httpOptions);
  }

  addStockCompany(stockCompany: StockCompany): Observable<StockCompany> {
    return this.http.post<StockCompany>(this.stocksUrl, stockCompany, this.httpOptions);
  }

}
