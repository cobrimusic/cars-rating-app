import React from 'react'

const Hero = props => (
    <section className="hero is-light" style={{ margin:'0 0 1.3rem 0'}}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    { props.title }
                </h1>
                <h2 className="subtitle">
                    Consulta la información de tus Pokemones favoritos
                </h2>
            </div>
        </div>
    </section>
)

export default Hero