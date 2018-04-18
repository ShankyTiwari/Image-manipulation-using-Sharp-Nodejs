/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/

'use strict';

const routeHandler = require('./../handlers/route-handler');

class Routes{

	constructor(app){
		this.app = app;
	}

	/* creating app Routes starts */
	appRoutes(){
		this.app.get('/', routeHandler.homeHandler);

		this.app.get('/crop', routeHandler.viewCropHandler);

		this.app.post('/do-crop', routeHandler.cropHandler);

		this.app.get('/scale', routeHandler.viewScaleHandler);

		this.app.post('/do-scale', routeHandler.scaleHandler);

		this.app.get('/resize', routeHandler.viewResizeHandler);

		this.app.post('/do-resize', routeHandler.resizeHandler);

		this.app.get('/change-extension', routeHandler.viewChangeExtensionHandler);

		this.app.post('/do-change-extension', routeHandler.changeExtensionHandler);

		this.app.get('*', routeHandler.routeNotFoundHandler);		
	}

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = Routes;