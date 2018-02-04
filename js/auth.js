$(document).ready(function(){

 var config = {
  apiKey: "AIzaSyBGpJ3RhQm_UaVGNmqbA5wYmpppXJdGvpw",
  authDomain: "proshot-76d57.firebaseapp.com",
  databaseURL: "https://proshot-76d57.firebaseio.com",
  projectId: "proshot-76d57",
  storageBucket: "",
  messagingSenderId: "602315739229"
};

firebase.initializeApp(config);
  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var usersRef = dbRef.ref('users');
  var auth = null;

  if(sessionStorage.getItem('logout') && localStorage.getItem('userInfo')){
    sessionStorage.clear();
    localStorage.clear();
    firebase.auth().signOut().then(function() {
    $('#messageModalLabel').html(spanText('You are logged out successfully.', ['center', 'success']));
    $('#messageModal').modal('show');
    console.log("logged out successfully");
    }).catch(function(error) {
  // An error happened.
    });
  } else if(localStorage.getItem('userInfo')) {
    $('#messageModalLabel').html(spanText('You are already logged in.', ['center', 'success']));
    $('#messageModal').modal('show');
  }


  //Register
  $('#regform').submit( function (e) {
    e.preventDefault();
    //$('#registerModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');
    var data = {
      email: $('#registerEmail').val(), //get the email from Form
      firstName: $('#registerFirstName').val(), // get firstName
      lastName: $('#registerLastName').val(), // get lastName
      phoneNumber: $('#registerMobile').val(), // get lastName
      address: $('#registerAddress').val(),// get lastName
      city: $('#registerCity').val(),// get lastName
      pincode: $('#registerCode').val(),// get lastName
      state: $('#registerState').val()// get lastName
    };
    var passwords = {
      password : $('#registerPassword').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        firebase.auth()
        .createUserWithEmailAndPassword(data.email, passwords.password)
        .then(function(user){
          user.updateProfile({ displayName: data.firstName});
          console.log("Authenticated successfully with payload:", user);
          auth = user;
            //now saving the profile data
            usersRef
            .child(user.uid)
            .set(data)
            .then(function(){
              console.log("User Information Saved:", user.uid);
            })
           // $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
           /*setTimeout(function() {
            $('#messageModal').modal('hide');
           // window.location.replace("./index.html");
         }, 500);*/
           console.log("Successfully created user account");
           $('#messageModalLabel').html(spanText('Successfully created user account, Please log with your credentials.', ['center', 'success']));
            $('.post-auth').append(' <button type="submit" class="btn btn-success" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">Login</button>');
          // $('.post-auth').append(' <a href="index.html"  class="btn btn-success" data-dismiss="modal" data-toggle="modal">Login</a>');
           $("#regform").find('input:text, input:password, input:file, select, textarea').val('');
         })

        .catch(function(error){
          console.log("Error creating user:", error);
          $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
        });
      } else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
      }
    }  
  });

  //Login
  $('#doLogin').on('click', function (e) {
    e.preventDefault();
    $('#loginModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');

    if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' ){
      //login the user
      var data = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(function(authData) {
        console.log("Authenticated successfully");
        auth = authData;
        $('#messageModalLabel').html(spanText('Successfully logged in!', ['center', 'success']))
        usersRef.child(authData.uid).on("value", function(snapshot) {
         var user = snapshot.val(); 
         localStorage.setItem("userInfo", JSON.stringify(user));
         window.location.replace("./index.html");
       });
         /* setTimeout(function () {
            $('#messageModal').modal('hide');
            $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
          })*/
        })
      .catch(function(error) {
        console.log("Login Failed!", error);
        $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
      });
    }
  });


})

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
