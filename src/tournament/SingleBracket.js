import React from 'react';

export default class SingleBracket extends React.Component {

    render() {
        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <td>
                            {this.props.playerOnePosition}. {this.props.playerOne.name} ({this.props.playerOne.highest_rating} - [{this.props.playerOne.rating}])<br/>{this.props.playerTwoPosition}. {this.props.playerTwo.name} ({this.props.playerTwo.highest_rating} - [{this.props.playerTwo.rating}])
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
