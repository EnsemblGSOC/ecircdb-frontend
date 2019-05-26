import React from 'react'
import { Segment } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'

import { repoCommits } from '../urls'
import { axiosRequest } from '../utils'
import '../css/app-footer.css'

class AppFooter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lastUpdate: ''
    }
  }

  componentDidMount () {
    this.lastUpdated()
  }

  lastUpdated = () => {
    axios
      .all([
        axiosRequest('get', repoCommits('ecircdb-backend')),
        axiosRequest('get', repoCommits('ecircdb-frontend'))
      ])
      .then(
        axios.spread((res1, res2) => {
          const lastUpdate =
            res2.data[0].commit.author.date >= res1.data[0].commit.author.date
              ? res2.data[0].commit.author.date
              : res1.data[0].commit.author.date
          this.setState({ lastUpdate: moment(lastUpdate).format('MMM, YYYY') })
        })
      )
      .catch(() => {
        this.setState({ lastUpdate: 'Error' })
      })
  }

  render () {
    return (
      <Segment attached className='app-footer-segment'>
        <div>
          <span>Last updated: {this.state.lastUpdate} &copy; </span>
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
