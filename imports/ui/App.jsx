import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

// Database - collection
import { Players } from '../api/players'


import TeamList from './Team-list'
import TeamStats from './Team-stats'
import Player from './Player'
import AccountsWrapper from './AccountsWrapper'

export class App extends Component {

	constructor(props) {
		super(props)

		this.state = { players: [] }
	}


	// componentWillMount() {
	// 	this.setState({ players: [
	// 		  {
	// 		  	_id: 0,
	// 		  	name: 'Bolatan Adigun Ibrahim',
	// 		  	ballManipulation: 3,
	// 		  	kickingAbilities: 3,
	// 		  	passingAbilities: 3,
	// 		  	duelTackling: 2,
	// 		  	fieldCoverage: 2,
	// 		  	blockingAbilities: 2,
	// 		  	gameStrategy: 2,
	// 		  	playmakingRisks: 1
	// 		  },
	// 		  {
	// 		  	_id: 1,
	// 		  	name: 'Akinyemi Saheed',
	// 		  	ballManipulation: 3,
	// 		  	kickingAbilities: 3,
	// 		  	passingAbilities: 3,
	// 		  	duelTackling: 2,
	// 		  	fieldCoverage: 2,
	// 		  	blockingAbilities: 2,
	// 		  	gameStrategy: 2,
	// 		  	playmakingRisks: 2
	// 		  },
	// 		  {
	// 		  	_id: 2,
	// 		  	name: 'Akinyemi Hasan',
	// 		  	ballManipulation: 1,
	// 		  	kickingAbilities: 1,
	// 		  	passingAbilities: 1,
	// 		  	duelTackling: 2,
	// 		  	fieldCoverage: 3,
	// 		  	blockingAbilities: 3,
	// 		  	gameStrategy: 1,
	// 		  	playmakingRisks: 1
	// 		  },
	// 		  {
	// 		  	_id: 3,
	// 		  	name: 'Akinyemi Muritadho',
	// 		  	ballManipulation: 1,
	// 		  	kickingAbilities: 1,
	// 		  	passingAbilities: 1,
	// 		  	duelTackling: 3,
	// 		  	fieldCoverage: 3,
	// 		  	blockingAbilities: 2,
	// 		  	gameStrategy: 2,
	// 		  	playmakingRisks: 1
	// 		  }
	// 		]}
	// 	)
	// }

	renderPlayers() {
		return this.props.players.map(player => <TeamList key={player._id} player={player} />)
	}

	render() {
		return (
			<MuiThemeProvider>

				<div className="container">
					<AppBar 
						title="Soccer Application"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						showMenuIconButton={false}> 

						<AccountsWrapper />
						
					</AppBar>
					<div className="row">
						<div className="col s12 m7"><Player /></div>
						<div className="col s12 m5">
						<h2>Team List </h2><Link to="/new" className="waves-effect waves-light btn">Add player </Link>
							<Divider />
							<List>
								{this.renderPlayers()}
							</List>
							<Divider />
						</div>
						<div className="col s12 m5"><TeamStats /></div>
					</div>
				</div>
				
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {
	players: PropTypes.array.isRequired,
}

export default createContainer(() => {
	Meteor.subscribe('players')
	const user = Meteor.usersId()

	return {
		players: Players.find({ owner: user }, {name: 1}).fetch()
	}
}, App)