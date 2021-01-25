import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { EncrDecrService } from './encr-decr.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  authToken = "";

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private EncrDecrService: EncrDecrService,
    private spinner: NgxSpinnerService
  ) {

  }

  getRoles() {
    const roles = {
      admin: 1,
      student: 2,
      mentor: 3,
      school: 4,
    };
    return roles;
  }


  async getHeaders() {
    this.loadToken();
    const options = { headers: {} };
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*';
    if (this.authToken) {
      // console.log("coming here:: ", this.authToken);
      options.headers['Authorization'] = this.authToken;
    }
    return options;
  }

  isLoggedIn() {
    return !!localStorage.getItem('userInfo');
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  ImFromSchool() {
    if (this.isLoggedIn() && !isNullOrUndefined(localStorage.getItem('userInfo')) && localStorage.getItem('userInfo') != 'undefined') {
      const userDetails = JSON.parse(this.EncrDecrService.get(localStorage.getItem('userInfo')));

      if(userDetails.School){
        if(userDetails.School.SchoolID){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }

    } else {
      return null;
    }
   
  }

  async postMethod(url, data): Promise<any> {
    await this.spinner.show();
    let headers = await this.getHeaders();
    return this.http.post(url, data, headers).toPromise().then(
      async (response) => {
        await this.spinner.hide();
        return response
      })
  }

  async getMethod(url): Promise<any> {
    await this.spinner.show();
    let headers = await this.getHeaders();
    return this.http.get(url, headers).toPromise().then(async (response) => {
      await this.spinner.hide();
      return response
    })
  }


  async postMethodWithoutloader(url, data): Promise<any> {
    let headers = await this.getHeaders();
    return this.http.post(url, data, headers).toPromise().then(
      response => {
        return response
      })
  }

  async getMethodWithoutloader(url): Promise<any> {
    let headers = await this.getHeaders();
    return this.http.get(url, headers).toPromise().then(response => {
      return response
    })
  }


  getuserInfo() {
    if (this.isLoggedIn() && !isNullOrUndefined(localStorage.getItem('userInfo')) && localStorage.getItem('userInfo') != 'undefined') {
      const userDetails = JSON.parse(this.EncrDecrService.get(localStorage.getItem('userInfo')));
      return userDetails;
    } else {
      return null;
    }
  }




}
