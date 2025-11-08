console.log('JavaScript Activated!');

    //Forms variable
let form1=document.getElementById("sign");
let form2=document.getElementById("log");

let account={
  name:" ",
  password:" "
}

    //Creating the account
function createAccount(){
let cUserName=
form1.elements.username.value
let cPassWord=
form1.elements.password.value
let confCrtdPassword=
form1.elements.cpassword.value

if(cPassWord === confCrtdPassword){
  alert("Account Created!")
  account.name=cUserName;
  account.password=cPassWord;
  notify(account.name, account.password)
}
else{
  alert("Password Dont Match")
  console.log("Account Not Created")
}

}

function notify(usr, psswrd){
  console.log("Account Created user: " + usr + " password: " + psswrd)
  cUserName=
form1.elements.username.value=""
cPassWord=
form1.elements.password.value=""
confCrtdPassword=
form1.elements.cpassword.value=""
}

      //Logging In
  function login(){
    let logUserName=
    form2.elements.username2.value;
    let logPassWord=
    form2.elements.password2.value;
    
    if(logUserName == account.name && logPassWord == account.password){
      alert("Welcome " + account.name);
      console.log("Account Logged In User:" + account.name);
    }
    else{
      alert("Wrong Username or Password")
      console.log(account.name)
    console.log(account.password)
    }
    
  }
      //testing
