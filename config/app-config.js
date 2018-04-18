const expressConfig = require('./express-config'); 
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

class AppConfig{
	
	constructor(app){
		process.on('unhandledRejection', (reason, p) => {
		  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
		  // application specific logging, throwing an error, or other logic here
		});
		dotenv.config();
		this.app = app;
	}

	includeConfig() {
		this.app.use(
            bodyParser.json()
        ); 
		new expressConfig(this.app);
	}

}
module.exports = AppConfig;