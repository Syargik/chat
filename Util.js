function getDate(){
    let data = new Date();
    
    return `${data.toTimeString().slice(0, 8)}`
}