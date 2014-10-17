$(document).ready(function() {
    var dateIterator = function() {
        return new Date();
    };

    var i = 0;
    var elements = [
        new Date(2014, 0, 0, 13, 5, 0, 0),
        new Date(2014, 0, 0, 13, 10, 0, 0),
        new Date(2014, 0, 0, 13, 15, 0, 0),
        new Date(2014, 0, 0, 13, 20, 0, 0),
        new Date(2014, 0, 0, 13, 25, 0, 0),
        new Date(2014, 0, 0, 13, 30, 0, 0),
        new Date(2014, 0, 0, 13, 35, 0, 0),
        new Date(2014, 0, 0, 13, 40, 0, 0),
        new Date(2014, 0, 0, 13, 45, 0, 0),
        new Date(2014, 0, 0, 13, 50, 0, 0),
        new Date(2014, 0, 0, 13, 55, 0, 0),
        new Date(2014, 0, 0, 13, 0, 0, 0)
    ];
    var a = function() {
        return elements[(i++%elements.length)];
    };

    setInterval(createTicker(a), 3000);
});

function createTicker(iterator) {
    var $cells = $('.cell');

    return function() {
        $cells.removeClass('active');

        $('.high-es').addClass('active');
        $('.high-ist').addClass('active');

        var currentDate = iterator();
console.log(currentDate);
        // hours
        var hours = currentDate.getHours();
        hours = hours % 12;

        var minutes = currentDate.getMinutes();
        minutes = Math.floor(minutes / 5);

        var highlights = [];
        switch(minutes) {
            case 0:
                highlights.push('high-' + hours);
                highlights.push('high-uhr');
                break;
            case 1:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-past');
                highlights.push('high-' + hours);
                break;
            case 2:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-past');
                highlights.push('high-' + hours);
                break;
            case 3:
                highlights.push('high-prefix-quarter');
                highlights.push('high-infix-past');
                highlights.push('high-' + hours);
                break;
            case 4:
                highlights.push('high-prefix-20');
                highlights.push('high-infix-past');
                highlights.push('high-' + hours);
                break;
            case 5:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-to');
                highlights.push('high-half');
                highlights.push('high-' + (hours+1));
                break;
            case 6:
                highlights.push('high-half');
                highlights.push('high-' + (hours+1));
                break;
            case 7:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-past');
                highlights.push('high-half');
                highlights.push('high-' + (hours+1));
                break;
            case 8:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-past');
                highlights.push('high-half');
                highlights.push('high-' + (hours+1));
                break;
            case 9:
                highlights.push('high-prefix-quarterto');
                highlights.push('high-' + (hours+1));
                break;
            case 10:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-to');
                highlights.push('high-' + (hours+1));
                break;
            case 11:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-to');
                highlights.push('high-' + (hours+1));
                break;
        }

        for (var i = 0; i < highlights.length; i++) {
            $('.' + highlights[i]).addClass('active');
        }
    };
}