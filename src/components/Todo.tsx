import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";


// 定義 TodoProps 接口，表示每個待辦事項的屬性
export interface TodoProps {
  content: string;   // 待辦事項內容
  id: number;        // 唯一識別碼
  isCompleted: boolean; // 是否已完成
  isEditing: boolean;   // 是否正在編輯
}

// 將 Todo 函數的參數類型設置為包含 todo 及操作函數的對象
export function Todo({
  todo,
  toggleCompleted,
  deleteTodo,
  toggleIsEditing,
  editTodo
}: {
  todo: TodoProps;  // 傳入的待辦事項
  toggleCompleted: (id: number) => void; // 切換完成狀態的函數
  deleteTodo: (id: number) => void;      // 刪除待辦事項的函數
  toggleIsEditing: (id: number) => void;  // 切換編輯狀態的函數
  editTodo: (id: number, newContent: string) => void;
}) {
  // 如果正在編輯，則顯示編輯表單，否則顯示待辦事項
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo}></EditForm>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id); // 點擊待辦事項時切換完成狀態
        }}
      >
        {todo.content} {/* 顯示待辦事項內容 */}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toggleIsEditing(todo.id); // 點擊編輯圖標時切換編輯狀態
          }}
          style={{ cursor: "pointer" }} // 設置光標為指針樣式
        />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id); // 點擊刪除圖標時刪除待辦事項
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }} // 設置光標為指針樣式並加上左邊距
        />
      </div>
    </div>
  );
}

export default Todo;
