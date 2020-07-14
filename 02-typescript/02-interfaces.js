var _this = this;
var juxx = {
    name: 'Juan',
    lastname: 'Guevara',
    married: 1,
    state: 'BN',
    salary: 142.54,
    printUser: function (message) {
        return 'El mensaje es: ' + message;
    },
    add_tax: function (tax) {
        return _this.salary + _this.salary * tax;
    },
    actual_state: function () {
        switch (_this.state) {
            case 'AC':
                return 'AP';
            case "IN":
                return 'AF';
            case "BN":
                return 'AT';
        }
    }
};
