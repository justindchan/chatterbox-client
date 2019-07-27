var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = 0; i < data.results.length; i++) {
        this.renderRoom(data.results[i])
      }
      // console.log(data.results);
    });
  },

  render: function(msg) {
    // var room = RoomsView.render(msg);
    // $('#chats').append(room);

  },

  renderRoom: function(msg) {
    // Parse.create(msg);
    // var html = RoomsView.render(msg);
    // $('#chats').prepend(html);
  }

};
