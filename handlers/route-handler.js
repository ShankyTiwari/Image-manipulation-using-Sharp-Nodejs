'use strict';

const path = require('path');
const CONSTANTS = require('./../config/constants');
var sharp = require('sharp');

class Helper{

	homeHandler(request, response) {
		response.sendFile(path.join(__dirname + '../../public/views/index.html'));
	}

	viewCropHandler(request, response) {
		response.sendFile(path.join(__dirname + '../../public/views/pages/crop.html'));
	}

	cropHandler(request, response) {
		const height = parseInt(request.body.height, 10);
		const width = parseInt(request.body.width, 10);
		if (height === '' || height === null || height === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_HEIGTH
			});
		} else if(width === ''  || width === null || width === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_WIDTH
			});
		} else {
			const imagePath = path.join(__dirname + '../../public/img/Jellyfish.jpg');
			const outputImageName = 'cropped_output_' + height + '_' + width + '.jpg';
			const outputImagePath = __dirname + '../../public/img/output/' + outputImageName;
			
			sharp(imagePath)
				.resize(height, width)
				.crop(sharp.strategy.entropy)
				.toFile(outputImagePath)
				.then( (ImageResult) => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : false,
						filepath: outputImageName,
						message: CONSTANTS.SUCCESSFUL_MESSAGE
					});
				})
				.catch( () => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : true,
						message : CONSTANTS.SERVER_ERROR_MESSAGE
					});
				});
		}		
	}

	viewScaleHandler(request, response) {
		response.sendFile(path.join(__dirname + '../../public/views/pages/scale.html'));
	}

	scaleHandler(request, response) {
		const height = parseInt(request.body.height, 10);
		const width = parseInt(request.body.width, 10);
		if (height === '' || height === null || height === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_HEIGTH
			});
		} else if(width === '' || width === null || width === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_WIDTH
			});
		} else {
			const imagePath = path.join(__dirname + '../../public/img/Jellyfish.jpg');
			const outputImageName = 'scaled_output_' + height + '_' + width + '.jpg';
			const outputImagePath = __dirname + '../../public/img/output/' + outputImageName;

			
			sharp(imagePath)
				.resize(height, width) // Use resize otherwise it applies crop (From the Doc). 
				.max()
				.toFile(outputImagePath)
				.then( (ImageResult) => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : false,
						filepath: outputImageName,
						message: CONSTANTS.SUCCESSFUL_MESSAGE
					});
				})
				.catch( () => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : true,
						message : CONSTANTS.SERVER_ERROR_MESSAGE
					});
				});
		}		
	}

	viewResizeHandler(request, response) {
		response.sendFile(path.join(__dirname + '../../public/views/pages/resize.html'));
	}

	resizeHandler(request, response) {
		const height = parseInt(request.body.height, 10);
		const width = parseInt(request.body.width, 10);
		if (height === '' || height === null || height === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_HEIGTH
			});
		} else if(width === '' || width === null || width === undefined) {
			response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
				error : true,
				filepath : CONSTANTS.INVALID_WIDTH
			});
		} else {
			const imagePath = path.join(__dirname + '../../public/img/Jellyfish.jpg');
			const outputImageName = 'resized_output_' + height + '_' + width + '.jpg';
			const outputImagePath = __dirname + '../../public/img/output/' + outputImageName;

			sharp(imagePath)
				.resize(height, width, {
					kernel: sharp.kernel.nearest
				})
				.toFile(outputImagePath)
				.then( (ImageResult) => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : false,
						filepath: outputImageName,
						message: CONSTANTS.SUCCESSFUL_MESSAGE
					});
				})
				.catch ( () => {
					response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
						error : true,
						message : CONSTANTS.SERVER_ERROR_MESSAGE
					});
				});
		}
	}


	viewChangeExtensionHandler(request, response) {
		response.sendFile(path.join(__dirname + '../../public/views/pages/change-extension.html'));
	}

	changeExtensionHandler(request, response) {
		const imagePath = path.join(__dirname + '../../public/img/Jellyfish.jpg');
		const outputImageName = 'png_output.png';
		const outputImagePath = __dirname + '../../public/img/output/' + outputImageName;

		sharp(imagePath)
			.png()
			.toFile(outputImagePath, function(err, info) {
				response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
					error : false,
					filepath: outputImageName,
					message: CONSTANTS.SUCCESSFUL_MESSAGE
				});
			})
			.catch ( () => {
				response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
					error : true,
					message : CONSTANTS.SERVER_ERROR_MESSAGE
				});
			});
	}

	routeNotFoundHandler(request, response){
		response.sendFile(path.join(__dirname + '../../public/views/index.html'));
	}
}

module.exports = new Helper();
