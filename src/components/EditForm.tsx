import { useState } from "react";
import { TodoProps } from "./Todo"; // 引入 TodoProps 接口

// 定義 EditFormProps 接口，表示編輯表單的屬性
interface EditFormProps {
  todo: TodoProps; // 傳入的待辦事項
  editTodo: (id: number, content: string) => void; // 編輯待辦事項的函數，接受 id 和新的內容
}

const EditForm: React.FC<EditFormProps> = ({ todo, editTodo }) => {
  // 使用 useState 來管理編輯內容的狀態
  const [content, setContent] = useState<string>(todo.content);

  // 提交表單的處理函數
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止表單的默認提交行為
    editTodo(todo.id, content); // 調用 editTodo 函數，傳遞 id 和新內容
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入代辦事項" // 輸入框的佔位文字
        value={content} // 設定輸入框的值
        onChange={(e) => {
          setContent(e.target.value); // 更新內容狀態
        }}
      />
      <button type="submit">完成</button> {/* 提交按鈕 */}
    </form>
  );
}

export default EditForm; // 導出 EditForm 組件
