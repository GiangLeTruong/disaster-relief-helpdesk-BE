const connectToSQLServer = require('../config/database')
//CRUD:

async function queryAccounts(query) {
    try {
        const pool = await connectToSQLServer(); // Lấy đối tượng kết nối

        // Thực hiện truy vấn
        const result = await pool.request().query(query);
        return result.recordset; // Trả về kết quả nếu cần
    } catch (err) {
        console.error("Lỗi khi thực hiện truy vấn:", err);
        throw err; // Quăng lỗi để xử lý ở nơi gọi hàm
    }
}




module.exports = {
    queryAccounts,
};