import { Component, OnInit } from '@angular/core';
import { DataService } from './fetch-data-from-forsquare.service';

import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forsquare';
  public icon = 'bg_32';
  ngOnInit() {
  }
  constructor(private _data: DataService) { }

  public setCategory(id) {
    const othertabs = document.getElementsByClassName('tab-pane active');
    const removeActiveNav = document.getElementsByClassName('nav-link active');
    othertabs[0].classList.remove('active');
    removeActiveNav[0].classList.remove('active');
    const nav = document.getElementById(id + '-nav');
    const tab = document.getElementById(id);
    nav.classList.add('active');
    tab.classList.add('active');
    this._data.setCategory(id);
  }
  public setSubCategory(id, name) {
    const selectedSub = document.getElementById('selectedSubCategory');
    selectedSub.innerHTML = name;
    this._data.setSubCategory(id);
  }
}
