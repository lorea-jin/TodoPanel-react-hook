import { context } from 'App.js'
import { useContext, useEffect, useRef, useState } from 'react'

const TodoItem = ({ item }) => {
  const { delTodoItem, changeStatus,changeTaskName } = useContext(context)
  const [currentItem, setCurrent] = useState({id:'',name:''})
  const editInputRef = useRef()
  useEffect(() => {
    editInputRef.current.focus()
  }, [currentItem])

  const showEdit = item => {
    setCurrent(item)
  }
  const handelKeyUp = e => {
    if (e.keyCode === 27) {
      setCurrent({id:'',name:''})
    }else if(e.keyCode===13){
			changeTaskName(currentItem)
			setCurrent({id:'',name:''})
		}
  }
  return (
    <li className={[item.done ? 'completed' : null, item.id === currentItem.id ? 'editing' : null].join(' ')}>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={item.done} onChange={() => changeStatus(item.id)} />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button className='destroy' onClick={() => delTodoItem(item.id)}></button>
      </div>
      <input
        className='edit'
        value={currentItem.name}
        onChange={e => setCurrent({ ...currentItem, name: e.target.value })}
        onBlur={() => setCurrent({id:'',name:''})}
        onKeyUp={handelKeyUp}
        ref={editInputRef}
      />
    </li>
  )
}

export default TodoItem
