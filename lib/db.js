const fs = require("fs");


function setLock(db, id, lockTime) {
	return db[lockTime] ? db[lockTime].push(id) : db[lockTime] = [id];
}

function saveDB(db) {
	let string = JSON.stringify(db);
	return new Promise((resolve, reject) =>
		fs.writeFile("./locks.json", string,
			err => err ? reject(err) : resolve()
	));
}


module.exports = {
	setLock,
	saveDB
}
