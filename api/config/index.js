const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/api',
        SALT: 9,
        SECRET: 'secretornot',
        COOKIE_NAME: 'USER_SESSION'
    },
    production: {
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV.trim()]