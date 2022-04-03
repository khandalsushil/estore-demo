# estore-demo
## Synopsis

Demo Store

## Installation
  

    composer config repositories.magento composer http://repo.magento.com/

### Registration
New in Magento 2 is the ability to *register* modules to install anywhere under the Magento root directory; typically, under the `vendor` subdirectory.

All sample modules have a `registration.php` in their root directory with contents similar to the following:

```php
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Magento_CommandExample',
    __DIR__
);
```

The preceding example registers the `Magento_CommandExample` component to install under Magento's `vendor` directory. For more information about component registration, see the [PHP Developer's Guide](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/component-registration.html).

In addition, each module's `composer.json` references `registration.php` in its `autoload` section as follows:

```php
{
  "name": "magento/sample-module-command",
  "description": "Command example",
  "type":"magento2-module",
  "require": {
    "php": "~5.5.0|~5.6.0|~7.0.0"
  },
  "version": "1.0.0",
  "autoload": {
    "files": [ "registration.php" ],
    "psr-4": {
      "Magento\\CommandExample\\": ""
    }
  }
}
```

### PSR-4 section
Each module's `composer.json` has a [`psr-4`](https://getcomposer.org/doc/04-schema.md#psr-4) section *except* for `sample-module-theme`. Themes don't require it because they do not reference

## Contributors

Magento Core team

## License

[Open Source License](LICENSE.txt)


