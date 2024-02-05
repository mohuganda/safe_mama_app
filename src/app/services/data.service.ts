import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public selectedCourse: any;
  public selectedLesson: any;
  public selectedCategory: any;
  public selectedExercise: any;
  public selectedLecture: any;
  public subthemes=[];


  public preFix = "MAMA-";
  private storage: any;
  
  private currentResource = new Subject<any>();
  private netWorkState = new Subject<any>();

  constructor() {
    
    this.storage = window.localStorage;
  }

  async cacheData(key='', data:any) {
    return await this.storage.setItem(this.preFix + key, JSON.stringify(data));
  }
  async getCache(key='') {
    return await this.storage.getItem(this.preFix + key);
  }
  async clearCache(key='') {
    return await this.storage.removeItem(this.preFix + key);
  }

  public log(message='') {
    console.log('Log: ',message);
  }

  selectResource(data: any) {
    this.currentResource.next(data);
  }

  getSelectedResource() {
    return this.currentResource.asObservable();
  }

  setNetworkState(state:boolean){
    this.netWorkState.next(state);
  }

  isNetworkConnected(){
     
        this.checkNetworkStatus();
        return this.netWorkState.asObservable();
  }

  private async checkNetworkStatus(){
    
    const status = await Network.getStatus();
    console.log('network',status)
    this.netWorkState.next(status.connected);
  }

}
