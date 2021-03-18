import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  makeApiRequest(
    path: string, 
    method: string, 
    bodyObject?: Todo
  ){
    console.log("method", method, bodyObject)
    return fetch("http://localhost:3000/" + path, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    });
  }
  api = (() => {
    // console.log("api")
   return {
     create: (todo: Todo) => this.makeApiRequest("todo", "POST", todo),
     findAll: () => this.makeApiRequest("todo", "GET"),
     findOne: (todo: Todo) => this.makeApiRequest("todo/" + todo.id, "GET"),
     update: (todo: Todo) => this.makeApiRequest("todo/" + todo.id, "PUT", todo),
     remove: (id: Todo) => this.makeApiRequest("todo/" + id, "DELETE")
   };
 })();
}
