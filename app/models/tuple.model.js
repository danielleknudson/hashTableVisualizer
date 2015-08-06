var Tuple = Backbone.Model.extend({
  initialize: function (input) {
    this.set('key', input.key);
    this.set('value', input.value);
  },
});
