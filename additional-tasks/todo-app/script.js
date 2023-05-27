// todo app
/*
const todos = [];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

function addTodo(todo) {
  if (typeof todo !== "string" || todo === "") {
    console.log("Invalid input");
  } else {
    todos.push(todo);
  }
}

function deleteTodo(todo) {
  for (let i = 0; i < todo.length; i++) {
    if (todos[i] === todo) {
      todos.splice(i, 1);
    }
  }
}
addTodo("CSS lernen");
listTodos();
console.log("x");
addTodo("Stuff");
listTodos();
console.log("x");
addTodo("JS lernen");
deleteTodo("Stuff");
listTodos();
*/

// todo app with objects

const todos = [
  { description: "JS lernen", done: false },
  { description: "CSS lernen", done: false },
  { description: "HTML lernen", done: true },
];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === false) {
      console.log("[ ] " + todos[i].description);
    }
    if (todos[i].done === true) {
      console.log("[x] " + todos[i].description);
    }
  }
}

function addTodo(todo) {
  if (typeof todo !== "string" || todo === "") {
    console.log("Invalid input");
  } else {
    todos.push({ description: todo, done: false });
  }
}

function doneTodo(todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].description === todo && todos[i].done === false) {
      todos[i].done = true;
    }
  }
}
function showOpenTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === false) {
      console.log("[ ] " + todos[i].description);
    }
  }
}

function deleteDoneTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === true) {
      todos.splice(i, 1);
    }
  }
}

console.log("-> List ToDos");
listTodos();
console.log("-> Add Todo");
addTodo(5);
addTodo("");
addTodo("Vue lernen");
addTodo("Git lernen");
listTodos();
console.log("-> Set to done");
doneTodo("Git lernen");
listTodos();
console.log("-> Show open ToDos");
showOpenTodos();
console.log("-> Show all ToDos");
listTodos();
console.log("-> Delete done ToDos");
deleteDoneTodos();
listTodos();
