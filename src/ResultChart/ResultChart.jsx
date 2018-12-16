import React, { Component } from 'react'
import SearchHeader from '../SearchHeader/SearchHeader'
import { Subscribe } from 'unstated';

import SearchContainer from '../containers/SearchContainer'
import Search from '../Search/Search';

class ResultChart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        debugger
        return (
            <Subscribe to={[SearchContainer]}>
            {SearchContainer => (
                <div>
                    <SearchHeader />
                    this is the results page
                </div>
            )}
           
            </Subscribe>        
            )
  }
}

export default ResultChart
