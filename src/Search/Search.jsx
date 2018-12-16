import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import MUIDataTable from "mui-datatables";


import SearchContainer from '../containers/SearchContainer'
import './Search.css'

class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query: "",
         data: {}
      }
    }
    
    handleSearch(query) {
        axios.get(`https://1baxuzb7a2.execute-api.us-east-1.amazonaws.com/Prod/abstract/${query}`)
        .then(data => {
            if(data) {
                this.setState({data})
            }
            // Search.forceUpdate()
        })
    }
    handleInputChange(query) {
        this.setState({
            query
        }, ()=>{console.log('regular', this.state.query)})   
    }
    renderDataTable(data) {
        if(!data) {
            return "waiting for data table"
        }
        else {
            this.setState({
                data
            })
            
        }
    }

  render() {
      const checker = (data) => {
          if(Object.keys(data).length > 0) {
              const columnHeaders = ['Company', 'Succes %', 'Award']
              let untouchedData = data.data
              
              const dataForTable = untouchedData.map(item => [item.company, `${(item.probability * 100).toFixed(2)} %`, item.award])
              return (
                  <div>
                      <MUIDataTable
                      title={"Query Results"}
                      data={dataForTable}
                      columns={columnHeaders}
                      />
                  </div>
              )
          }
          else {
              return "waiting for the data table"
          }
      }
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
            {checker(this.state.data)}
        </div>
    )
  }
}
export default Search;