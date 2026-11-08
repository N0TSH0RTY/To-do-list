import type { ChangeEvent } from "react";
import type { Todo } from "./TodoApp";

type TodoCardProps = {
  todo: Todo;
  handleTodoCheck: (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDeleteTodo: (id: string) => void;
  handleEditTodo: (id: string) => void;
};

export default function TodoCard({
  todo,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodoCardProps) {
  return (
    <div className="todo-card">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={(e) => handleTodoCheck(e, todo.id)}
      />

      <span
        style={{
          textDecoration: todo.checked
            ? "line-through"
            : "none",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => handleEditTodo(todo.id)}>
        Edit
      </button>

      <button onClick={() => handleDeleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}
