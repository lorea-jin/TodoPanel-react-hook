import Footer from 'page/footer'
import Main from 'page/main'
import TodoHeader from 'page/TodoHeader'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListAsync } from 'store/actions/index'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListAsync())
  }, [dispatch]) // []中写不写dispatch都一样，dispatch本身也是store的方法不会改变，只是为了让警告消失。

  return (
    <section className='todoapp'>
      <TodoHeader></TodoHeader>
      <Main></Main>
      <Footer></Footer>
    </section>
  )
}

export default App
