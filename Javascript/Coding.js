const reverseString = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr
}

//console.log(reverseString('hello'));


const isPalindrome = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr === str;
}


const isPalindrome2 = (str) => {
    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}

//console.log(isPalindrome2('radar'));


const largestWordString = (str) => {
    let arr = str.split(" ")
    let largestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largestWord.length) {
            largestWord = arr[i]
        }
    }

    return largestWord;

}

//console.log(largestWordString("I Love the javascript"));

const factorialNumber = (num) => {
    if (num <= 0) return 0;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    return fact;
}

//console.log(factorialNumber(3))

const primeNumber = (num) => {
    if (num == 1) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true;
}

const primeNumberBetween = (start, end) => {
    for (let i = start; i <= end; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) { flag = 1; break; }
        }

        if (i > 1 && flag == 0) { console.log(i) }

    }
}


primeNumberBetween(1, 10);


const removeDuplicates = (str) => {
    // let arr = [...new Set(str)];
    // return arr.join("");

    let arr = str.split("")
    arr = arr.filter((f , i, self) => self.indexOf(f) === i);
    return arr.join("")
}


console.log(removeDuplicates('I Love javascript'))