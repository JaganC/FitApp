import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
import PouchDB from 'pouchdb';

@Injectable()
export class DataService {

  private db: any;
  private isInstantiated: boolean;
  

  public constructor() {

    if (!this.isInstantiated) {
      this.db = new PouchDB('recipes');
      this.isInstantiated = true;
    }
  }

  public fetch() {
    return this.db.allDocs({include_docs: true});
  }
  public post(data) : Promise<any> {
      console.info(data);
    let promise = this.db
        .put(data)
        .then(res => console.info(res))
        .catch(error => console.error(error));
    ;
    return( promise );
}
 public search(data, keyword) {
    var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "title",
          "type",
          "mealType",
          "ingredient"
        ]
      };
      let fuse = new Fuse(data, options);
      return fuse.search(keyword);
 }
}