import Footer from 'page/footer'
import Main from 'page/main'
import TodoHeader from 'page/TodoHeader'
import React, { useEffect, useState } from 'react'

export const context = React.createContext()

const App = () => {
  const [list, setList] = useState(() => JSON.parse(localStorage.getItem('todoList')) || [])
  const [type, setType] = useState('all')
  const addTodo = name => {
    setList([
      {
        id: Date.now(),
        name,
        done: false,
      },
      ...list,
    ])
  }
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list))
  }, [list])

  // del -- del TodoItem
  const delTodoItem = id => {
    setList(list.filter(obj => obj.id !== id))
  }
  const changeStatus = id => {
    setList(
      list.map(obj => {
        if (obj.id === id) {
          return { ...obj, done: !obj.done }
        } else {
          return obj
        }
      })
    )
  }

  const changeTaskName = item => {
    setList(
      list.map(obj => {
        if (obj.id === item.id) {
          return { ...obj, name: item.name }
        } else {
          return obj
        }
      })
    )
  }

  const changeType = type => {
    setType(type)
  }

  const changeCompleted = () => {
    setList(list.filter(item => !item.done))
  }

  // change all task status
  const changeAll = val => {
    setList(
      list.map(item => ({
        ...item,
        done: val,
      }))
    )
  }
  return (
    <context.Provider value={{ delTodoItem, changeStatus, changeTaskName }}>
      <section className='todoapp'>
        <TodoHeader addTodo={addTodo}></TodoHeader>
        <Main list={list} type={type} changeAll={changeAll}></Main>
        <Footer list={list} type={type} changeType={changeType} changeCompleted={changeCompleted}></Footer>
      </section>
    </context.Provider>
  )
}

export default App
