
export PASSWORD = "sarkany_password"
echo "Configuring sarkanydb"

dropdb -U sarkany_user sarkanydb
createdb -U sarkany_user sarkanydb

psql -U sarkany_user sarkanydb < ./bin/sql/generation.sql
psql -U sarkany_user sarkanydb < ./bin/sql/dragon.sql
psql -U sarkany_user sarkanydb < ./bin/sql/trait.sql
psql -U sarkany_user sarkanydb < ./bin/sql/dragonTrait.sql


node ./bin/insertTraits.js

echo "sarkanydb configured"