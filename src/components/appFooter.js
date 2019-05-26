import React from 'react'
import { Segment } from 'semantic-ui-react'

import '../css/app-footer.css'

class AppFooter extends React.Component {
  render () {
    return (
      <Segment attached className='app-footer-segment'>
        <div>
          <span>Last updated: May, 2019 &copy; </span>
          <a href='https://ensembl.org'>EMBL-EBI</a>.
        </div>
        <div>
          <a href='https://www.ebi.ac.uk/data-protection/ensembl/privacy-notice'>
            Privacy Policy
          </a>
        </div>
      </Segment>
    )
  }
}

export default AppFooter
