const { getAccountService,
} = require('../services/AccountManagerService');
const { ApiError,
    HttpStatus } = require('../config/ApiError');
const getAccounts = async (req, res) => {
    try {
        const { id } = req.user
        const response = await getAccountService(id)
        return res.status(200).json(response)
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            code: ApiError.API_ERROR_000_INTERNAL_SERVER_ERROR.status,
            message: ApiError.API_ERROR_000_INTERNAL_SERVER_ERROR.message
        });
    }
};

module.exports = {
    getAccounts,
};
