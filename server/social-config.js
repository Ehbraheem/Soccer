Meteor.startup(() => {
	ServiceConfiguration.configurations.remove({
	    service: 'facebook'
	})
 
	ServiceConfiguration.configurations.insert({
	    service: 'facebook',
	    appId: process.env.SOCCER_APP_ID,
	    secret: process.env.SOCCER_APP_SECRET
	})

});