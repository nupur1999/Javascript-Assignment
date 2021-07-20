function validate() {

    var flag = true;
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var address = document.getElementById("address").value;


    if (fname == "") {
        document.getElementById("Message").innerHTML = "**please fill firstname";
        flag = false;
    }
    else if ((fname.length <= 4) || (fname.length > 20)) {

        document.getElementById("Message").innerHTML = "**please length must be between 2 and 20";
        flag = false;
    }
    else if (!isNaN(fname)) {
        document.getElementById('Message').innerHTML = "**Only charecters are allowed";
        flag = false;
    } else {
        document.getElementById("Message").innerHTML = "";
    }



    if (lname == "") {
        document.getElementById('Message_zero').innerHTML = "**please fill lastname";
        flag = false;
    } else if ((lname.length <= 3) || (lname.length > 20)) {

        document.getElementById('Message_zero').innerHTML = "**please length must be between 2 and 20";
        flag = false;
    } else if (!isNaN(lname)) {

        document.getElementById('Message_zero').innerHTML = "**Only charecters are allowed";
        flag = false;
    } else {
        document.getElementById("Message_zero").innerHTML = "";
    }




    if (email == "") {
        document.getElementById('Message_one').innerHTML = "**please fill email";
        flag = false;
    } else {
        document.getElementById("Message_one").innerHTML = "";
    }


    if (pass == "") {
        document.getElementById('Message_two').innerHTML = "** password required";
        flag = false;
    } else if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('Message_two').innerHTML = "** password length must be in between 5 to 20";
        flag = false;
    } else {
        document.getElementById("Message_two").innerHTML = "";
    }


    var gender_selected = false;
    var gender = "";
    const rbs = document.querySelectorAll('input[name="gender"]');
    for (const rb of rbs) {

        if (rb.checked) {
            gender = rb.value;
            gender_selected = true;

        }
    }
    if (!gender_selected) {
        flag = false;

        document.getElementById('Message_three').innerHTML = "** Gender required";
    } else {
        document.getElementById("Message_three").innerHTML = "";

    }



    if (address == "") {
        document.getElementById('Message_four').innerHTML = "** address required";
        flag = false;

    } else {
        document.getElementById("Message_four").innerHTML = "";
    }

    if (flag) {
        alert("registration done");
        
        localStorage.setItem('Firstname', fname);
        localStorage.setItem('Lastname', lname);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', pass);
        localStorage.setItem('gender', gender);
        localStorage.setItem('address', address);
           
    }

    return flag;

}



function check() {
    var storedFName = localStorage.getItem('Email');
    var storedPw = localStorage.getItem('Password');

    var userFName = document.getElementById('uusername');
    var userPw = document.getElementById('upassword');

    if (userFName.value == storedFName || userPw.value == storedPw) {
        window.location.replace("todoitem.html");
    } else {
        alert('ERROR'); 
    }

}

