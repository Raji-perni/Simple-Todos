// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteTodoItem} = props
  const {id, title} = TodoDetails
  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="container-details">
      <p className="name">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
