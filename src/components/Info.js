import React from 'react'
import Bar from './Bar'
import Tag from './Tag'

const Info = props => (
    <div className="column is-12" style={{ padding:'0'}}>
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-70x70">
                            <img src={ props.data.sprites.back_default } alt={ props.data.name } />
                        </figure>
                    </div>
                    <div className="media-content" style={{ alignSelf:'center' }}>
                        <p className="title is-4">{ props.name }</p>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <Bar 
                                    title="Weight"
                                    color="green"
                                    width={ props.data.weight }
                                />
                                
                            </div>
                            
                            <div className="column is-6">
                                <Bar 
                                    title="Experience"
                                    color="blue"
                                    width={ props.data.base_experience }
                                />
                            </div>

                            <div className="column is-6">
                                <Bar 
                                    title="Height"
                                    color="aqua"
                                    width={ props.data.height }
                                />
                            </div>

                            <div className="column is-6">
                                <span>
                                    <b>Some Moves: </b>
                                    <div className="columns is-multiline is-mobile">
                                        { props.data.moves.slice(0, 4).map((data) => (
                                            <div key={ data.move.name } className="column is-3 is-4-mobile">
                                                <Tag move={ data.move.name }/>
                                            </div>
                                        ))}
                                    </div>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Info