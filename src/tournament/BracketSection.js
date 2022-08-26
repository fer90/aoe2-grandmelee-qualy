import SingleBracket from './SingleBracket';

export default function BracketSection({ number, players, playersAlignments }) {
  const singleBrackets = [];
  for (let i = 0; i < 8; i += 2) {
    singleBrackets.push(
      <SingleBracket
        key={i}
        playerOnePosition={playersAlignments[i]}
        playerTwoPosition={playersAlignments[i + 1]}
        playerOne={players[playersAlignments[i] - 1]}
        playerTwo={players[playersAlignments[i + 1] - 1]}
      />
    );
  }

  return (
    <div className='bracket' style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', textAlign: 'left' }}>
      <h2>Bracket #{number}</h2>
      {singleBrackets}
    </div>
  );
}
