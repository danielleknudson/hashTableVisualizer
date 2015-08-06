var HashModel = Backbone.Model.extend({
  defaults: {
    storage: [],
    limit: 10,
    size: 0,
  },
  initalize: function () {

    this.on('change', function () {
      console.log('in HashModel, model changed!!!!');
    });

  },
  insert: function (tuple) {
    var size = this.get('size');
    size++;
    this.set('size', size);
    var hashedKey = this.createHash(tuple.attributes.key, this.get('size'));
    var storage = this.get('storage');

    if (storage[hashedKey]){
      storage[hashedKey].push(tuple);
    } else {
      storage[hashedKey] = [];
      storage[hashedKey].push(tuple);
    }

    this.set('storage', storage);
    this.trigger('addedTuple', this);
  },
  remove: function () {},
  createHash: function (str, limit) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % this.get('limit');
  },
});