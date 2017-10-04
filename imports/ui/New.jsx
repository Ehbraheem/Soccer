import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Players } from '../api/players'

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
			owner:             Meteor.userId()
		}

		console.log(`Success player submitted`)
		Meteor.call('insertPlayer', player, error => {
			if (error) {
				alert(`Oops something went wrong: #{error.reason}`)
			} else {
				alert(`Player added: #{player.name}`)
				browserHistory.push('/')
			}
		}

		
	}


	render() {
		return (
			<div>
				<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
					<h3>Add a new player</h3>

					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Name" ref="name" type="text" className="validate" />
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Ball Manipulation</h5>
							<select ref="ballManipulation" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Kicking Abilities</h5>
							<select ref="kickingAbilities" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Passing Abilities</h5>
							<select ref="passingAbilities" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Blocking Abilities</h5>
							<select ref="blockingAbilities" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Duel Tackling</h5>
							<select ref="duelTackling" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Playmaking Risks</h5>
							<select ref="playmakingRisks" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Field Coverage</h5>
							<select ref="fieldCoverage" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Game Strategy</h5>
							<select ref="gameStrategy" type="text" className="browser-default">
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" />
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light" type="submit" name="action">Submit 
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const SelectOptions = props => [
	"0 - Hasn't demonstrated skills", "1 - Needs improvement", 
	"2 - Skills acquired", "3 - Great skills/could teach"].map(
			(option, index) => (<option value={index}>{option}</option>)
	)