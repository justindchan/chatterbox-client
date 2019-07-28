var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = new Messages(decodeURI(App.username), $('#message').val(), $('#rooms select').val());
    Parse.create(message);
    console.log($('#rooms select').val()); 
    // console.log(message);
    MessagesView.renderMessage(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
