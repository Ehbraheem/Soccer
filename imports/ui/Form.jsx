import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Players } from '../api/players'


export default class Form extends Component {

	callback() {
		this.props.callback()
	}
	

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
		}

		this.props.currentPlayer ? (
					player._id       = this.props.currentPlayer._id,
					player.updatedAt = new Date()
				) : (
							player.createdAt = new Date(),
							player.owner     = Meteor.userId()
						)

		// console.log(`Success player submitted`)
		Meteor.call(this.props.method, player, (error) => {
			if (error) {
				alert("Oops something went wrong: " + error.reason )
			} else {
				alert("Player added: " + player.name)
				this.callback()
			}
		})
	}

	handleRef (key, value) {
		this.refs[key] = value
	}

	render() {
		const currentPlayer = this.props.currentPlayer

		return (
			<div>
				<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
					<h3>Add a new player</h3>

					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer ? currentPlayer.name : null} />
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer ? currentPlayer.team : null} />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Ball Manipulation</h5>
							<Select id="ballManipulation" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.ballManipulation : null} />
						</div>

						<div className="input-field col s6">
							<h5>Kicking Abilities</h5>
							<Select id="kickingAbilities" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.kickingAbilities : null} />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Passing Abilities</h5>
							<Select id="passingAbilities" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.passingAbilities : null} />
						</div>

						<div className="input-field col s6">
							<h5>Blocking Abilities</h5>
							<Select id="blockingAbilities" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.blockingAbilities : null} />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Duel Tackling</h5>
							<Select id="duelTackling" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.duelTackling : null} />
						</div>

						<div className="input-field col s6">
							<h5>Playmaking Risks</h5>
							<Select id="playmakingRisks" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.playmakingRisks : null} />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Field Coverage</h5>
							<Select id="fieldCoverage" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.fieldCoverage : null} />
						</div>

						<div className="input-field col s6">
							<h5>Game Strategy</h5>
							<Select id="gameStrategy" callback={this.handleRef.bind(this)} defaultValue={currentPlayer ? currentPlayer.gameStrategy : null} />
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" />
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Submit 
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}

}

const Select = ({ callback, id, defaultValue}) => <select ref={input => callback(id, input)} className="browser-default" defaultValue={defaultValue}>
						<option value="0" key="0">0 - Hasn't demonstrated skills</option>
						<option value="1" key="1">1 - Needs improvement</option>
						<option value="2" key="2">2 - Skills acquired</option>
						<option value="3" key="3">3 - Great skills/could teach</option>
					</select>

	