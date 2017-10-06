import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  private api_client = 'client_id=' + environment.CLIENT_ID + '&client_secret=' + environment.CLIENT_SECRET;
  private selectedCategoryId = null;
  private selectedSubCategoryId = null;

  public categories: any[];
  public places: any[];
  public init = false;
  public loading = false;

  constructor(private _http: Http) {
    this.populateCategories();
  }

  private populateCategories() {
    this._http.get(environment.BASE + '/venues/categories?' + this.api_client + '&v=20170930')
      .map(
      (response: Response) => {
        return response.json();
      }).subscribe(
      (response: Response) => {
        this.categories = response['response']['categories'];
        this.selectedCategoryId = response['response']['categories'][0].id;
      },
      (error) => { console.warn(error) },
      () => { this.init = true });
  }
  public getStuffInValletts() {
    let name = '';
    if (this.selectedSubCategoryId) {
      name = this.categories.filter(x => x.id === this.selectedCategoryId)[0]
        .categories.filter(sub => sub.id === this.selectedSubCategoryId)[0].name;
    } else if (this.selectedCategoryId) {
      name = this.categories.filter(x => x.id === this.selectedCategoryId)[0].name;
    }
    if (name) {
      this._http.get(environment.BASE + 'venues/explore?near=valletta&query='
        + name
        + '&' + this.api_client + '&v=20170930')
        .map(
        (response: Response) => {
          return response.json();
        }).subscribe(
        (response: Response) => {
          this.places = response['response']['groups'];
        },
        (error) => { console.warn(error) },
        () => { this.loading = false }
        );
    }
  }


  public setCategory(id) {
    this.loading = true;
    this.selectedCategoryId = id;
    this.selectedSubCategoryId = null;
    this.getStuffInValletts();
  }

  public setSubCategory(id) {
    this.loading = true;
    this.selectedSubCategoryId = id;
    this.getStuffInValletts();
  }
}
