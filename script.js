const wordArray =['read', 'visit', 'dine', 'travel']

function firstPalindrome(string){
    let reversedString = string.split(" ").reverse().join("");

    return string === reversedString;

}

//Another function will iterate through the string array and check for the palindrome

function firstPalindrome(words){
    for(let i=0; i<words.length; i++){

        let word = words[i];
        if(firstPalindromepalindrome(word)){
            return word;
        }
    }
    return " ";
}

console.log(firstPalindrome(wordArray));