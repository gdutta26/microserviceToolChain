
module.exports = {
	seterror:function (ERR_CODE, ERR_MSG){

		var error = {
					"error_code":ERR_CODE,
					"error_msg":ERR_MSG
		};

		return error;
	}
};