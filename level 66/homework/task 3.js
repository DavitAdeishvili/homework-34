// Chad
// დავალება NUM 6: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, თუ ტექსტის პირველ და ბოლო ასოები ერთნაირია.
// დავალება NUM 7: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს თითოეული ასოს სიხშირეს, ანუ რამდენჯერ გვხვდება თითოეული ასო ტექსტში.


// 6

function firstLast (text){
    return text.length - 1 == text.length - 0
}

// 7

function letterFrequency(text) {
    const frequency = {};
    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toLowerCase();
        if (letter >= 'a' && letter <= 'z') {
            if (frequency[letter]) {
                frequency[letter] += 1;
            } else {
                frequency[letter] = 1;
            }
        }
    }
    return frequency;
}