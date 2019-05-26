import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

import { logo } from '../urls'
import '../css/app-header.css'

class AppHeader extends React.Component {
  render () {
    return (
      <Segment attached className='app-header-segment'>
        <Link to='/'>
          <img src={logo()} alt='logo' className='app-logo' />
          <h1 className='app-logo-text'>circdb</h1>
        </Link>
      </Segment>
    )
  }
}

export default AppHeader
