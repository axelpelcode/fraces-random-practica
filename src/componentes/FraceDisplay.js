import React from 'react';

function FraceDisplay({fraceSelect, clase}){
    return (
        <div>
            <p id="text" className="text-center" >"{fraceSelect[0]}"</p>
            <p id="author" className="text-rigth" >- {fraceSelect[1]}</p>
        </div>
    );
}

export default FraceDisplay;