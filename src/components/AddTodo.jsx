import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={addTodoHandler}
        className="bg-gray-900 p-6 rounded-xl shadow-lg flex gap-4 items-center w-full max-w-md"
      >
        <input
          type="text"
          className="flex-grow px-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition duration-200"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
