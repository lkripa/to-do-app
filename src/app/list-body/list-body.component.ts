import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service'; 

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})
export class ListBodyComponent implements OnInit {
  @Input() toDoItem: string = ""; 

  constructor( private listService: ListService ) { }

  ngOnInit(): void {
  }

  msg = '';
  // "handleKeyUp($event)"
  handleSubmit(event: any){
    event.preventDefault();
    alert(this.msg);
  }
  handleKeyUp(event: any){    
     if(event.keyCode === 13){        
       this.handleSubmit(event);     
     }  
  }
  addTodo(event: any) {
    event.preventDefault();
  
    const todo = {
      label: this.msg, //input.value.trim(),
      complete: false
    };
  
    this.listService.api
      .create(todo)
      .then(() => this.listService.api.findAll())
      .then(response => response.json())
      // .then(todos => {
      //   renderTodos(todos);
      //   input.value = "";
      // });
  }

 
}
