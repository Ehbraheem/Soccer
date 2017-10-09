import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Players } from '../api/players'

import Form from './Form'

export default class New extends Component {

	submitPlayer(event) {
		event.preventDefault()

		let player = {
			name:              this.refs.name.value,
			team:              this.refs.team.value,
			notes:             this.refs.notes.value,
			ballManipulation:  this.refs.ballManipulation.value,
			kickingAbilities:  this.refs.kickingAbilities.value,
			passingAbilities:  this.refs.passingAbilities.value,
			duelTackling:      this.refs.duelTackling.value,
			fieldCoverage:     this.refs.fieldCoverage.value,
			blockingAbilities: this.refs.blockingAbilities.value,
			gameStrategy:      this.refs.gameStrategy.value,
			playmakingRisks:   this.refs.playmakingRisks.value,
			createdAt:         new Date(),
			owner:             Meteor.userId(),
		}

		// console.log(`Success player submitted`)
		Meteor.call('insertPlayer', player, (error) => {
			if (error) {
				alert("Oops something went wrong: " + error.reason )
			} else {
				alert("Player added: " + player.name)
				browserHistory.push('/')
			}
		})
	}

	callback () {
		browserHistory.push('/')
	}

	render() {
		return (
			<Form method="insertPlayer" callback={this.callback.bind(this)} />
		)
	}

	// render() {
	// 	return (
	// 		<div>
	// 			<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
	// 				<h3>Add a new player</h3>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<input placeholder="Name" ref="name" type="text" className="validate" />
	// 					</div>
	// 					<div className="input-field col s6">
	// 						<input placeholder="Team" ref="team" type="text" className="validate" />
	// 					</div>
	// 				</div>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<h5>Ball Manipulation</h5>
	// 						<Select ref="ballManipulation" />
	// 					</div>

	// 					<div className="input-field col s6">
	// 						<h5>Kicking Abilities</h5>
	// 						<Select ref="kickingAbilities" />
	// 					</div>
	// 				</div>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<h5>Passing Abilities</h5>
	// 						<Select ref="passingAbilities"/>
	// 					</div>

	// 					<div className="input-field col s6">
	// 						<h5>Blocking Abilities</h5>
	// 						<Select ref="blockingAbilities" />
	// 					</div>
	// 				</div>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<h5>Duel Tackling</h5>
	// 						<Select ref="duelTackling" />
	// 					</div>

	// 					<div className="input-field col s6">
	// 						<h5>Playmaking Risks</h5>
	// 						<Select ref="playmakingRisks" />
	// 					</div>
	// 				</div>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<h5>Field Coverage</h5>
	// 						<Select ref="fieldCoverage" />
	// 					</div>

	// 					<div className="input-field col s6">
	// 						<h5>Game Strategy</h5>
	// 						<Select ref="gameStrategy" />
	// 					</div>
	// 				</div>

	// 				<div className="row">
	// 					<div className="input-field col s6">
	// 						<textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" />
	// 					</div>
	// 					<div className="input-field col s6">
	// 						<button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Submit 
	// 							<i className="material-icons right">send</i>
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</form>
	// 		</div>
	// 	)
	// }
}

