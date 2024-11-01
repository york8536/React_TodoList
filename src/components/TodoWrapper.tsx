import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

// 定義 TodoItem 接口，表示每個待辦事項的屬性
interface TodoItem {
  content: string;   // 待辦事項內容
  id: number;        // 唯一識別碼
  isCompleted: boolean; // 是否已完成
  isEditing: boolean;   // 是否正在編輯
}

function TodoWrapper() {
  // 使用 useState 來管理待辦事項的狀態
  const [todos, setTodos] = useState<TodoItem[]>([
    { content: "打掃房間(預設)", id: Math.random(), isCompleted: false, isEditing: false },
    { content: "洗衣服(預設)", id: Math.random(), isCompleted: false, isEditing: false },
  ]);

  // 添加新的待辦事項
  const addTodo = (content: string) => {
    setTodos([
      ...todos,
      { content: content, id: Math.random(), isCompleted: false, isEditing: false },
    ]);
  };

  // 刪除指定的待辦事項
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 切換待辦事項的完成狀態
  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // 切換編輯狀態
  const toggleIsEditing = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // 編輯待辦事項的內容
  const editTodo = (id: number, newContent: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id
        ? { ...todo, content: newContent, isEditing: false }
        : todo;
    }));
  };

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      {/* 渲染新增待辦事項的表單 */}
      <CreateForm addTodo={addTodo} />
      {/* 渲染所有待辦事項 */}
      {todos.map((todo) => (
        <Todo
          toggleCompleted={toggleCompleted}
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleIsEditing={toggleIsEditing}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;
