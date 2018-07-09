function validateForm(){
    var check_email       = vaildateEmail();
    var check_password = validatePassword();
    var check_mobile     = validateMobile();
    var check_birthday   = validateBirthday();
    var check_money     = validateMoney();
    if (check_email && check_password && check_mobile &&  check_money){
        return true;
    }
    return false;
}
 // kiem ta email
function vaildateEmail(){
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("erro_email").innerHTML = "Vui long nhap email";
    }
    else if (email.length < 6 || email.length > 40) {
        document.getElementById("erro_email").innerHTML = "Vui long nhap email co 6-40 ky tu";
    }
    else {
        var re_email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+(\.+.[A-Z]{1,2})*$/igm;
        if (re_email.test(email)){
                document.getElementById("erro_email").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("erro_email").innerHTML = "Vui long nhap email dung dinh dang";
        }
    }
    return false;
}
// kiem tra password
function validatePassword(){
    var password = document.getElementById("password").value;
    if (password.length == 0){
        document.getElementById("erro_password").innerHTML = "Vui long nhap password";
    }
    else if (password.length <6 || password.length > 30){
        document.getElementById("erro_password").innerHTML = "Vui long nhap password dai 6-30 ky tu";
    }
    else {
        var re_pass = /^(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/i;
        if(re_pass.test(password)) {
            document.getElementById("erro_password").innerHTML = "";
            return true;
        } else {
            document.getElementById("erro_password").innerHTML = "Nhap mat khau gom chu cai, chu so, ky tu dac biet"
        }
    }
    return false;
}
// kiem tra so dien thoai
function validateMobile(){
    var mobile = document.getElementById("mobile").value;
    if (mobile.length == 0){
        document.getElementById("erro_mobile").innerHTML = "Vui long nhap so dien thoai";
    }
    else {
        var re = /^(?:\d{5})([-])\d{3}\1\d{3}$/;
        if (re.test(mobile)){
            document.getElementById("erro_mobile").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("erro_mobile").innerHTML = "Vui long nhap dung dinh dang";
        }
    }
    return false;
}
// kiem tra birthday
function validateBirthday(){
    var birthday = document.getElementById("birthday").value;
    if (birthday.length == 0) {
        document.getElementById("erro_birthday").innerHTML = "Vui long nhap ngay sinh";
    }
    else {
        var re_birthday = /^(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (re_birthday.test(birthday)) {
            document.getElementById("erro_birthday").innerHTML = "";
           return true;
        }
        else {
            document.getElementById("erro_birthday").innerHTML = "Vui long nhap ngay sinh dung dinh dang";
        }
    }
    return false;
}
// kiem tra money
function validateMoney(){
    var money = document.getElementById("money").value;
    if (money.length == 0) {
        document.getElementById("erro_money").innerHTML = "Vui long nhap money";
    }
    else if (money.substr(-2) != "00") {
        document.getElementById("erro_money").innerHTML = "Vui long nhap money la boi so cua 100 VND";
    }
    else {
        var re_money = /^(\d{1,3}(\,\d{3})*|\d{3})?$/;
        if (re_money.test(money)) {
            document.getElementById("erro_money").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("erro_money").innerHTML = "Vui long nhap money dung dinh dang";
        }
    }
    return false;
}

function resets(){
    document.getElementById("erro_email").innerHTML = "";
    document.getElementById("erro_password").innerHTML = "";
    document.getElementById("erro_mobile").innerHTML = "";
    document.getElementById("erro_birthday").innerHTML = "";
    document.getElementById("erro_money").innerHTML = "";
    return false;
}
function inputMoney(){
    var money = document.getElementById("money").value;
    var newMoney = money.replace(/,/g, "");
    var i = newMoney.length;
    var str = "";
    while (i > 0){
        if (i > 3) {
        str = "," + newMoney.substr(i-3, 3)  + str;
        } else {
            str = newMoney.substr(0, i) + str;
        }
        i = i - 3;
    }
    document.getElementById("money").value = str;
    validateMoney();
    return false;
}
