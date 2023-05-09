import React from 'react';

function FraceDisplay({fraceSelect}){
    return (
        <div>
            <p>"{fraceSelect[0]}"</p>
            <p>- {fraceSelect[1]}</p>
        </div>
    );
}

export default FraceDisplay;