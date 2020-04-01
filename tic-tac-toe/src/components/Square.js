import React from "react";

function Square(propsBoard) {
    return (
        <button className='square' onClick={propsBoard.onClick}>
            {propsBoard.value}
        </button>
    );
}

export default Square;
