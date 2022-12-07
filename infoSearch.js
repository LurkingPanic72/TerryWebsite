// Created by Scott Fitz Gerald
function popupChoose() {
    let text;
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let social = document.getElementById("social").value;
    let nameRe = /^[A-Za-z]+$/;
    let phoneRe = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
    let emailRe = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/;
    let addressRe = /^[A-Za-z0-9'\.\-\s\,]+$/;
    let socialRe = /^[0-9]{3}\-[0-9]{2}\-[0-9]{4}$/;

    if ((first == null || first == "") && (last == null || last == "") && (phone == null || phone == "") && (email == null || email == "")
     && (address == null || address == "") && (social == null || social == "")) 
    {
        window.alert("You did not tell Terry about you. :(");
    } else if (!(nameRe.test(first) || first == null || first == "") || !(nameRe.test(last) || last == null || last == "")
     || !(phoneRe.test(phone) || phone == null || phone == "") || !(emailRe.test(email) || email == null || email == "")
      || !(addressRe.test(address) || address == null || address == "") || !(socialRe.test(social) || social == null || social == ""))
    {
        if (!(nameRe.test(first) || first == null || first == "") || !(nameRe.test(last) || last == null || last == "")){
            window.alert("Terry wants your real name silly :)");
        }
        if (!(phoneRe.test(phone) || phone == null || phone == "")){
            window.alert("Terry wants your phone number in this format: 999-999-9999");
        }
        if (!(emailRe.test(email) || email == null || email == "")){
            window.alert("Silly Terry can only read emails in this format: 123abc@example.com");
        }
        if (!(addressRe.test(address) || address == null || address == "")){
            window.alert("Terry is bad with the GPS please type your adress with no special characters.");
        }
        if (!(socialRe.test(social) || social == null || social == "")){
            window.alert("Terry thinks you think this is a game...type your SSN in this format: 999-99-9999");
        }
    } else {
        if (!(social == null || social == "")){
            window.alert("Terry found your SSN on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        } else if (!(address == null || address == "")){
            window.alert("Terry found your address on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        } else if (!(email == null || email == "")){
            window.alert("Terry found your email on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        } else if (!(phone == null || phone == "")){
            window.alert("Terry found your phone number on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        } else if (!(last == null || last == "")){
            window.alert("Terry found your last name on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        } else{
            window.alert("Terry found your first name on a bad guy website. He wants to help you. Click \"OK\" to let Terry into your system to fix it.");
        }
    }
}
