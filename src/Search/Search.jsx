import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { Subscribe } from 'unstated';
import axios from 'axios'

import SearchContainer from '../containers/SearchContainer'
import './Search.css'

class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query: ""
      }
    }
    
    handleSearch(query) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://1baxuzb7a2.execute-api.us-east-1.amazonaws.com/Prod/abstract/${query}`)
        .then(res => {
            console.log(res)
        })
    }
    handleInputChange(query) {
        this.setState({
            query
        }, ()=>console.log('regular', this.state.query))   
    }
  render() {
    return (
        <div className="search-component-container">
            <div className="header-tag-line">
                <img src={require("../aws_title.jpg")} alt="aws-logo" height="150px" width="700px" />
                <p>
                    AWS SBA LETS PLAY.
                </p>
            </div>
            <div className="haha">
                <div className="search-container">
                    <TextField
                    id="outlined-textarea"
                    label="What're you looking for?"
                    placeholder="This is a multi-line search engine, enter multiple thoughts"
                    multiline
                    margin="normal"
                    variant="outlined"
                    className="text-input-styles"
                    onChange={(e) => this.handleInputChange(e.target.value)}
                    />
                    <Button variant="contained"  color="primary" onClick={() => this.handleSearch(this.state.query)}>
                        <Icon>search</Icon>
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
  }
}
export default Search;