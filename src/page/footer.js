import { useDispatch, useSelector } from 'react-redux'
import { changeType } from 'store/actions'

const Footer = ({ changeCompleted }) => {
  const status = ['all', 'active', 'completed']
	const currentType=useSelector(state=>state.filter)
  const dispatch = useDispatch()

  const handleClick = item => {
    dispatch(changeType(item))
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{0}</strong> item left
      </span>

      <ul className='filters'>
        {status.map(item => (
          <li key={item} onClick={() => handleClick(item)}>
            <a href={`#/${item}`}  className={currentType===item ? 'selected':''}>{item}</a>
          </li>
        ))}
      </ul>

      <button className='clear-completed' onClick={changeCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
export default Footer
