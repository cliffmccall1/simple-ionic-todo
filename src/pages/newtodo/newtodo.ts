import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TodoService } from "../../services/todo";

/**
 * Generated class for the NewtodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-newtodo",
  templateUrl: "newtodo.html"
})
export class NewtodoPage {
  constructor(
    private todoservice: TodoService,
    private navCtrl: NavController
  ) {}

  onAddTodo(value: { title: string }) {
    this.todoservice.addTodo(value);
    this.navCtrl.pop();
  }
}
