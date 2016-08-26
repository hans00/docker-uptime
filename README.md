# Status
[![](https://images.microbadger.com/badges/image/hans00/uptime.svg)](https://microbadger.com/images/hans00/uptime "Status")
# Run
```
docker run -d -p 8082:8082 \
    -e MONGODB_HOST_PORT='172.18.0.2:27017' \
    -e MONGODB_USER='' \
    -e MONGODB_PASSWORD='' \
    -e MONGODB_DATABASE='uptime' \
    --name uptime hans00/uptime
```
# Enviroments ( Only apply first run )
- MongoDB
    - MONGODB_HOST_PORT
    - MONGODB_DATABASE
    - MONGODB_USER
    - MONGODB_PASSWORD
- Email
    - EMAIL_SERVICE
    - EMAIL_USER
    - EMAIL_PASSWORD
    - EMAIL_FROM
    - EMAIL_TO
- Auth
    - AUTH_USERNME
    - AUTH_PASSWORD
- Verbose
    - DEBUG  ( if Y will be true )
