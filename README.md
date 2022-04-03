# estore-demo
## Synopsis

Demo Store

## Installation
  Step-1
You can clone the project via link https://github.com/khandalsushil/estore-demo.git
Via git command git clone https://github.com/khandalsushil/estore-demo.git

Step-2
Create database with estore db name and import shared db dump file
db_dump file path is: project_root/estore.sql


Step-3
Check in project_root folder you will find file env_sample.php. Please use this file and rename it as env.php and then put in app/etc folder


Step-4
If you want you can create a virtual host for this project otherwise you can skip this as it is optional.


Step-5
Run composer install

Step-6
Run all magento commands
php bin/magento setup:upgrade && php bin/magento indexer:reindex && php bin/magento setup:di:compile && php bin/magento setup:static-content:deploy -f && php bin/magento cache:clean && php bin/magento cache:flush && chmod -R 0777 generated/ pub/ var/



