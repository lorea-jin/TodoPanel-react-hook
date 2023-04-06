const Footer = ({ list, type,changeType,changeCompleted }) => {
  const unDone = list.filter(item => !item.done).length
  const types = ['all', 'active', 'completed']

	
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{unDone}</strong> item left
      </span>

      <ul className='filters'>
        {types.map(item => (
          <li key={item} onClick={()=>changeType(item)} >
            <a className={item===type?'selected':''} href='#/'>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button className='clear-completed' onClick={changeCompleted}>Clear completed</button>
    </footer>
  )
}
export default Footer
