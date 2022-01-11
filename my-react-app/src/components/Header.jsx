import React from 'react'
import PropTypes from 'prop-types'


function Header({ text , colorText, colorBackground }) {

    const headerStyles = {
        backgroundColor: colorBackground, 
        color: colorText,
        padding: '1.1rem',
        textAlign: 'center',
    }

    return (
        <header style={ headerStyles }>
            <div className="header-container">
                <h1 style={{margin:0}}> { text } </h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Variavel text',
    colorText: '#ffffff',
    colorBackground: '#1d1d1d'
}

Header.propTypes = {
    text: PropTypes.string,
    colorText: PropTypes.string,
    colorBackground: PropTypes.string
}

export default Header
