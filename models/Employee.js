const db = require('../config/db');

const Employee = {
    create: (data, fun) => {
        const query = 'INSERT INTO employees (Name, email, Phone, City, pincode) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.Name, data.email, data.Phone, data.City, data.pincode], fun);
    },
    getAll: (fun) => {
        db.query('SELECT * FROM employees', fun);
    },
    getById: (id, fun) => {
        db.query('SELECT * FROM employees WHERE id = ?', [id], fun);
    },
    update: (id, data, fun) => {
        const query = 'UPDATE employees SET Name = ?, email = ?, Phone = ?, City = ?, pincode = ? WHERE id = ?';
        db.query(query, [data.Name, data.email, data.Phone, data.City, data.pincode, id], fun);
    },
    delete: (id, fun) => {
        db.query('DELETE FROM employees WHERE id = ?', [id], fun);
    }
};

module.exports = Employee;
