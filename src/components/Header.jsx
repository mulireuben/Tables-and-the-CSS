import React from 'react'

const Header = ({heading}) => {
  return (
    <div>
        <header className='header'>
          <h1 className='header--title'>
          {heading}
          </h1>
        </header>
    </div>
  )
}

export default Header;