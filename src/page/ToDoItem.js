import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTodo, changeStatus, changeName } from 'store/actions/index'

const TodoItem = ({ item }) => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const [currentItem, setCurrent] = useState({})

  const showEdit = item => {
    setCurrent(item)
  }
  const closeEdit = () => {
    setCurrent({})
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [currentItem])

  const handleDel = id => {
    dispatch(delTodo(id))
  }
  const changeDone = (id, done) => {
    dispatch(changeStatus(id, done))
  }

  const handelKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      dispatch(changeName(id, e.target.value))
      closeEdit()
    } else if (e.keyCode === 27) {
      closeEdit()
    }
  }
  return (
    <li className={[item.done ? 'completed' : '', item.id === currentItem.id ? 'editing' : ''].join(' ')}>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={item.done} onChange={e => changeDone(item.id, e.target.checked)} />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button className='destroy' onClick={() => handleDel(item.id)}></button>
      </div>
      <input className='edit' onKeyUp={e => handelKeyUp(e, item.id)} onBlur={closeEdit} defaultValue={item.name} ref={inputRef} />
    </li>
  )
}

export default TodoItem
