import React, { useCallback, useState } from 'react'

// Giải thích: Dùng useMemo + useCallback để tối ưu hiệu năng
// bằng cách chống render lại các component con không cần thiết
// khi component cha re-render -> dẫn tới việc tạo lại các hàm onDelete mới
// -> bọc hàm onDelete với useCallback để giữ nguyên tham chiếu hàm
// -> bọc MessageItem với React.memo để chỉ render lại khi props thay đổi
const MessageItem = React.memo(({ message, index, onDelete }) => {
  console.log("Render message item", message)

  const handleDeleteClick = () => {
    onDelete(index);
  };

  return (
    <div>
      {message}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
});

const App = () => {
  const [count, setCount] = useState(0)
  const [messages, setMessages] = useState([
    'Message 1', 'Message 2', 'Message 3',
  ])

  const onDelete = useCallback((index) => {
    console.log("Delete message at index:", index)
    setMessages((prevMessages) =>
      prevMessages.filter((_, i) => i !== index)
    )
  }, [])

  return (
    <div>
      <h3>MESSAGE LIST</h3>
      {messages.map((msg, index) => (
        <MessageItem
          key={index}
          index={index}
          message={msg}
          onDelete={onDelete}
        />
      ))}

      <button onClick={() => setCount(count + 1)}>
        Re-render app (Count: {count})
      </button>
    </div>
  )
}

export default App