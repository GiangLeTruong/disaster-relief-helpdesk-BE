const HttpStatus = {
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
};

const ApiError = Object.freeze({
    API_ERROR_000_RESQUEST_ERROR: {
        status: HttpStatus.BAD_REQUEST,
        message: 'Lỗi khi gửi thông tin đến máy chủ',
    },
    API_ERROR_000_INTERNAL_SERVER_ERROR: {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Lỗi khi xử lý dữ liệu ở máy chủ',
    },
    API_ERROR_001_REQUEST_TOKEN: {
        status: HttpStatus.BAD_REQUEST,
        message: 'Không tìm thấy access token.',
    },
    API_ERROR_002_REQUEST_TOKEN: {
        status: HttpStatus.BAD_REQUEST,
        message: 'Token không hợp lệ.',
    },
});
module.exports = { ApiError, HttpStatus };
