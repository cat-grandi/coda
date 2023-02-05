function hideRepeatOn() {
    $('#collapse_MonthlyOn').insertBefore('#collapse_RepeatOn');
    $('#collapse_RepeatOn').collapse('hide');
};
function showRepeatOn() {
    $('#collapse_RepeatOn').collapse('show');
};

function hideMonthlyOn() {
    $('#collapse_RepeatOn').insertBefore('#collapse_MonthlyOn');
    $('#collapse_MonthlyOn').collapse('hide');
};
function showMonthlyOn() {
    $('#collapse_MonthlyOn').collapse('show');
};

function hideAll() {
    hideRepeatOn();
    hideMonthlyOn();
};


//////////////////////////////////////////////////
$(function() {
    $('#dd_period').change(
        function() {
            switch($(this).val()) {
                case 'day':
                case 'year':
                    hideAll();
                    break;
                case 'week':
                    hideMonthlyOn();
                    showRepeatOn();
                    break;
                case 'month':
                    hideRepeatOn();
                    showMonthlyOn(); 
                    break;
            }
        }
    );

    $('#chk_dark').change(
        function() {
            var element = document.documentElement;
            element.classList.toggle("kr-dark-mode");
        }
    );
});