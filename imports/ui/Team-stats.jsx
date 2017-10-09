import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import { Radar } from 'react-chartjs-2';

export default class TeamStats extends Component {

	render() {

		const players = this.props.players
		const numPlayer = players.length

		const skillCalculator = skill => Math.round((players.reduce((accum, player) =>  accum + player[skill],
			 0) / (3 * numPlayer)) * 100)

		const ballManipulation = skillCalculator ('ballManipulation')
		const kickingAbilities = skillCalculator ('kickingAbilities')
		const gameStrategy = skillCalculator ('gameStrategy')
		const fieldCoverage = skillCalculator ('fieldCoverage')
		const blockingAbilities = skillCalculator ('blockingAbilities')
		const playmakingRisks = skillCalculator ('playmakingRisks')
		const duelTackling = skillCalculator ('duelTackling')
		const passingAbilities = skillCalculator ('passingAbilities')

		const defense = Math.round((duelTackling + fieldCoverage + blockingAbilities +
		 gameStrategy + playmakingRisks)/5)
		const offense = Math.round((kickingAbilities + passingAbilities + ballManipulation
		 + gameStrategy + fieldCoverage + playmakingRisks)/6)
		const total   = Math.round((kickingAbilities + passingAbilities + ballManipulation 
			+ gameStrategy + fieldCoverage + playmakingRisks + duelTackling + blockingAbilities)/8)

		const data = {
		  labels: ['Ball Manipulation', 'Kicking Abilities',
		   'Passing Abilities', 'Blocking Abilities', 'Duel Tackling',
		    'Playmaking Risks', 'Field Coverage', 'Game Strategy'],
		  datasets: [
		    {
		      label: 'In % of max possible',
		      backgroundColor: 'rgba(143,202,249,0.2)',
		      borderColor: 'rgba(12,71,161,1)',
		      pointBackgroundColor: 'rgba(12,71,161,1)',
		      pointBorderColor: '#fff',
		      pointHoverBackgroundColor: '#fff',
		      pointHoverBorderColor: 'rgba(12,71,161,1)',
		      data: [ballManipulation, kickingAbilities, gameStrategy, passingAbilities,
		      fieldCoverage, blockingAbilities, playmakingRisks, duelTackling]
		    },
		  ]
		}

		return (
			<div>
				<h2>Team Stats</h2>
				<div className="row">
					<div className="col s12 m7">
						<Radar data={data}
							width={500}
							height={500}
							options={{
								maintainAspectRatio: false
							}} 
						/>
					</div>
					<div className="col s12 m5">
						<h4>Scores in % of max possible</h4>
						<Divider />
						<h4>Teams' Offense: {offense}%</h4>
						<h4>Teams' Defense: {defense}%</h4>
						<h4>Teams' Total: {total}%</h4>
						<Divider />
						<h4>Number of players: {numPlayer}</h4>
					</div>
				</div>
			</div>
		)
	}
}