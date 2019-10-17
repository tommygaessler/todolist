import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { StateService } from './services/state.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoForm: FormGroup
  todos: Array<object> = []

  constructor(formBuilder: FormBuilder, public stateService: StateService) {
    this.todos = stateService.getTodos()
    this.todoForm = formBuilder.group({
      'name': '',
      'completed': false
    })
  }

  addTodo() {
    this.todos.push(this.todoForm.value)
    this.todoForm['controls'].name.reset('')
    console.log(this.todoForm.value)
    this.updateTodos()
  }

  updateTodos() {
    this.stateService.setTodos(this.todos)
  }
}
