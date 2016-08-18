'use strict';

/**
 * Provide a View for the Conversation.;
 *
 * Wrapper for `<layer-conversation>` widget
 */

var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  el: 'layer-conversation',
  initialize: function(client) {
    /**
     * Create Message List Query
     */
    this.query = client.createQuery({
      model: layer.Query.Message
    });

    /**
     * Setup the `<layer-conversation/>` widget
     */
    this.$el[0].query = this.query;
    this.$el[0].client = client;
  },

  /**
   * Any time the Conversation changes, update the query and converationId.
   */
  setConversation: function(conversation) {
    this.query.update({
      predicate: 'conversation.id = "' + conversation.id + '"'
    });
    this.$el[0].conversationId = conversation.id;
  }
});
