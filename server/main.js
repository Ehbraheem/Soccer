import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players'

Meteor.startup(() => {

	const times = x => f => {
		if (x > 0) {
			f(x)
			times (x - 1) (f)
		} 
	}

	const selectTeam = i => {
		return ['Barcelona', 'Chelsea', 
				'Manchester United', 'Real Madrid',
				'Bayern Munich', 'Arsenal', 
				'Liverpool', 'PSG',
				'Juventus', 'Athletico Madrid'][i%10]
		
	}

	const playerName = i => `Player ${i}`

	const player = i => {
		return {
			name: playerName (i),
			team: selectTeam (i),
			notes: "Fantastic Player"
		}
	}

	const insertPlayer = i => Players.insert(player (i))

	times (10) (insertPlayer)

  Meteor.publish('players', () => Players.find())
});
