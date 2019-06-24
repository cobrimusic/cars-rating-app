import React, { Component } from 'react'

//Components 
import Info from '../components/Info'
import Hero from '../components/Hero'

export default class Detalles extends Component {
    constructor(props) {
        super(props)
        const match = props.match.params

        this.state = {
            info: null,
            name_to_url_parse: match.name
        }

        this.activeTab = this.activeTab.bind(this)
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.name_to_url_parse
       
        fetch(url)
        .then(results => {
            return results.json()
        }).then(data => {
            console.log(data)
            let info = <Info data={ data } event={ this.activeTab } />

            this.setState({info: info})
        })
    }

    activeTab(e) {
        e.preventDefault()
    }

    render() {
        return(
            <div className="container">
                <Hero title={ this.state.name_to_url_parse }/>
                <div className="columns is-multiline" style={{ margin:'auto' }}>
                   { this.state.info }
                </div>
            </div>
        )
    }
}