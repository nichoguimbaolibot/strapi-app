'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    find(params, populate) {
        console.log('Service called..');

        return strapi.query('product').find(params, populate);
    }
};
