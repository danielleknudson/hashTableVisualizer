var TupleView = Backbone.View.extend({
  className: 'tuple',
  initialize: function (params) {
    this.tuple = params.model;
    this.index = params.index;
  },
  template: _.template('<% _.each(array, function (item, index, array) { %> \
                          <% if (index === 0) { %> \
                          <span><%= tableIndex %></span> \
                          <% } %> \
                          <span><%= item.attributes.key %></span> \
                          <span><%= item.attributes.value %></span> \
                        <% }); %>'),

  emptyRowTemplate: _.template('<span><%= index %></span>'),

  render: function () {

    if (this.tuple === undefined) {
      this.$el.html(this.emptyRowTemplate({index: this.index}));
    } else {
      console.log(this.index);
      this.$el.html(this.template({array: this.model, tableIndex: this.index }));
    }
    return this.$el;
  },
});