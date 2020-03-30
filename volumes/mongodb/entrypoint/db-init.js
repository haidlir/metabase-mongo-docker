print("Begin Init Script.")
var db_name = 'meta_db';
var db_user = 'metauser';
var db_pass = 'metapass';
db = db.getSiblingDB(db_name);
db.createUser({
    user: db_user,
    pwd: db_pass,
    roles: [{ role: 'readWrite', db:db_name}]
})
print("DONE.")
