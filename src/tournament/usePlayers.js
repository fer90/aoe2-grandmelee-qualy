import { useQuery } from '@tanstack/react-query';

// Order: MBL, Vinchester, Nicov, Capoch, Hera, Viper, Daniel, MrYo, Villese, Daut
const ALREADY_QUALIFIED_PLAYERS_IDS = [
  251265, 271202, 208393, 409748, 199325, 196240, 265517, 197964, 208611, 198035
];

// Order: d., kalashnicov, Margou, Nagash, PadanFain, PushTheTempo, BoThienHa, IdeasNecias
const SMURF_ACCOUNTS = [
  1486575, 9473909, 2368761, 2667231, 9298780, 4747413, 5551503, 738273
];

const PLAYERS_AMOUNT = 32;
const oneMinuteInMs = 60000;

function removePlayersBasedOnArray(players, filterArray) {
  return players.reduceRight((_, currentPlayer, index) => {
    if (filterArray.includes(currentPlayer.profile_id)) {
      players.splice(index, 1);
    }

    return players;
  });
}

function eraseAlreadyQualifiedPlayers(players) {
  return removePlayersBasedOnArray(players, ALREADY_QUALIFIED_PLAYERS_IDS);
}

function eraseSmurfPlayers(players) {
  return removePlayersBasedOnArray(players, SMURF_ACCOUNTS);
}

function trimPlayersData(players, amountOfPlayers) {
  players.splice(amountOfPlayers);

  return players;
}

function sortByRating(players) {
  return players.sort((a, b) => (b.highest_rating === a.highest_rating) ? b.rating - a.rating : b.highest_rating - a.highest_rating);
}

function calculateFirstSeeds(players, amountOfPlayers) {
  return trimPlayersData(eraseSmurfPlayers(eraseAlreadyQualifiedPlayers(sortByRating(players))), amountOfPlayers);
}

async function getEmpireWarsPlayersData() {
  const response = await fetch('https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=13&start=1&count=100');
  if (response.status !== 200) {
    throw new Error('Error while fetching players data');
  }

  const { leaderboard } = await response.json();

  return leaderboard;
}

export function usePlayers({ amount, refetchInterval = oneMinuteInMs } = { amount: PLAYERS_AMOUNT }) {
  return useQuery(['players', { amount }], async function getPlayers() {
    const players = await getEmpireWarsPlayersData();

    return calculateFirstSeeds(players, amount);
  }, {
    refetchInterval,
  })
}