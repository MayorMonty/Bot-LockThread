Lock Thread
===========

A simple bot to lock threads after 7 days. Made for [/u/CWinthrop/](https://reddit.com/u/CWinthrop/)

## Installation
1. First, make sure that [Node.js](https://nodejs.org) is installed. You can do this by checking the version, using `node -v`. Your version should either be `v6.x.x` or `v7.x.x`
2. Clone this repository from github
       git clone https://github.com/MayorMonty/Bot-LockThread
       cd Bot-LockThread
3. Install everything with `npm install`
4. Configure `credentials.json`:

	4.1. To get the client id and client secret, login as JeremiahPThomas and navigate to https://reddit.com/prefs/apps. There you will see an application called LockThread

	4.2. Enter all of this information, in this format, to `credentials.json`:
	   {                              
			"userAgent": "nodejs:lockthread:$version (by /u/MayorMonty)",
			"clientId": "<client ID>",                            
			"clientSecret": "<client Secret>",                
			"username": "JeremiahPThomas",            
			"password": "<password>"                         
       }                                                                     


5. Set the script up as an infinitely running background process. You can use [PM2](https://pm2.keymetrics.io), [`nodemon`](https://www.npmjs.com/package/nodemon), or another way to achieve this
6. Done!
