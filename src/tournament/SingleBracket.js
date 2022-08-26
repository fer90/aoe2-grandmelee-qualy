import React from 'react';

function Player({ position, name, rating }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 150px', }}>
      <div>{position}.</div>
      <div><strong>{name}</strong></div>
      <div>(<strong>{rating.highest}</strong> - [{rating.current}])</div>
    </div>
  );
}

export default function SingleBracket({ playerOne, playerOnePosition, playerTwo, playerTwoPosition }) {
    return (
        <div style={{ border: '1px solid #fff', display: 'flex', flexDirection: 'column', padding: '8px' }}>
            <Player position={playerOnePosition} name={playerOne.name} rating={{ current: playerOne.rating, highest: playerOne.highest_rating }} />
            <Player position={playerTwoPosition} name={playerTwo.name} rating={{ current: playerTwo.rating, highest: playerTwo.highest_rating }} />
        </div>
    );
}
