var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var uniqRooms = [];
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname !== undefined && data.results[i].text !== undefined) {
          this.render(data.results[i]);
        }
      }
    });
  },

  render: function(room) {
    // room display
    

    var roomname = Rooms.render(room);
    $('#rooms select').append(roomname);

  },

  renderRoom: function(room) {
    // room creation

    // Parse.create(msg);
    // var html = RoomsView.render(msg);
    // $('#chats').prepend(html);
  }

};
