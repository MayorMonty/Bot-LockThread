const db      = require("./lib/db"),
			client  = require("./lib/client"),
		  locks   = require("./locks");



const submissionStream = client.streamingClient.SubmissionStream({
  "subreddit": "alcohol",
  "results": 5
})

const sevenDays = 60 * 60 * 24 * 7;

submissionStream.on("submission", post => {
	let lockTime = post.created + sevenDays;
	db.setLock(locks, post.id, lockTime * 1000);
	db.saveDB(locks).then(() => console.log(`Saved ${post.id}`));
});


setInterval(client.lockPosts.bind(this, db), 10000);
