function Animal(name) {
    self = this;
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();
        else {
            if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
                foodAmount = amount;
            } else {
                return ('Мало корма/Много корма/Неверные данные!')
            }
        }
    }
    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    }
}

function Cat() {
    Animal.apply(this, arguments);

    var feedK = this.feed;
    this.feed = function () {
        feedK();
        console.log('Кот доволен ^_^');
        return this;
    }
    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }
}

var cot = new Cat('кот');
cot.feed().stroke().feed();