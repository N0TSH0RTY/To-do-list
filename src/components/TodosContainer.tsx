import type { ChangeEvent } from "react";
import type { Todo } from "./TodoApp";
import TodoCard from "./TodoCard";

type TodosContainerProps = {
  todoList: Todo[];
  handleTodoCheck: (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDeleteTodo: (id: string) => void;
  handleEditTodo: (id: string) => void;
};

export default function TodosContainer({
  todoList,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodosContainerProps) {
  return (
    <div className="todos-container">
      {todoList.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          handleTodoCheck={handleTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}
