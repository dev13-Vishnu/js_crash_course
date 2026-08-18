let str = 'aooaiffjaofa The quick brown fox jumped over the lazy dog';
let currentStart = 0;
let currentLength = 0;
let maxLength = 0; 
let maxStart = 0;
for(let i = 0; i< str.length;i++){
    let char = str[i];

    let isWordChar = i< str.length && /[a-zA-z]/.test(char);

    if(isWordChar) {
        if(currentLength === 0){
            currentStart = i;
        }
        currentLength++;
    } else{
        if(currentLength> maxLength) {
            maxLength = currentLength
            maxStart = currentStart
        }
        currentLength = 0;
    }
}

    let result = "";
    for(let i = maxStart; i < maxLength + maxStart; i++) {
        result += str[i]
    }
     console.log(result);
