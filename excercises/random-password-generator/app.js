function createPass(length) {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(())"
    for (var i = 0; i < parseInt(length); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
console.log(createPass(10));
