// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Application from './components/Application';

// CSS
import './app.css';



var PLAYERS = [
    {
        name: "Player 1",
        score: 0,
        id: 1
    },
    {
        name: "Player 2",
        score: 0,
        id: 2
    }
];


ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));
