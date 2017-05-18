const credentials  = require("../credentials"),
			snoostorm    = require("snoostorm"),
		  snoowrap     = require("snoowrap"),
		  version      = require("./package").version,

credentials.userAgent = credentials.userAgent.replace("$version", version);

const client = new snoowrap(credentials);
const streamingClient = new snoostorm(client);

function lockPosts(db) {
	let toLock = Object.keys(db)
								.filter( k => new Date() < k )
								.map( k => db[k] )
								.reduce((a, b) => [...a, ...b], []);
	console.log(`Locking ${toLock.length} posts...`)
	return toLock.map( id => client.getSubmission(id).lock() )
}



module.exports = {
	client,
	streamingClient,
	lockPosts
}
