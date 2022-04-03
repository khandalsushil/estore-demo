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
Create a env.php file for database connection inside app/etc/ folder
open env.php file and paste below code.
<?php
return [
    'backend' => [
        'frontName' => 'admin'
    ],
    'remote_storage' => [
        'driver' => 'file'
    ],
    'queue' => [
        'consumers_wait_for_messages' => 1
    ],
    'crypt' => [
        'key' => '0636d6a258676fe90be8495d4f823b59'
    ],
    'db' => [
        'table_prefix' => '',
        'connection' => [
            'default' => [
                'host' => 'localhost',
                'dbname' => 'estore',
                'username' => 'root',
                'password' => 'pass123!A',
                'model' => 'mysql4',
                'engine' => 'innodb',
                'initStatements' => 'SET NAMES utf8;',
                'active' => '1',
                'driver_options' => [
                    1014 => false
                ]
            ]
        ]
    ],
    'resource' => [
        'default_setup' => [
            'connection' => 'default'
        ]
    ],
    'x-frame-options' => 'SAMEORIGIN',
    'MAGE_MODE' => 'developer',
    'session' => [
        'save' => 'files'
    ],
    'cache' => [
        'frontend' => [
            'default' => [
                'id_prefix' => 'a06_'
            ],
            'page_cache' => [
                'id_prefix' => 'a06_'
            ]
        ],
        'allow_parallel_generation' => false
    ],
    'lock' => [
        'provider' => 'db',
        'config' => [
            'prefix' => ''
        ]
    ],
    'directories' => [
        'document_root_is_pub' => true
    ],
    'cache_types' => [
        'config' => 1,
        'layout' => 1,
        'block_html' => 1,
        'collections' => 1,
        'reflection' => 1,
        'db_ddl' => 1,
        'compiled_config' => 1,
        'eav' => 1,
        'customer_notification' => 1,
        'config_integration' => 1,
        'config_integration_api' => 1,
        'full_page' => 1,
        'config_webservice' => 1,
        'translate' => 1,
        'vertex' => 1
    ],
    'downloadable_domains' => [
        'localhost'
    ],
    'install' => [
        'date' => 'Tue, 08 Mar 2022 10:53:07 +0000'
    ]
];


Step-4
If you want you can create a virtual host for this project otherwise you can skip this as it is optional.


Step-5
Run composer install

Step-6
Run all magento commands
php bin/magento setup:upgrade && php bin/magento indexer:reindex && php bin/magento setup:di:compile && php bin/magento setup:static-content:deploy -f && php bin/magento cache:clean && php bin/magento cache:flush && chmod -R 0777 generated/ pub/ var/

    composer config repositories.magento composer http://repo.magento.com/


