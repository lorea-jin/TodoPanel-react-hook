import TodoItem from './ToDoItem'
const Main = ({ list, type,changeAll }) => {
  let showList = []
  if (type === 'active') {
    showList = list.filter(item => !item.done)
  } else if (type === 'completed') {
    showList = list.filter(item => item.done)
  } else if (type === 'all') {
    showList = list
  }

  // const changeAll = (e) => {
  //   console.log(e.target.checked)
  // }
  return (
    <section className='main'>
      {/* 全选按钮 */}
      <input id='toggle-all' className='toggle-all' type='checkbox' checked={list.every(item=>item.done)} onChange={(e)=>changeAll(e.target.checked)}/>
      <label htmlFor='toggle-all' >
        Mark all as complete
      </label>

      {/* 任务列表 */}
      <ul className='todo-list'>
        {showList?.map(item => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}

export default Main
