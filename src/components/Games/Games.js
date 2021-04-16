import React from 'react'
import Snake from 'react-simple-snake';
import Particles from '../Particles/Particles';

function Games() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Here is a snake game for you!</h2>
            <Snake />
            <Particles />
        </div>
    )
}

export default Games;
