
//slect brand from drop down 
$("select").change(function(){
  $(this).find("option:selected").each(function(){
    var optionValue = $(this).attr("value");
    if(optionValue){
      $(".box").not("." + optionValue).hide();
      $("." + optionValue).show();
    } else{
      $(".box").hide();
    }
  });
}).change();

var userinfo = localStorage.getItem('userInfo');
if(userinfo){
  userinfo = JSON.parse(userinfo)
  $('#displayName').text( userinfo.firstName );
} else {
  $('#displayName').text( "Guest" );
}

$('#logout').click(function(){
  sessionStorage.setItem("logout", true);
  window.location.replace("./registration.html");
});

var x = sessionStorage.getItem('count')
if (x === null){
 $('#myCart').text('0'); 
} else {
   $('#myCart').text(x);
}

  //Login
  // $('#loginBtn').on('click', function (e) {
  //   e.preventDefault();
  //   if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' ){
  //     //login the user
  //     var data = {
  //       email: $('#loginEmail').val(),
  //       password: $('#loginPassword').val()
  //     };
  //     firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  //     .then(function(authData) {
  //       console.log("Authenticated successfully with payload:", authData);
  //       $('#exampleModalCenter').modal('hide');
  //     })
  //     .catch(function(error) {
  //       console.log("Login Failed!", error);
        
  //     });
  //   } else {
  //     alert("Please enter your login credentials");
  //   }
  // });






















