var uniqRooms = {};
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleRoomSubmit);
    Parse.readAll((data) => {
      // examine the response from the server request:
      
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname !== undefined && data.results[i].text !== undefined) {
          //
          uniqRooms[data.results[i].roomname] = data.results[i].roomname;
        }
      }
      for (let key in uniqRooms) {
        var uniqRoomRender = {roomname: uniqRooms[key]};
        this.render(uniqRoomRender);
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
    var uniqRoomRender = {roomname: room};
    var html = Rooms.render(uniqRoomRender);
    $('#rooms select').prepend(html);
  },

  handleRoomSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var room = $('#roomname').val();
    Rooms.add();
    RoomsView.renderRoom(room);
    console.log('click!');
  },

};








