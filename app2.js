
const outputKeyPad = document.getElementById("display-numbers");
const outputRandomPin = document.getElementById("display-pin");
const success = document.getElementById("message-success");
const fail = document.getElementById("message-fail");

function getRandomPin() {
    const randomPin = Math.round(Math.random() * 10000);
    if (randomPin.toString().length == 4) {
        return randomPin;
    } else {
        return getRandomPin();
    }
}

document.getElementById("pin-generate-btn").addEventListener("click", function () {
    outputRandomPin.value = getRandomPin();
});

document.getElementById("key-pad").addEventListener('click', function (event) {
    const key = event.target.innerText;
    if (isNaN(key)) {
        if (key == 'C') {
            outputKeyPad.value = '';
            success.style.display = 'none';
            fail.style.display = 'none'
        } else if (key == '<') {
            const nums = outputKeyPad.value.split('');
            nums.pop();
            outputKeyPad.value = nums.join('');
        }
    } else {
        outputKeyPad.value += key;
    }
});

document.getElementById("submit-btn").addEventListener('click', function () {
    
    if (outputKeyPad.value == outputRandomPin.value) {
        success.style.display = 'block';
        fail.style.display = 'none';
    } else {
        fail.style.display = "block";
        success.style.display = "none";
    }
});