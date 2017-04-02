import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = props => {
    return (
        <div className="player">
                <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>×</a>
            <div className="player-name" onClick={ () => props.selectPlayer(props.index)}>
                {props.name}
            </div>
            <div className="player-score">
                <Counter
                    index={props.index}
                    score={props.score}
                    updatePlayerScore={props.updatePlayerScore}
                />
            </div>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
};

export default Player;
