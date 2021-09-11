
module.exports = class ResponseController{
    /**
	 * This function will be called on sending success. It returns status code 200
	 * @param {*} req 
	 * @param {*} res 
	 * @param {*} _data 
	 * @param {*} _msg 
	 */
	successResponse(req, res, _data = null, _msg = null) {
		const response = {
			code: 200,
			status: 'Ok',
			data: (_data) ? _data : []
		}
		if (_msg !== null) {
			response.message = _msg;
		}
		return res.status(response.code).json(response);
	}


    /**
	 * This function will be called on delete api. It returns status code 200 after data is deleted
	 * @param {*} req 
	 * @param {*} res 
	 * @param {*} _data 
	 * @param {*} _msg 
	 */
	deleteResponse(req, res, _data = null, _msg = null) {
		const response = {
			code: 200,
			status: 'Ok',
			data: (_data) ? _data : []
		}
		if (_msg !== null) {
			response.message = _msg;
		}
		return res.status(response.code).json(response);
	}

	/**
	 * This function called on unauthorized error. It returns the status code 401.
	 * @param {*} req 
	 * @param {*} res 
	 */
	unauthorizedResponse(req, res) {
		const response = {
			code: 401,
			status: 'error',
			data: [],
			message: 'Unauthorized'
		}
		return res.status(response.code).json(response);
	}


	/**
	 * This function called on unauthorized error. It returns the status code 422.
	 * @param {*} req 
	 * @param {*} res 
	 */
	invalidInputParameters(req, res, _data) {
		const response = {
			code: 422,
			status: 'error',
			data: [],
			message: _data
		}
		return res.status(response.code).json(response);
	}


	/**
	 * This function will be called for Resource not found error response. It returns status code as 404
	 * @param {*} req 
	 * @param {*} res 
	 */
	notFoundResponse(req, res) {
		const response = {
			code: 404,
			status: 'error',
			data: [],
			message: 'Resource Not Found'
		}
		return res.status(response.code).json(response);
	}


	/**
	 * This function will be called in case of any error., It returns status code 500
	 * @param {*} req 
	 * @param {*} res 
	 * @param {*} _data 
	 */
	errorResponse(req, res, _data) {
		const response = {
			code: 500,
			status: 'error',
			data: [],
			message: _data
		}
		return res.status(response.code).json(response);
	}
}