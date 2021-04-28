import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
	const onClick = () => {
		console.log('Clicked!');
	}

	return (
		<header className='header'>
			<h1>{props.title}</h1>
			<Button color='green' text='Add' onClick={onClick}></Button>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}

//CSS in JS
const headingStyle = {
	color: 'red', 
	backgroundColor: 'black'
}

//way to catch errors by making sure a prop is a specific type
Header.propTypes = {
	title: PropTypes.string
}



export default Header