import React from 'react'

import PlayersDatasource from '../players/PlayersDatasource';
import Brackets from './Brackets.js'

export default class Tournament extends React.Component {

    static PLAYERS_AMOUNT = 32;

    constructor(props) {
        super(props);
        this.playersDatasource = new PlayersDatasource();
    }

    render() {
        let playersData = this._getPlayersDataOrderedByHighestElo();
        this._calculateFirstSeeds(playersData, Tournament.PLAYERS_AMOUNT);
        return (
            <div>
                <Brackets players={playersData} />
            </div>
        );
    }

    async _getPlayersDataOrderedByHighestElo() {
        let playersData = await this.playersDatasource.getEmpireWarsPlayersData();
        playersData.sort((a, b) => (b.highest_rating === a.highest_rating) ? b.rating - a.rating : b.highest_rating - a.highest_rating);
        return playersData;
    }

    _calculateFirstSeeds(playersData, amountOfPlayers) {
        this._eraseAlreadyQualifiedPlayers(playersData);
        this._eraseSmurfPlayers(playersData);
        this._trimPlayersData(playersData, amountOfPlayers);
    }

    _eraseAlreadyQualifiedPlayers(playersData) {
        this._removePlayersBasedOnArray(playersData, ALREADY_QUALIFIED_PLAYERS_IDS);
    }

    _eraseSmurfPlayers(playersData) {
        this._removePlayersBasedOnArray(playersData, SMURF_ACCOUNTS);
    }

    _removePlayersBasedOnArray(playersData, filterArray) {
        playersData.then(players => {
            players.reduceRight((_, currentPlayer, index) => {
                if (filterArray.includes(currentPlayer.profile_id)) {
                    players.splice(index, 1);
                }
                return players;
            });
        });
    }

    _trimPlayersData(playersData, amountOfPlayers) {
        playersData.then(players => {
            players.splice(amountOfPlayers);
            return players;
        });
    }
}

// Order: MBL, Vinchester, Nicov, Capoch, Hera, Viper, Daniel, MrYo, Villese, Daut
const ALREADY_QUALIFIED_PLAYERS_IDS = [
    251265, 271202, 208393, 409748, 199325, 196240, 265517, 197964, 208611, 198035
];

// Order: d., kalashnicov, Margou, Nagash, PadanFain, PushTheTempo, BoThienHa, IdeasNecias
const SMURF_ACCOUNTS = [
    1486575, 9473909, 2368761, 2667231, 9298780, 4747413, 5551503, 738273
];