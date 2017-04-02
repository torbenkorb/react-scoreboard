import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    players: [
    {
        name: "Player 1",
        score: 0,
        created: '01.03.2017',
        updated: '01.04.2017'
    },
    {
        name: "Player 2",
        score: 0,
        created: '01.03.2017',
        updated: '01.04.2017'
    }],
    selectedPlayerIndex: -1
};

export default function Player(state=initialState, action) {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [...state.players, {
                name:action.name,
                score: 0,
                created: `${day}.${month}.${year}`
            }];
            return {
                ...state,
                players: addPlayerList
            };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ];
            return {
                ...state,
                players: removePlayerList,
                selectedPlayerIndex: -1
            };
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
                if(index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${day}.${month}.${year}`
                    };
                }
                return player;
            });
            return {
                ...state,
                players: updatePlayerList
            };
        }

        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            };

        default:
            return state;
    }
}
