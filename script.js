$(document).ready(function() {
    var ticker = createTicker(function() {
        return new Date();
    });

    setInterval(ticker, 30000);

    ticker();
});

function createTicker(iterator) {
    var $cells = $('.cell');

    return function() {
        $cells.removeClass('active');

        $('.high-es').addClass('active');
        $('.high-ist').addClass('active');

        var currentDate = iterator();

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