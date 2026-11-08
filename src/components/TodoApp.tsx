import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import TodoForm from "./TodoForm";
import TodosContainer from "./TodosContainer";

export type Todo = {
  id: string;
  title: string;
  checked: boolean;
};

export default function TodoApp() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [todo, setTodo] = useState<Todo>({
    id: "",
    title: "",
    checked: false,
  });

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  }

  function handleOnSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (todo.title.trim() === "") return;

    if (todo.id !== "") {
      setTodoList((previousList) =>
        previousList.map((entry) =>
          entry.id === todo.id
            ? { ...entry, title: todo.title }
            : entry
        )
      );
    } else {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: todo.title,
        checked: false,
      };

      setTodoList((previousList) => [
        ...previousList,
        newTodo,
      ]);
    }

    setTodo({
      id: "",
      title: "",
      checked: false,
    });
  }

  function handleTodoCheck(
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    setTodoList((previousList) =>
      previousList.map((entry) =>
        entry.id === id
          ? { ...entry, checked: e.target.checked }
          : entry
      )
    );
  }

  function handleDeleteTodo(id: string) {
    setTodoList((previousList) =>
      previousList.filter((entry) => entry.id !== id)
    );
  }

  function handleEditTodo(id: string) {
    const selectedTodo = todoList.find(
      (entry) => entry.id === id
    );

    if (selectedTodo) {
      setTodo(selectedTodo);
    }
  }

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>

      <TodoForm
        todo={todo}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />

      <TodosContainer
        todoList={todoList}
        handleTodoCheck={handleTodoCheck}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}
