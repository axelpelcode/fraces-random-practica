import React from 'react';

const Boton = ({nombreBoton, clickEfecto}) => (
    <button onClick={clickEfecto} >{nombreBoton}</button>
);

export default Boton;