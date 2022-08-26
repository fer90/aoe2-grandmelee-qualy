import ReactTimeAgo from 'react-time-ago'
import Brackets from './Brackets.js'
import { usePlayers } from './usePlayers';

export default function Tournament() {
  const { dataUpdatedAt, isLoading } = usePlayers();

  return (
    <div>
      <ul style={{ textAlign: 'left' }}>
        <li><strong>Untie criteria:</strong> Current ELO (This is an assumption as I couldn't find it in the handbook)</li>
        <li><strong>Format:</strong> SeedPosition. PlayerName (Highest ELO - [Current ELO])</li>
        <li>⚠️ <strong>Note:</strong> The chinese name is <span className="text-red">Vivi</span> 😋</li>
        <li>⏱️ <strong>Last Updated At:</strong> {isLoading ? '-' : <ReactTimeAgo date={dataUpdatedAt} />}</li>
      </ul>
      {isLoading ? <p>Loading...</p> : <Brackets />}
    </div>
  );
}