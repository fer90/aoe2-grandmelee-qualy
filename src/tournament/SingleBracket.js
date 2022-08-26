import React from 'react';

export default class SingleBracket extends React.Component {

    render() {
        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <td>
                            {this.props.playerOnePosition}. <b>{this.props.playerOne.name}</b> (<b>{this.props.playerOne.highest_rating}</b> - [{this.props.playerOne.rating}])<br/>{this.props.playerTwoPosition}. <b>{this.props.playerTwo.name}</b> (<b>{this.props.playerTwo.highest_rating}</b> - [{this.props.playerTwo.rating}])
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
