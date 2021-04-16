import React from 'react'
import Snake from 'react-simple-snake';
import Particles from '../Particles/Particles';

function Games() {
    return (
        <div>
            <Particles />
            <h2 style={{ textAlign: 'center' }}>Here is a snake game for you!</h2>
            <Snake />
        </div>
    )
}

export default Games;
