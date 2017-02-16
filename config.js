exports.DATABASE_URL = 'mongodb://emantes:123456@ds139979.mlab.com:39979/scrummage'

// This allows for the server to listen to a port setup by the production environemtn or 8080
exports.PORT = process.env.PORT || 8080; 
exports.SECRET = 'blahblahblahblah-Trump';