class Templates {
    static message(type, date, inputValue, textareaValue) {
        return `<div class="${type} message"><div class="timestamp">${date}</div> ${inputValue}: ${textareaValue}</div>`
    }

    static enterchat(inputValue) {
        return `<div class="joinedchat">Пользователь <span class="username"> ${inputValue} </span> зашел в чат</div>`
    }

    static leftchat(inputValue) {
        return `<div class="leftchat">Пользователь <span class="username"> ${inputValue} </span> покинул чат </div>`
    }
}