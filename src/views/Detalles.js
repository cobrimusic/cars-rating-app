import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Components 
import Hero from '../components/Hero'
import Info from '../components/Info'

export default class Detalles extends Component {
    constructor(props) {
        super(props)
        const match = props.match.params

        this.state = {
            info: null,
            name_to_url_parse: match.name
        }

        this.capitalizeFirst = this.capitalizeFirst.bind(this)
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.name_to_url_parse
       
        fetch(url)
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data)
            let info = <Info name={ this.capitalizeFirst(data.name) } data={ data } event={ this.activeTab } />
            this.setState({info: info})
        })
    }

    capitalizeFirst(v) {
        return v.charAt(0).toUpperCase() + v.slice(1)
    }

    render() {
        return(
            <div className="container">
                <Hero title={  this.capitalizeFirst(this.state.name_to_url_parse) }/>
                <div className="columns is-multiline" style={{ margin:'auto' }}>
                   { this.state.info }
                </div>

                <Link to='/'><a className="back-link info-padding" href="javascript:void(0)">Regresar...</a></Link>
            </div>
        )
    }
}