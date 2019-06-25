import React from 'react'

const Bar = props => (
    <div style={{ margin:'auto', padding:'0' }}>
        <span>
            <b>{ props.title }: </b>
        </span>
        
        <span className="bar-container">
            <span className={'bar bar-' + props.color } style={{ width:setWeight(props.width) }}></span>
        </span>

        &nbsp;
        { props.width }%
    </div>
)

const setWeight = (w)  => {
    w > 100 ? w = '100%' : w = w + '%'
    return w
}

export default Bar