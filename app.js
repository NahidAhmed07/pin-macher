
function getRandomPin() {
    const randomPin = Math.round(Math.random() * 10000);
    if (randomPin.toString().length == 4) {
        return randomPin;
    } else {
        return getRandomPin();
    }   
}

//
document.getElementById('pin-generate-btn').addEventListener('click', function () {
    const pin = getRandomPin();
    document.getElementById("display-pin").value = pin;
})


document.getElementById('key-pad').addEventListener('click', function (event) {
    
    const key = event.target.innerText;
    const outputFeild = document.getElementById("display-numbers");
    if (isNaN(key)) {
        if (key == 'C') {   
            outputFeild.value = '';
        } else if (key == '<') {
            let nums = outputFeild.value.split('');
            nums.pop();
            nums = nums.join('');
            outputFeild.value = nums;
        }
    }
    else {
        outputFeild.value += key;
    }
})



document.getElementById('submit-btn').addEventListener('click', function () {
    
    const generatePin = document.getElementById("display-pin").value;
    const typedPin = document.getElementById("display-numbers").value;

    const messageFail = document.getElementById('message-fail');
    const messageSuccess = document.getElementById('message-success');

    if (parseInt(generatePin) === parseInt(typedPin)) {
        messageFail.style.display = 'none';
        messageSuccess.style.display = 'block';
    }
    else {
        messageSuccess.style.display = 'none';
        messageFail.style.display = 'block';
    }
})