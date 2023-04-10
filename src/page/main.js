import { useSelector } from 'react-redux'
import TodoItem from './ToDoItem'
const Main = () => {
  const list = useSelector(state => {
    const { filter, list } = state
    if (filter === 'all') {
      return list
    } else if (filter === 'active') {
      return list.filter(item => !item.done)
    } else if (filter === 'completed') {
      return list.filter(item => item.done)
    }
  })

  return (
    <section className='main'>
      {/* 全选按钮 */}
      <input id='toggle-all' className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>

      {/* 任务列表 */}
      <ul className='todo-list'>
        {list?.map(item => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}

export default Main
