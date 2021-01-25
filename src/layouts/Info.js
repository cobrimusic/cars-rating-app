import React from 'react'
import Tag from '../components/Tag'

const Info = props => (
    <div className="column is-12 info-padding" style={{ padding:'0'}}>
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left" style={{width:'640px', height:'480px'}}>
                        <figure className="image is-70x70">
                            <img class="w-100" src={ props.data.image } alt={ props.data.model } />
                        </figure>
                    </div>
                    <div className="media-content" style={{ alignSelf:'center' }}>
                        <p className="title is-4">{ props.data.make }</p>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <span>
                                    <b>Model: </b>
                                    <div className="columns is-multiline is-mobile">
                                        <div key={ props.data.model } className="column is-3-desktop is-6-mobile">
                                            <div className="tags">
                                                <Tag move={ props.data.model }/>
                                            </div>
                                        </div>
                                    </div>
                                    { props.data.main ? 
                                        <div>
                                            <div className="columns is-multiline is-mobile">
                                                <div key={ props.data.main } className="column is-5-desktop is-6-mobile">
                                                    <div className="tags">
                                                        <Tag move="En mantenimiento" />
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="columns is-multiline is-mobile">
                                                <div class="column">
                                                  <button onClick={ e => props.click(0) } class="button">Marcar como entregago</button>  
                                                </div>
                                            </div> 
                                        </div>
                                        : 
                                        <div className="columns is-multiline is-mobile">
                                            <div class="column">
                                                <button onClick={ e => props.click(1) } class="button">Marcar como "En mantenimiento"</button>  
                                            </div>
                                        </div> 
                                    }
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