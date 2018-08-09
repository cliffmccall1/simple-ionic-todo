
export class TodoService {
  private todos: { title: string }[] = [];

  addTodo(todo: { title: string }) {
    this.todos.push(todo);
  }
  getTodos() {
    return this.todos.slice();
  }
}
