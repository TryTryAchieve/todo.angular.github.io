import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() tododelete:EventEmitter<Todo>= new EventEmitter();
  @Output() todocheckbox:EventEmitter<Todo>= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onclick(todo:Todo){
    this.tododelete.emit(todo);
    console.log("Party")
  }
  oncheck(todo:Todo){
    this.todocheckbox.emit(todo)
  }
}
