import React from 'react'
import { Icon, Dimmer } from 'semantic-ui-react'

class Loader extends React.Component {
  render () {
    return (
      <div>
        <Dimmer inverted active>
          <Icon.Group size='large'>
            <Icon loading size='big' name='circle notch' color='black' />
            <Icon name='lab' color='black' />
          </Icon.Group>
        </Dimmer>
      </div>
    )
  }
}

export default Loader
