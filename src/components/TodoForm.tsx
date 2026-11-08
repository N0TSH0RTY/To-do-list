import type { ChangeEvent, SubmitEvent } from "react";
import type { Todo } from "./TodoApp";

type TodoFormProps = {
  todo: Todo;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
};

export default function TodoForm({
  todo,
  handleOnChange,
  handleOnSubmit,
}: TodoFormProps) {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={todo.title}
        onChange={handleOnChange}
        placeholder="Enter a task"
      />

      <button type="submit">
        {todo.id !== "" ? "Update" : "Add"}
      </button>
    </form>
  );
}
