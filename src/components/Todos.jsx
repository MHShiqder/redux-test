import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-md">
          <div className="text-2xl font-bold text-white mb-4">Todos</div>
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-800 text-white px-4 py-3 rounded-lg shadow"
              >
                <span className="truncate">{todo.order}. {todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-400 hover:text-red-600 font-bold transition"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
