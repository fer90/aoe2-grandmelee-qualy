import React from 'react';

export default class SingleBracket extends React.Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            {this.props.playerOnePosition}. {this.props.playerOne.name} ({this.props.playerOne.highest_rating})<br/>{this.props.playerTwoPosition}. {this.props.playerTwo.name} ({this.props.playerTwo.highest_rating})
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
