// Class properties must be explicitly declared.
// Cannot extend the prototype with first defining the new method on an interface.
// `this` will be of type `any` when used outside of a class.
var Calculator = (function () {
    function Calculator(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
    Calculator.prototype.add = function () {
        return this.operand1 + this.operand2;
    };
    return Calculator;
}());
Calculator.prototype.subtract = function () {
    return this.operand1 - this.operand2;
};
