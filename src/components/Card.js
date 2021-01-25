import React from 'react'
import Tag from '../components/Tag'

const Card = props => (
    <div className="column is-4">
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="">
                        <p className="title is-4">{ props.name }</p>
                    </div>
                </div>

                <div className="content">
                    Ver más acerca de <a href={'cars/' + props.param}>@{ props.name }</a>.
                    <br />
                    {(
                        props.isMaint ? <Tag move="En mantenimiento" /> : <div></div>
                    )}
                </div>
            </div>
        </div>
    </div>
)

export default Card;

