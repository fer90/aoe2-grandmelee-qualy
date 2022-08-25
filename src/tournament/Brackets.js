import React from 'react';

import BracketSection from './BracketSection.js';

export default class Brackets extends React.Component {

    static bracketsAlignments = [
        [1, 32, 16, 17, 8, 25, 9, 24],
        [4, 29, 13, 20, 5, 28, 12, 21],
        [2, 31, 15, 18, 7, 26, 10, 23],
        [3, 30, 14, 19, 6, 27, 11, 22]
    ];

    render () {
        let bracketSections = []; // Should be 4 sections, as there are 4 qualis
        for (let i = 0; i < 4; i++) {
            bracketSections.push(
                <BracketSection
                    key={i}
                    playersAlignments={Brackets.bracketsAlignments[i]}
                    players = {this.props.players}
                />
            )
        }
        return (
            <table className="Brackets">
                <tr>
                    <td>{bracketSections[0]}</td>
                    <td>{bracketSections[1]}</td>
                </tr>
                <hr/>
                <tr>
                    <td>{bracketSections[2]}</td>
                    <td>{bracketSections[3]}</td>
                </tr>
            </table>
        );
    }
}


/*
1 8 9  16 17 24 25 32
2 7 10 15 18 23 26 31
3 6 11 14 19 22 27 30
4 5 12 13 20 21 28 29

1
32

16
17

8
25

9
24

4
29

13
20

5
28

12
21

2
31

15
18

7
26

10
23

3
30

14
19

6
27

11
22
*/