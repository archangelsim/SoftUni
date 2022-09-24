function login(input) {
    let i = 0
    let username = input[i++];
    let password = username.split('').reverse().join('');
    let attempts = 1;
    let guess = input[i++]
    while (attempts < 4 && guess !== password) {
        guess = input[i++]
        attempts += 1
        console.log("Incorrect password. Try again.")
    }
    
    if (password == guess) {
        console.log(`User ${username} logged in.`)
    } else {
        console.log(`User ${username} blocked!`)
    }
    
}

login(['Acer','login','go','let me in','recA'])