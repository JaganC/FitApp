import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title: string = "";
  public ingInput: string = "";
  public type: string = "";
  public ingList: any = [];
  public mtype: any = [];
 
  constructor(private dataService : DataService) {}

  
  addIngredients = () => {
    this.ingInput.trim().length > 0 ? this.ingList.push(this.ingInput) : "";
    this.ingInput = "";

  }
  submitIng = ()=> {
    console.log(this.title);
    console.log(this.type);
    console.log(this.mtype);
    console.log(this.ingList);
    const data = {
      _id : new Date().getTime().toString(),
      title : this.title,
      type: this.type,
      mealType: this.mtype,
      ingredient: this.ingList
    }
    this.dataService.post(data).then((res) => console.log(res));
  }

}
