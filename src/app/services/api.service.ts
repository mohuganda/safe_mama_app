// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UiService } from './ui.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService {

  //the baseservice contains all endpoints and logger + error handler

  constructor(
    private http: HttpClient,
    private uiService: UiService,) {
    super();
  }

  getResources(startPage=0,perPage=15): Observable<any> {
    return this.http.get(this.getResourcesUrl(perPage,startPage))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getResources', []))
      );
  }

  getSearchResults(term:string): Observable<any>{

    return this.http.get(this.getSearchUrl(term))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getSearchResults', []))
      );
  }

  getCategoryResources(startPage=0,perPage=15,categoryId:number): Observable<any> {
    return this.http.get(this.getCategoryResourcesUrl(perPage,startPage,categoryId))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getCategoryResourcesUrl', []))
      );
  }

  

  getRecommended(startPage=0,perPage=15): Observable<any> {
    
    return this.http.get(this.getRecommendedUrl(perPage,startPage))
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getRecommended', []))
      );
  }

  getAppData(): Observable<any> {
    return this.http.get(this.getAppDataUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getAppDataUrl', []))
      );
  }

  getRssFeed(): Observable<any> {
    return this.http.get(this.newsFeedUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getRssFeed', []))
      );
  }


  getWebinars(): Observable<any> {
    return this.http.get(this.webinarsUrl())
      .pipe(
        tap(_ => this.log('response received')),
        catchError(this.handleError('getWebinars', []))
      );
  }



}
