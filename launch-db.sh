docker run --name abn-mongo -d \
-p 27017:27017 \
-e MONGO_INITDB_DATABASE=abn \
-e MONGO_INITDB_ROOT_USERNAME=root \
-e MONGO_INITDB_ROOT_PASSWORD=EAmiGHTAtOINgErP \
mongo