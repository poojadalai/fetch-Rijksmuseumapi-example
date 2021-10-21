
var array = ['rope', 'pore', 'repo', 'red rum', 'murder', 'litsen', 'silent', 'endeavour'];
var arr = ['cat', 'dog', 'tac', 'god', 'act'];

//to check anagram sting
function anagram(arrs) {
    var result = [];
    arrs.forEach((arr) => {
        // char to remove space from array
        var char = arr.replace(/\s/g, '');
        var word = char.split('').sort().join(''); // eopr

        //check whether the object has the specified property
        if (!result.hasOwnProperty(word)) {
            result[word] = [];  //[eopr] = []
        }
        result[word].push(char);
    });
    return result;
}

console.log(anagram(array));
