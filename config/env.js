module.exports = {
    ip : process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    port: process.env.OPENSHIFT_NODEJS_PORT || 8000,
    db: getDbConnectionString()
};

function getDbConnectionString(){
    var connection_string = "";
    // if process.env.db exists use it
    if(process.env.db){
        connection_string = process.env.db
    } else {
        // default to a 'localhost' configuration:
        connection_string = '127.0.0.1:27017/PointMessaging';
        // if OPENSHIFT env variables are present, use the available connection info:
        if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
            connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
        }
    }
    return connection_string;
}
