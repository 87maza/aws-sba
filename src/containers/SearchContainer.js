import { Container } from 'unstated';

class SearchContainer extends Container {
    state = {
        query: ""
    }

    handleInputChange(query) {
        this.setState({
            query
        }, ()=>console.log('from container', this.state.query))   
    }
    handleSearch() {
        console.log('from container',this.state.query)
    }
}

export default SearchContainer