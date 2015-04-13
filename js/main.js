/**
 * Created by Andrey on 13.04.15.
 */

/*Даже небольшие куски JS кода удобнее вынести в файл*/

$(document).ready(function() {
    var clock, countup;

    // Получим значение верхнего лимита счетчика, где есго остановить
    var limit = $('#clock').data('limit');

    var callbacks_obj = {
        interval: function() {
            // Функция срабатывает на каждом временном интервале, при каждой смене чсила
            var cnt = clock.getTime();
        }
    };



    var clock = $('#clock').FlipClock(0, { // Элементы, которым назначается некий функционал в JS, присвоедение объекта,
                                           // им лучше назначать уникальный ID
        clockFace: 'Counter',
        callbacks: callbacks_obj,
        minimumDigits: 4
    });

    // Данная функция запускется через каждые 20 милисекунд
        var ClockInterval = setInterval(function() {
            clock.increment();
            var cnt = clock.getTime();
            if(cnt>=limit) clearInterval(ClockInterval);
        }, 20);

});
