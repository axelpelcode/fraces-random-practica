import React from 'react';

function FraceDisplay({fraceSelect}){
    return (
        <div>
            <p id="text">"{fraceSelect[0]}"</p>
            <p id="author">- {fraceSelect[1]}</p>
        </div>
    );
}

export default FraceDisplay;