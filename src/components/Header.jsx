import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Header({title, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,color : textColor
        
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <Link to='/'><h2>{title}</h2></Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title : 'FeedBack UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6695'
}

Header.propTypes = {
    'title' : PropTypes.string
}

export default Header