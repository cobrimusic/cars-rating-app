import React from 'react'

export default class Tag extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            move: this.props.move
        }

        this.capitalizeFirst = this.capitalizeFirst.bind(this)
        this.replaceChar = this.replaceChar.bind(this)
    }

    componentDidMount() {
        const move = this.capitalizeFirst(this.replaceChar(this.state.move))
        this.setState({move: move})
    }

    capitalizeFirst(v) {
        return v.charAt(0).toUpperCase() + v.slice(1)
    }

    replaceChar(v) {
        return v.replace(/-/g, ' ')
    }

    render() {
        return(
           <span className="tag is-link is-normal">{ this.state.move }</span> 
        )
    }
}



