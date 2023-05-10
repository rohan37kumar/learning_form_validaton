var fname, lname, phn_num, mailID, passwrd, tnc

function getvals() {
    fname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    phn_num = document.getElementById("phn_num").value
    mailID = document.getElementById("mailID").value
    passwrd = document.getElementById("passwrd").value
    tnc = document.getElementById("tnccheck")


    checkvals();
}


var fcheck = 0, lcheck = 0, phncheck = 0, mailcheck = 0, passcheck = 0;
function checkvals() {
    fcheck = 0;
    lcheck = 0;
    phncheck = 0;
    mailcheck = 0;
    passcheck = 0;

    //variables for checking mailID
    var syma = 0;
    var dot = 0;
    var atlindx = 0;


    //Variables for checking password.
    var psdig = 0, nv = 0, uc = 0;

    if (lname != "") {
        lcheck = 1;
    }
    if (fname != "") {
        fcheck = 1;
    }

    
    if ((phn_num.length == 10) && ((phn_num.charAt(0)) != '0')) {
        phncheck = 1;
    }

    for (let i = 0; i < mailID.length; i++) {
        if ((mailID.charAt(i)) == '@') {
            syma++;
            atlindx = i;
        }
    }
    for (let j = atlindx; j < mailID.length; j++) {
        if ((mailID.charAt(j)) == '.') {
            dot++;
        }
    }

    if ((syma == 1) && (dot == 1)) {
        mailcheck = 1;
    }

    for (let k = 0; k < passwrd.length; k++) {
        psdig++;
        var c = passwrd.charAt(k);
        if ((c >= 'A') && (c <= 'Z')) {
            uc++;
        }
        if ((c >= '0') && (c <= '9')) {
            nv++;
        }

    }

    if ((psdig >= 8) && (uc > 0) && (nv > 0)) {
        passcheck = 1;
    }


    if (fcheck != 1) {
        alert("Enter a valid First Name")
    }
    if (lcheck != 1) {
        alert("Enter a valid Last Name")
    }
    if (phncheck != 1) {
        alert("Enter a valid Phone Number")
    }
    if (mailcheck != 1) {
        alert("Enter a valid Mail ID")
    }
    if (passcheck != 1) {
        alert("Enter a valid strong Password")
    }
    if(tnc.checked == false){
        alert("Please acknowledge the checkbox.")
    }

    else if ((fcheck == 1) && (lcheck == 1) && (phncheck == 1) && (mailcheck == 1) && (passcheck == 1)&&(tnc.checked == true)) {

        alert("Form Submitted Successfully");

        print();
    }


}

function print() {
    console.log(fname)
    console.log(lname)
    console.log(phn_num)
    console.log(mailID)
    console.log(passwrd)
    console.log(tnc.checked)
}