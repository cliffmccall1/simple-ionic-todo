import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NewtodoPage } from "../newtodo/newtodo";
import { TodoService } from "../../services/todo";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  todos: { title: string }[] = [];
  constructor(
    public navCtrl: NavController,
    private todoservice: TodoService
  ) {}

  ionViewWillEnter() {
    this.todos = this.todoservice.getTodos();
  }

  onLoadNewTodo() {
    this.navCtrl.push(NewtodoPage);
  }
}
