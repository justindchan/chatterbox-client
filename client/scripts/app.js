// var refresh = function () {
//   //FormView.initialize();
//   //RoomsView.initialize();
//   MessagesView.initialize();
//   setTimeout(refresh, 5000);
// };


var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // refresh();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // MessagesView.renderMessage(data);
      console.log(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};