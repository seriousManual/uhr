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

        if (hours === 0) hours = 12;

        var minutes = currentDate.getMinutes();
        minutes = Math.floor(minutes / 5);

        var nextHour = ((hours) % 12) + 1;

        var highlights = [];
        if (minutes < 5) {
            if (minutes == 0 && hours == 1) {
                highlights.push('high-ein');
            } else {
                highlights.push('high-' + hours);
            }
        } else {
            highlights.push('high-' + nextHour);
        }
        switch (minutes) {
            case 0:
                highlights.push('high-uhr');
                break;
            case 1:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-past');
                break;
            case 2:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-past');
                break;
            case 3:
                highlights.push('high-prefix-quarter');
                highlights.push('high-infix-past');
                break;
            case 4:
                highlights.push('high-prefix-20');
                highlights.push('high-infix-past');
                break;
            case 5:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-to');
                highlights.push('high-half');
                break;
            case 6:
                highlights.push('high-half');
                break;
            case 7:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-past');
                highlights.push('high-half');
                break;
            case 8:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-past');
                highlights.push('high-half');
                break;
            case 9:
                highlights.push('high-prefix-quarterto');
                break;
            case 10:
                highlights.push('high-prefix-10');
                highlights.push('high-infix-to');
                break;
            case 11:
                highlights.push('high-prefix-5');
                highlights.push('high-infix-to');
                break;
        }

        for (var i = 0; i < highlights.length; i++) {
            $('.' + highlights[i]).addClass('active');
        }
    };
}
