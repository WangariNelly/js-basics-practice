const string =  'w3resource';
function rotateString(string, n ){
    const chars = string.split('');
    n = n % chars.length

    const rotatedChars = chars.slice(-n).concat(chars.slice(0,  -n)).join('');
    // return rotatedChars;
    console.log(rotateString('w3resource', 10))
}
