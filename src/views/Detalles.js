import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Components 
import Hero from '../components/Hero'
import Info from '../layouts/Info'

export default class Detalles extends Component {
    constructor(props) {
        super(props)
        const match = props.match.params

        this.state = {
            data: null,
            info: null,
            name_to_url_parse: match.id
        }

        this.capitalizeFirst = this.capitalizeFirst.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
    }

    changeStatus(status) {
        const url = 'http://localhost:4000/api/cars/' + this.state.name_to_url_parse

        this.setState({
            data: {
                ...this.state.data,
                main : status
            }
        }, () => {
            fetch(url, {
                method: 'PUT',
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(this.state.data)
            })
            .then(results => results.json())
            .then(data => {
                window.location.reload();
            })
        })
    }

    componentDidMount() {
        const url = 'http://localhost:4000/api/cars/' + this.state.name_to_url_parse
       
        fetch(url)
        .then(results => {
            return results.json()
        })
        .then(data => {
            this.setState({data: data})
            let info = <Info name={ this.capitalizeFirst(data.model) } data={ data } event={ this.activeTab } click={ this.changeStatus }/>
            this.setState({info: info})
        })
    }

    capitalizeFirst(v) {
        return v.charAt(0).toUpperCase() + v.slice(1)
    }

    render() {
        return(
            <div className="container">
                <Hero title="Información detallada" />
                
                <div className="columns" style={{ margin:'auto' }}>
                   { this.state.info }
                </div>

                <Link to='/lista'><a className="back-link info-padding" href="javascript:void(0)">Regresar...</a></Link>
            </div>
        )
    }
}