var HashTableView = Backbone.View.extend({
  el: '#hashTable',
  initialize: function () {
    this.model = new HashModel();
    this.listenTo(this.model, 'addedTuple', this.render);
  },

  events: {
    'click #add':'addToHashTable'
  },

  addToHashTable: function (e) {
    e.preventDefault();

    var input = {};

    $('#hashingForm').children('input').each(function (index, el) {
      if ($(el).val() !== '') {
        input[$(el).attr('id')] = $(el).val();
      }
    });
    var tuple = new Tuple(input);
    this.model.insert(tuple);
  },

  renderTuple: function (tuple, index) {
    var tupleView = new TupleView({model: tuple, index: index});
    $('#tuples-container').append(tupleView.render());
  }, 

  render: function () {
    $('#tuples-container').empty();
    var tuples = this.model.get('storage');
    _.each(tuples, function (tuple, index, collection) {
      this.renderTuple(tuple, index);
    }, this);
  },

});