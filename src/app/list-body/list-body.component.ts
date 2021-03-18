import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service'; 
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})
export class ListBodyComponent implements OnInit {

  constructor( private listService: ListService ) { }

  ngOnInit(): void {
  }

  msg:string = '';
  todoCount: number = 0;
  // todoList: string = "";
  todosLocalCache: Todo[] = []; 
  renderTodos(todos: Todo[]) {
    this.todosLocalCache = todos;
    // console.log({ todosLocalCache });
    // let todoString = "";
    // todos.forEach(todo => {
    //   todoString += `
    //     <li data-id="${todo.id}"${todo.complete ? ' class="todos-complete"' : ""}>
    //       <input type="checkbox"${todo.complete ? " checked" : ""}>
    //       <span>${todo.label}</span>
    //       <button type="button"></button>
    //     </li>
    //   `;
    // });
    // this.todoList = todoString;
    this.todoCount = todos.filter(todo => !todo.complete).length;
    // clear.style.display = todos.filter(todo => todo.complete).length
    //   ? "block"
    //   : "none";
    // console.log(todoString);
  }

  addTodo(event: any) {
    event.preventDefault();
  
    const todo = {
      label: this.msg,
      complete: false
    };
  
    this.listService.api
      .create(todo)
      .then(() => this.listService.api.findAll())
      .then(response => response.json())
      .then(todos => {
        this.renderTodos(todos);
        this.msg = "";
      });
  }

  
 
}
