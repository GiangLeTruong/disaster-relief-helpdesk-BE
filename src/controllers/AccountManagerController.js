const { queryAccounts } = require('../services/AccountManagerService');

const getAccounts = async (req, res) => {
    try {
        const data = await queryAccounts('SELECT * FROM Users'); // Sử dụng queryDatabase
        return res.json(data); // Trả về kết quả dưới dạng JSON
    } catch (err) {
        res.status(500).json({ message: "Lỗi khi truy vấn cơ sở dữ liệu", error: err.message });
    }
};

module.exports = {
    getAccounts,
};
