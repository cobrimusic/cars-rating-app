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
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(results => {
            return results.json()
        }).then(data => {
            let cards = data.results.map((info) => {
                return(
                    <Card 
                        name={ this.capitalizeFirst(info.name) }
                        param={ info.name }
                        url={ info.url }
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
                <Hero title="Poke API"/>
                <div className="columns is-multiline" style={{ margin:'auto' }}>
                    { this.state.cards }
                </div>
            </div>
        )
    }
}