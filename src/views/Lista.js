import React, { Component } from 'react'

//Components 
import Card from '../components/Card'
import Hero from '../components/Hero'

export default class Lista extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: []
        }

        this.capitalizeFirst = this.capitalizeFirst.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/cars')
        .then(results => {
            return results.json()
        }).then(data => {
            let cards = data.rows.map((info) => {
                return(
                    <Card 
                        name={ this.capitalizeFirst(info.model) }
                        param={ info.id }
                        url={ info.image }
                        isMaint={ info.main }
                    />
                )
            })

            this.setState({cards: cards})
        })
    }

    capitalizeFirst(v) {
        return v.charAt(0).toUpperCase() + v.slice(1)
    }

    render() {
        return(
            <div className="container">
                <Hero title="Cars API"/>
                <div className="columns is-multiline" style={{ margin:'auto' }}>
                    { this.state.cards }
                </div>
            </div>
        )
    }
}