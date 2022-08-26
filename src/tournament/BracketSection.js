import React from 'react';

import SingleBracket from './SingleBracket';

export default class BracketSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singleBrackets: []
        }
        this.calculateBrackets();
    }

    calculateBrackets() {
        let players = this.props.players;
        let playersAlignments = this.props.playersAlignments;
        var singleBrackets = [];
        players.then(players => {
            for (let i = 0; i < 8; i+=2) {
                singleBrackets.push(
                    <SingleBracket
                        key = {i}
                        playerOnePosition = {playersAlignments[i]}
                        playerTwoPosition = {playersAlignments[i + 1]}
                        playerOne={players[playersAlignments[i] - 1]}
                        playerTwo={players[playersAlignments[i + 1] - 1]}
                    />
                );
            }
            this.setState({singleBrackets});
        });
    }

    render() {
        return (
            <div className='bracket' style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', textAlign: 'left' }}>
                <h2>Bracket #{this.props.number}</h2>
                {this.state.singleBrackets[0]}
                {this.state.singleBrackets[1]}
                {this.state.singleBrackets[2]}
                {this.state.singleBrackets[3]}
            </div>
        );
    }
}
