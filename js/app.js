$(initialize)

function initialize() {

  $('body').on('click', '.userslogin', usersLogin);
  $('body').on('click', '.usersNew', usersNew);

  $('body').on('submit', '#formContact', showToast);

}



function usersNew(e){
  if (e) e.preventDefault();

  $('.modal-content').html(`
    <form method="post">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Register</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="user_name">Name</label>
          <input class="form-control" type="text" name="user[username]" id="user_name" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="user_email">Email</label>
          <input class="form-control" type="text" name="user[email]" id="user_email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="user_password">Password</label>
          <input class="form-control" type="password" name="user[password]" id="user_password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="user_passwordConfirmation">Repeat password</label>
          <input class="form-control" type="password" name="user[passwordConfirmation]" id="user_passwordConfirmation" placeholder="Repeat Password">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>`);

  $('.modal').modal('show');
}


function usersLogin(e){
  if (e) e.preventDefault();
  $('.modal-content').html(`
    <form method="post">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Login</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="user_email">Email</label>
          <input class="form-control" type="text" name="user[email]" id="user_email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="user_password">Password</label>
          <input class="form-control" type="password" name="user[password]" id="user_password" placeholder="Password">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>`);

  $('.modal').modal('show');
}


function showToast(e) {
  if(e)e.preventDefault();

  if($(this)[0].checkValidity()){
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  // Get the snackbar DIV

}
