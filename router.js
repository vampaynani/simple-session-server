var express = require('express');
var router = express.Router();

/*
 * # Login
 * Create a session
 */
router.post('/', function(req, res){
	// Here you can do user Authentication
	req.session.userId = Date.now(); // Here you assign the user ID to your session
	req.session.views = 1;
	res.status(200).json(req.session);
});

/*
 * # Logout
 * Delete the current active session
 */
router.delete('/', function(req, res){
	req.session.destroy(); // After you destroy the session, you need to reauthenticate
	res.status(204).send();
});

/*
 * # Protected Content
 * Get current active session here you can look at protected info that match with your userId
 */
router.get('/', function(req, res){
	if(req.session.userId){ // If the session doesn't have an userId(accessToken, etc...) then you don't show the protected token
		req.session.views++;
		res.status(200).json(req.session);
	}else{
		res.status(500).send('No session available');
	}
});

module.exports = router;
