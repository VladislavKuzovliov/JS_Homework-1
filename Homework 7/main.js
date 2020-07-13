//Задание 1
function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}

Animal.prototype.formatFoodAmount = function () {
    return this._foodAmount + 'гр.'
}
Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this.formatFoodAmount();
    else {
        if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
            this._foodAmount = amount;
        } else {
            return ('Мало корма/Много корма/Неверные данные!')
        }
    }
}
Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}


function Cat() {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);


Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
}
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}


//Задание 2
function deepClone(obj) {
    var objectClone = {};
    var arr = [];
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            arr[i] = deepClone(obj[i]);
        }
        return arr;
    } else if (typeof obj == "object" && obj != null) {

        for (var key in obj) {
            objectClone[key] = deepClone(obj[key]);
        }
        return objectClone;
    } else {
        return obj;
    }
}

//Задание 3
function deepSame(obj, obj2) {
    if (typeof obj == "object" && obj != null && Object.keys(obj).length == Object.keys(obj2).length) {
        for (var key in obj) {
            if (!deepCompare(obj[key], obj2[key])) {
                return false;
            }
        }
        return true;
    } else if (typeof obj == "function") {
        return obj.toString() == obj2.toString();
    } else {
        return obj == obj2;
    }
}