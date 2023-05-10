import React from 'react';

const Boton = ({nombreBoton, clickEfecto, idBoton}) => (
    <button id={idBoton} onClick={clickEfecto}>{nombreBoton}</button>
);

export default Boton;