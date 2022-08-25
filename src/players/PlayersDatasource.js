export default class PlayersDatasource {

    async getEmpireWarsPlayersData() {
        let response = await fetch('https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=13&start=1&count=100');
        
        if (response.status === 200) {
            let players = await response.json();
            players = players.leaderboard;
            return players;
        } else {
            console.log("Error retrieving data from aoe2.net with status: " + response.status);
        }
    }
}
