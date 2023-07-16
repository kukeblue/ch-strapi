'use strict';

/**
 * vote-player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vote-player.vote-player');
