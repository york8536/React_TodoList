import React, { useState } from "react";

// 定義 CreateForm 的 props 類型
interface CreateFormProps {
  addTodo: (content: string) => void; // 定義 addTodo 的類型，接收一個字符串並返回 void
}

// CreateForm 組件
const CreateForm: React.FC<CreateFormProps> = ({ addTodo }) => {
  const [content, setContent] = useState<string>(""); // 使用字符串類型定義狀態

  // 提交表單的處理函數
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止表單的默認提交行為
    if (content.trim()) {
      // 確保內容不為空
      addTodo(content); // 調用 addTodo 函數，將內容傳遞給父組件
      setContent(""); // 清空輸入框
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入代辦事項" // 輸入框的佔位符
        value={content} // 輸入框的值
        onChange={(e) => setContent(e.target.value)} // 當輸入變更時更新狀態
      />
      <button type="submit">加入</button>
    </form>
  );
};

export default CreateForm; // 將 CreateForm 組件導出
