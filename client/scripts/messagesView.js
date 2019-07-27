var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data)
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname === true) {
          this.render(data.results[i])
        }
      }
      console.log(data);
    });
  },


  render: function(msg) {
    var message = MessageView.render(msg);
    $('#chats').append(message);
  },

  renderMessage: function(msg) {
    // Parse.create(msg);
    var html = MessageView.render(msg);
    $('#chats').prepend(html);
  }
};


  // initialize: function() {
  //   MessagesView.$chats.on('submit', MessagesView.renderMessage);
  // },

  // render: function(msg) {
  //   var message = MessageView.render(msg);
  //   $('#chats').append(message);
  // },




