import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    

    const stocksCompanies = [
      { id: 1, company: 'Motherson Sumi Systems Ltd', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 2, company: 'Container Corporation Of India Ltd(L)', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 3, company: 'Adani Transmission Ltd(L)', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 4, company: 'Piramal Enterprises Ltd(L)', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 5, company: 'General Insurance Corporation of India Ltd(L)', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      ];

    const stocksDetails = [
      { id: 1, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '12-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 2, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '13-Feb-2021', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 3, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '14-Feb-2021', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 4, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '15-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 5, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '16-Feb-2021', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      { id: 6, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '17-Feb-2021', open: '58.72', high: '59.17', low: '53.69', close: '55', volume: '536907' },
      { id: 7, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '18-Feb-2021', open: '59.77', high: '62.77', low: '51.69', close: '58', volume: '536708' },
      { id: 8, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '19-Feb-2021', open: '60.27', high: '62.77', low: '59.69', close: '59', volume: '536792' },
      { id: 9, perentId: 1, company: 'Motherson Sumi Systems Ltd', date: '20-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
     // { id: 10, perentId: 1, company: 'Container Corporation Of India Ltd(L)', date: '21-Feb-2021', open: '56.77', high: '57.77', low: '51.69', close: '56', volume: '535908' },
      { id: 11, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '12-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 12, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '13-Feb-2021', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 13, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '14-Feb-2021', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 14, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '15-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 15, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '16-Feb-2021', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      { id: 16, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '17-Feb-2021', open: '58.72', high: '59.17', low: '53.69', close: '55', volume: '536907' },
      { id: 17, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '18-Feb-2021', open: '59.77', high: '62.77', low: '51.69', close: '58', volume: '536708' },
      { id: 18, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '19-Feb-2021', open: '60.27', high: '62.77', low: '59.69', close: '59', volume: '536792' },
      { id: 19, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '20-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
     // { id: 20, perentId: 2, company: 'Container Corporation Of India Ltd(L)', date: '21-Feb-2021', open: '56.77', high: '57.77', low: '51.69', close: '56', volume: '535908' },
      { id: 21, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '12-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 22, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '13-Feb-2021', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 23, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '14-Feb-2021', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 24, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '15-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 25, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '16-Feb-2021', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      { id: 26, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '17-Feb-2021', open: '58.72', high: '59.17', low: '53.69', close: '55', volume: '536907' },
      { id: 27, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '18-Feb-2021', open: '59.77', high: '62.77', low: '51.69', close: '58', volume: '536708' },
      { id: 28, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '19-Feb-2021', open: '60.27', high: '62.77', low: '59.69', close: '59', volume: '536792' },
      { id: 29, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '20-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
     // { id: 30, perentId: 3, company: 'Adani Transmission Ltd(L)', date: '21-Feb-2021', open: '56.77', high: '57.77', low: '51.69', close: '56', volume: '535908' },
      { id: 31, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '12-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 32, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '13-Feb-2021', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 33, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '14-Feb-2021', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 34, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '15-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 35, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '16-Feb-2021', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      { id: 36, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '17-Feb-2021', open: '58.72', high: '59.17', low: '53.69', close: '55', volume: '536907' },
      { id: 37, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '18-Feb-2021', open: '59.77', high: '62.77', low: '51.69', close: '58', volume: '536708' },
      { id: 38, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '19-Feb-2021', open: '60.27', high: '62.77', low: '59.69', close: '59', volume: '536792' },
      { id: 39, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '20-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
     // { id: 40, perentId: 4, company: 'Piramal Enterprises Ltd(L)', date: '21-Feb-2021', open: '56.77', high: '57.77', low: '51.69', close: '56', volume: '535908' },
      { id: 41, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '12-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708'},
      { id: 42, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '13-Feb-2021', open: '51.77', high: '53.77', low: '51.69', close: '53', volume: '536506' },
      { id: 43, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '14-Feb-2021', open: '55.70', high: '56.77', low: '51.69', close: '54', volume: '537708' },
      { id: 44, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '15-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
      { id: 45, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '16-Feb-2021', open: '50.71', high: '52.87', low: '50.69', close: '51', volume: '536701' },
      { id: 46, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '17-Feb-2021', open: '58.72', high: '59.17', low: '53.69', close: '55', volume: '536907' },
      { id: 47, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '18-Feb-2021', open: '59.77', high: '62.77', low: '51.69', close: '58', volume: '536708' },
      { id: 48, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '19-Feb-2021', open: '60.27', high: '62.77', low: '59.69', close: '59', volume: '536792' },
      { id: 49, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '20-Feb-2021', open: '52.77', high: '52.77', low: '51.69', close: '52', volume: '536708' },
     // { id: 50, perentId: 5, company: 'General Insurance Corporation of India Ltd(L)', date: '21-Feb-2021', open: '56.77', high: '57.77', low: '51.69', close: '56', volume: '535908' },

     
    ];
    const users = [
      { id: 1, name: 'Nice', email:"nice@gmail.com", password:"password" },
    ];

    return {stocksCompanies: stocksCompanies, stocksDetails: stocksDetails, users: users};
  }


}
