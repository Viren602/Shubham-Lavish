import React from 'react';

const ValidationText = (props) => {
    return (
        props.error ?
            <div style={{color : "#c00000"}}>{props.error}</div>
            : null
    )
}

export default ValidationText;
