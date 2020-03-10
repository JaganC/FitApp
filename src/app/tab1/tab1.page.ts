import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public breakfast: any = "";
  public lunch: any = "";
  public dinner: any = "";
  public snacks: any = "";
  constructor(private dataService : DataService) {}
  ngOnInit() {
    this.dataService.fetch().then(
      result => {
        let data = result.rows.map(row => row.doc);
        let breakfastList = this.dataService.search(data, 'breakfast');
        this.breakfast = breakfastList[Math.floor(Math.random() * breakfastList.length)];
        let lunchList = this.dataService.search(data, 'lunch');
        this.lunch = lunchList[Math.floor(Math.random() * lunchList.length)];
        let dinnerList = this.dataService.search(data, 'dinner');
        this.dinner = dinnerList[Math.floor(Math.random() * dinnerList.length)];
      }
    )
  }
}
