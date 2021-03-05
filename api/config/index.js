const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/api'
    },
    production: {
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV.trim()]