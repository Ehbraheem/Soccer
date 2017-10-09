import React, { Component } from 'react'

export default class Edit extends Component {

	showTeamStats() {
		this.props.showTeamStats()
	}

	editPlayer(event) {
		event.preventDefault()

		let player = {
			_id:               this.props.currentPlayer._id,
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
			updatedAt:         new Date(),
		}

		// console.log(`Success player submitted`)
		Meteor.call('updatePlayer', player, (error) => {
			if (error) {
				alert(`Oops something went wrong: ${error.reason}` )
			} else {
				alert(`Player Updated: ${player.name}`)
				this.showTeamStats()
			}
		})
	}

	render() {

		const currentPlayer = this.props.currentPlayer

		return (
			<div>
				<form className="col s12" onSubmit={this.editPlayer.bind(this)}>
					<h3>Add a new player</h3>

					<div className="row">
						<div className="input-field col s6">
							<input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name} />
						</div>
						<div className="input-field col s6">
							<input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team}/>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Ball Manipulation</h5>
							<select ref="ballManipulation" type="text" className="browser-default" defaultValue={currentPlayer.ballManipulation}>
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Kicking Abilities</h5>
							<select ref="kickingAbilities" type="text" className="browser-default" defaultValue={currentPlayer.kickingAbilities}>
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Passing Abilities</h5>
							<select ref="passingAbilities" type="text" className="browser-default" defaultValue={currentPlayer.passingAbilities}>
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Blocking Abilities</h5>
							<select ref="blockingAbilities" type="text" className="browser-default" defaultValue={currentPlayer.blockingAbilities}>
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Duel Tackling</h5>
							<select ref="duelTackling" type="text" className="browser-default" defaultValue={currentPlayer.duelTackling}>
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Playmaking Risks</h5>
							<select ref="playmakingRisks" type="text" className="browser-default" defaultValue={currentPlayer.playmakingRisks}>
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<h5>Field Coverage</h5>
							<select ref="fieldCoverage" type="text" className="browser-default" defaultValue={currentPlayer.fieldCoverage}>
								<SelectOptions />
							</select>
						</div>

						<div className="input-field col s6">
							<h5>Game Strategy</h5>
							<select ref="gameStrategy" type="text" className="browser-default" defaultValue={currentPlayer.gameStrategy}>
								<SelectOptions />
							</select>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s6">
							<textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" defaultValue={currentPlayer.notes} />
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

const SelectOptions = props => [
	"0 - Hasn't demonstrated skills", "1 - Needs improvement", 
	"2 - Skills acquired", "3 - Great skills/could teach"].map(
			(option, index) => (<option value={index}>{option}</option>)
	)