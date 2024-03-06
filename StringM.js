//capitalizing words
function capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Example usage:
const sentence = "this is a test sentence.";
const capitalizedSentence = capitalize(sentence);
console.log(capitalizedSentence); // Output: "This is a test sentence."

//capitalieall
function capitalizeAll(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
const sentencee = "this is a test sentence.";
console.log(capitalizeAll(sentence)); // Output: "This Is A Test Sentence."


// ..................word existing check code...........................
function wordExists(sentence, word) {
    return sentence.includes(word);
}

// Example usage:
const sentence1 = "This is a test sentence.";
const word = "test1";
console.log(wordExists(sentence, word)); // Output: false

//.....................3. word occurence count.............................

function countOccurrences(sentence, word) {
    const words = sentence.split(' ');
    let count = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    return count;
}

// Example usage:
const sentence2 = "This is a test sentence. This sentence is a test.";
const word2 = "sentence";
console.log(countOccurrences(sentence2, word2)); // Output: 2

//........................4. Word Density Calculation......................

function calculateWordDensity(text) {
    // Remove punctuation marks and convert to lowercase
    const cleanedText = text.replace(/[^\w\s]|_/g, "").toLowerCase();
    
    // Split the text into words
    const words = cleanedText.split(/\s+/);
    
    // Create an object to store word frequencies
    const wordFrequency = {};
    
    // Count occurrences of each word
    words.forEach(word => {
        if (word in wordFrequency) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });
    
    // Calculate density (frequency per word count)
    const density = {};
    const wordCount = words.length;
    for (const word in wordFrequency) {
        density[word] = wordFrequency[word] / wordCount;
    }
    
    return density;
}

// Example usage:
const text = "This is a test. This test is just for demonstration.";
const wordDensity = calculateWordDensity(text);
console.log(wordDensity);

//...........................File Extension Extraction:........................

function extractFileExtension(filename) {
    return filename.split('.').pop();
}

// Example usage:
console.log(extractFileExtension("index.html")); // Output: "html"
console.log(extractFileExtension("flower.png")); // Output: "png"

//.............................Removing Whitespace:............................

function removeWhitespace(text) {
    return text.replace(/\s/g, '');
}

// Example usage:
console.log(removeWhitespace("   Hello   World   ")); // Output: "HelloWorld"

//..............................Reversing Words:.................................

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// Example usage:
console.log(reverseWords("Hello World")); // Output: "World Hello"

//.................................Counting Vowels:................................

function countVowels(text) {
    return text.match(/[aeiou]/gi).length;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3

//..................................String Palindrome Check:.......................

function isPalindrome(text) {
    const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();
    return cleanedText === cleanedText.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//..................................String Truncation:...........................

function truncateString(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

// Example usage:
console.log(truncateString("Hello World", 5)); // Output: "Hello..."

//....................................String Masking:...............................

function maskString(text, char = '*') {
    return text.replace(/./g, char);
}

// Example usage:
console.log(maskString("password")); // Output: "********"

//.....................................Email Validation:.......................

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example usage:
console.log(isValidEmail("example@example.com")); // Output: true
console.log(isValidEmail("example@.com")); // Output: false


