//Задание 1
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function (number) {
        return number > 0;
    })
    return newArr;
}

//Задание 2
function firstPositiveNumber(numbers) {
    var newArr = numbers.find(function (number) {
        return number > 0;
    })
    return newArr;
}

// //Задание 3
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

//Задание 4
function areAnagrams() {
    var arr = [];
    for (var i in arguments) {
        arr[i] = arguments[i];
    }
    arr.forEach(function (item, i) {
        arr[i] = item.toLowerCase().split('').sort().join('');
    });
    return arr.every(function (item) {
        return item == arr[0]
    });
}

//Задание 5
function divideArr(arr, n) {
    var divArr = [];
    for (var i = 0; i < arr.length; i += n) {
        divArr[divArr.length] = arr.slice(i, i + n)
    }
    return divArr;
}