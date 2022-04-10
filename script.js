let channel = new BroadcastChannel(`1`);
let message = document.getElementById(`text`);
let textarea = document.getElementById(`textarea`);
let button = document.getElementById(`button`);
let input = document.getElementById(`input`);
let messagebox = document.getElementById(`messagebox`);

function handlemessage (){
    let date = getDate();
    let sendedmessage = Templates.message(`send`, date, input.value, textarea.value);
    let receivedmessage = Templates.message(`receive`, date, input.value, textarea.value);
    let enterChat = Templates.enterchat(input.value);

    if (!input.getAttribute(`disabled`, `disabled`)) {
        channel.postMessage(enterChat);
        message.insertAdjacentHTML("beforeend", enterChat);
    }

    channel.postMessage(receivedmessage);
    input.setAttribute(`disabled`, `disabled`);

    message.insertAdjacentHTML("beforeend", sendedmessage);
    textarea.value = ``;
    message.scrollTo(0, message.scrollHeight);
}

textarea.addEventListener(`keyup`, function (event) {
    if (event.keyCode === 13) {
        handlemessage();
    }
});

button.addEventListener(`click`, handlemessage);

channel.addEventListener(`message`, function (event) {
    message.insertAdjacentHTML("beforeend", event.data);
    message.scrollTo(0, message.scrollHeight);
});

window.addEventListener(`beforeunload`, function () {
    if (input.value != `` && input.getAttribute(`disabled`)) {
        channel.postMessage(Templates.leftchat(input.value));

        return null
    }
});

//test