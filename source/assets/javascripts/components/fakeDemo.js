var phone = "";
var resultShowed = false;

function getState() {
    var result = 0;
    var resultArray = ['STATE_OK', 'STATE_MAYBE', 'STATE_HACKED'];

    for (counter = phone.length - 1; counter >= 0; counter--) {
        result = result + parseInt(phone.charAt(counter));
    }

    indexSelected = result % resultArray.length;
    return resultArray[indexSelected];
}

function reset() {
    document.getElementById('buttonSummit').removeAttribute("style");
    document.getElementById('inputPhone').removeAttribute("style");
    document.getElementById('result').removeAttribute("style");
    document.getElementById('resultDescription').removeAttribute("style");
    document.getElementById('progressIco').innerHTML = "";
    document.getElementById('phone').removeAttribute("style");
    document.getElementById('progressIco').removeAttribute("style");
    document.getElementById('progressBack').removeAttribute("style");
    document.getElementById('progressFront').removeAttribute("style");
}

function validateNumber() {

    if (resultShowed) { reset(); }
    phone = document.getElementById('phone').value.trim();
    if (event.keyCode === 13) {
        event.preventDefault();
        launch();
    }

}

function launch() {

    if (phone <= 0 || phone == null || isNaN(phone)) { return; }

    document.getElementById('progressFront').removeAttribute("style");
    document.getElementById('phone').removeAttribute("style");
    document.getElementById('phone').disabled = true;
    document.getElementById('progressIco').innerHTML = "";
    document.getElementById('buttonSummit').style.display = "none";
    document.getElementById('result').removeAttribute("style");

    setTimeout(function () {
        document.getElementById('progressFront').style.transition = "2s";
        document.getElementById('progressFront').style.width = document.getElementById('progressBack').clientWidth + "px";
    }, 20);

    setTimeout(function () {
        document.getElementById('progressFront').style.transition = "0s";

        if (getState() == "STATE_OK") {
            state_ok();
        } else if (getState() == "STATE_MAYBE") {
            state_maybe();
        } else {
            state_hacked();
        }

        resultShowed = true;
        document.getElementById('phone').disabled = false;

    }, 2020);
}


function state_ok() {
    document.getElementById('progressFront').style.backgroundColor = "#00EEAA";
    document.getElementById('phone').style.color = "#00EEAA";
    document.getElementById('progressIco').innerHTML = "<i class='material-icons'>check</i>";
    document.getElementById('progressIco').style.color = "#00EEAA";
    document.getElementById('resultIcon').src = "images/demo-ok.svg";
    document.getElementById('resultBackground').style.backgroundColor = "#00EEAA";
    document.getElementById('resultText').style.color = "#00EEAA";
    document.getElementById('resultText').innerHTML = "Very low risk";
    document.getElementById('result').style.display = "block";
    document.getElementById('resultDescription').style.display = "block";
    document.getElementById('resultDescription').style.color = "#3A3A3A";
    document.getElementById('resultDescription').innerHTML = "No mobile account takeover detected";

}

function state_maybe() {
    document.getElementById('progressFront').style.backgroundColor = "#F5A81C";
    document.getElementById('phone').style.color = "#F5A81C";
    document.getElementById('progressIco').innerHTML = "<i class='material-icons'>remove_red_eye</i>";
    document.getElementById('progressIco').style.color = "#F5A81C";
    document.getElementById('resultIcon').src = "images/demo-maybe.svg";
    document.getElementById('resultBackground').style.backgroundColor = "#F5A81C";
    document.getElementById('resultText').style.color = "#F5A81C";
    document.getElementById('resultText').innerHTML = "High risk";
    document.getElementById('result').style.display = "block";
    document.getElementById('resultDescription').style.display = "block";
    document.getElementById('resultDescription').style.color = "#3A3A3A";
    document.getElementById('resultDescription').innerHTML = "Mobile account could have been taken over due to SIM swap in last 72 hours";

}

function state_hacked() {
    document.getElementById('progressFront').style.backgroundColor = "#D0021B";
    document.getElementById('phone').style.color = "#D0021B";
    document.getElementById('progressIco').innerHTML = "<i class='material-icons'>close</i>";
    document.getElementById('progressIco').style.color = "#D0021B";
    document.getElementById('resultIcon').src = "images/demo-hacked.svg";
    document.getElementById('resultBackground').style.backgroundColor = "#D0021B";
    document.getElementById('resultText').style.color = "#D0021B";
    document.getElementById('resultText').innerHTML = "Very High risk";
    document.getElementById('result').style.display = "block";
    document.getElementById('resultDescription').style.display = "block";
    document.getElementById('resultDescription').style.color = "#D0021B";
    document.getElementById('resultDescription').innerHTML = "Mobile Account could have been taken over due to recent SIM swap in last 24 hours";
}
