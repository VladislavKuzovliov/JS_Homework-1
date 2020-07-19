//Задание 1
function arrToObjArr(names){
    var objects = [];
    names.forEach(function (item,i) {
        objects[i] = {name:item};
    })
    return objects;
}

//Задание 2
function arrToTime(numbers) {
    var time = 'Текущее время';
    numbers.forEach(function (item, i) {
        time += ' : ' + item;
    })
    return time;
}


//Задание 3
function numberOfVowel(str) {
    var sArr = str.toLowerCase().split('');
    var sVowel = 'уеаоэяиюёы';
    return sArr.reduce(function (sum, val) {
        if(sVowel.indexOf(val) != -1){
            sum++;
        }
        return sum;
    },0);
}

//Задание 4
function countSentencesLetters(string) {
    var arr = string.split('');
    arr.forEach(function (item, i) {
        if (item == '!' || item == '?') {
            arr[i] = '.'
        }
    })
    var newString = arr.join('');
    var newArr = newString.split('.');
    newArr.forEach(function (item, i) {
        if (item.length) {
            var iArr = item.toLowerCase().split('');
            var sLetter = 'йцукенгшщзхъфывапролджэячсмитьбюё';
            var LetterQuantity = iArr.reduce(function (sum, val) {
                if (sLetter.indexOf(val) != -1) {
                    sum++;
                }
                return sum;
            }, 0);
            console.log(item.trim() + ': Letters quantity is: ' + LetterQuantity)
        }
    })
}


//Задание 5
function countSentencesLetters(string) {
    var Coincidences = {};
    var arr = string.split('');
    var max = 0;

    arr.forEach(function (item, i) {
        if (item == '!' || item == '?' || item == ',' || item == ';' || item == ':' || item == ' ' || item == '"' || item == '/' || item == '\'' || item == '\n' || item == '_') {
            arr[i] = '.'
        }
    })

    var newString = arr.join('');
    var newArr = newString.split('.');

    newArr.forEach(function (item, i) {
       newArr[i] = item.trim().toLowerCase();
    });
    newArr.forEach(function (item, i) {
            if(item.length){
                Coincidences[item] = (Coincidences[item] == undefined)? 1: Coincidences[item]+1;
            }
    })

    for(var key in Coincidences){
        if(max < Coincidences[key]){
            max = Coincidences[key];
        }
    }

    for(var key in Coincidences){
        if(Coincidences[key] == max){
            return 'Максимальное число повторений у слова "' + key + '" - ' + Coincidences[key];
        }
    }

}











