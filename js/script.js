

var sayMyName = function (name) {
alert('My Name is '+name)
}

//CAR Variable

var car = {
    make: 'vw',
    model: 'polo',
    year: 2015,
    seats: ['seat1', 'seat2', 'seat3', 'seat4'],
    isTurnedOn: false,

    TurnOn: function () {
        this.isTurnedOn = true; 
    },

    switchCar: function (isOn) 
    {
        console.log('The car is turned on: '+isOn);
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    },

    fly: function() {
        alert('Flying Cars!')
    }
}