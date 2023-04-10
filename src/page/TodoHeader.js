import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/actions/index'

const TodoHeader = () => {
  const dispatch = useDispatch()
  const inputRef = useRef()

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      dispatch(addTodo({ name: inputRef.current.value, done: false }))
      inputRef.current.value = ''
    }
  }
  return (
    <header className='header'>
      <h1>todos</h1>
      <input className='new-todo' placeholder='What needs to be done?' autoFocus ref={inputRef} onKeyUp={handleKeyUp} />
    </header>
  )
}

export default TodoHeader
