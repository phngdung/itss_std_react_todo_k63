/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item }) {
  return (
    <label className="panel-block">
      <iput type="checkbox" />
      {item.text}
    </label>
  );
}

export default TodoItem;
