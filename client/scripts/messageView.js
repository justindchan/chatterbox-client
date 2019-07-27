var MessageView = {

  render: _.template(
    `<div>
      <div class="chat" > <%- text %> </div>
      <div class="username"> <%- username %> </div>
      <div class="rooms"> <%- roomname %>
    </div>
    `)
};
