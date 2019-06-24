import React from 'react'

const Info = props => (
    <div className="column is-12" style={{ padding:'0'}}>
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-70x70">
                            <img src={ props.data.sprites.back_default } alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content" style={{ alignSelf:'center' }}>
                        <p className="title is-4">{ props.data.name }</p>
                    </div>
                </div>

                <div className="content">
                   
                </div>
            </div>
        </div>
    </div>
)

export default Info