# nama_map

## Build Frontend
- `yarn install`
- `yarn build`

### Setup Mysql

- `sudo apt install mysql-server`
- sudo mysql < scripts/createTestDatabase.sql`
- mysql shop_info -u test -p`

### Setup Apache-Server and PHP
https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04

- `sudo apt install php php-mysql libapache2-mod-php php-curl`
- `sudo systemctl restart apache2`

### Development

- ensure db is running
- start php server: `php -S localhost:8001 -t api/`
- start webpack dev server: `yarn dev`
