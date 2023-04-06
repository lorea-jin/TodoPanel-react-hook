import { useRef } from "react"

const TodoHeader = ({addTodo}) => {
	const inputRef=useRef()

	const handleKeyUp=(e)=>{
		if(e.keyCode===13){
			addTodo(inputRef.current.value)
			inputRef.current.value=''
		}
	}
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
				ref={inputRef}
				onKeyUp={handleKeyUp}
      />
    </header>
  )
}

export default TodoHeader
