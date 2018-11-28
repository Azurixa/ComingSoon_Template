class Timera{
    constructor(date, elementID){
        this.element = $('#'+elementID);
        this.date = date;
    }
    calculateSecounds(){
        var now = new Date();
        var calculated = this.date - now;
        return Math.floor(calculated/1000);
    }
    show(){
        var calculated = this.calculateSecounds();
        window.a = $($(this.element).find('#seconds')).html(calculated%60);
        calculated = Math.floor(calculated/60);
        window.a = $($(this.element).find('#minutes')).html(calculated%60);
        calculated = Math.floor(calculated/60);
        window.a = $($(this.element).find('#hours')).html(calculated%24);
        calculated = Math.floor(calculated/24);
        window.a = $($(this.element).find('#days')).html(calculated);
    }
}
$(document).ready(function() {
    var date = new Date("2019.01.01");
    window.timer = new Timera(date, 'timer');
    timer.show();
    setInterval('timer.show()', 1000);
});
