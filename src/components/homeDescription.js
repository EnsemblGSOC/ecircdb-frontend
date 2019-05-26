import React from 'react'
import { Header } from 'semantic-ui-react'

class HomeDescription extends React.Component {
  render () {
    return (
      <div className='home-description-wrapper'>
        <Header as='h2'>About Ensembl</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis, ligula non sagittis sollicitudin, lectus lorem cursus
          lorem, non eleifend elit mauris ut velit. Cras elementum turpis nec
          orci lacinia, ut commodo risus eleifend. Praesent volutpat nisl ac
          purus ultricies volutpat. Vestibulum dapibus eros vel sem sagittis, a
          dictum augue tincidunt. Vestibulum eget nulla tincidunt, pretium nibh
          at, ultricies purus. Integer at commodo nisi, sit amet semper dui.
        </p>
      </div>
    )
  }
}

export default HomeDescription
