// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    public baseUrl     =  `${(environment.production)?environment.prodBaseUrl:environment.testBaseUrl}`;
    
    student: any = {};

    constructor() {
        const user = window.localStorage.getItem('USER_INFO');
        this.student = (user) ? JSON.parse(user) : {};
    }

    //Resources
    public getResourcesUrl   = (perPage=15,startPage=0) => `${this.baseUrl}getResourses/${perPage}/${startPage}`;
    public getSearchUrl   = (term:string) => `${this.baseUrl}search/${term}`;
    public getRecommendedUrl = (perPage=15,startPage=0,isFeatured=1) => `${this.baseUrl}getResourses/${perPage}/${startPage}/${isFeatured}`;
    public getCategoryResourcesUrl = (perPage=15,startPage=0,classId:number) => `${this.baseUrl}getCategoryResources/${perPage}/${startPage}/${classId}`;
    
    public getAppDataUrl = () => `${this.baseUrl}appData`;
    public newsFeedUrl = () => `${this.baseUrl}news`;
    public webinarsUrl = () => `${this.baseUrl}webinars`;
    public forumsUrl = () => `${this.baseUrl}forums`;
    public trainingUrl = () => `${this.baseUrl}trainings`;
    public reportUrl = () => `${this.baseUrl}indident_report`;
    public contactUrl = () => `${this.baseUrl}contact`;
    
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a  message --- centralises log switching*/
    public log(message: string) {
        // console.log(message);
    }

}
