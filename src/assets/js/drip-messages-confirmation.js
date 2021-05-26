(function($){
    $(document).ready(function(){
        var urlParam = 'suscripcion-ok';
        var messageElement = '.js-subscription-ok';
        var hiddenClass = 'd-none';

        if(window.location.search.indexOf(urlParam)>-1){

            $(messageElement).removeClass(hiddenClass);
        }
    });
}(jQuery));

(function($){
    $(document).ready(function(){
        var urlParam = 'gracias';
        var messageElement = '.js-insights-ok';
        var hiddenClass = 'd-none';

        if(window.location.search.indexOf(urlParam)>-1){

            $(messageElement).removeClass(hiddenClass);
        }
    });
}(jQuery));

(function($){
    $(document).ready(function(){
        var urlParam = 'sugerencia';
        var messageElement = '.js-sugerencia-ok';
        var hiddenClass = 'd-none';

        if(window.location.search.indexOf(urlParam)>-1){

            $(messageElement).removeClass(hiddenClass);
        }
    });
}(jQuery));

(function($){
    $(document).ready(function(){
        var messageCloseElement = '.js-message-close';
        var hiddenClass = 'd-none';
        $(messageCloseElement).click(function(ev){
            ev.preventDefault();
            $(messageCloseElement).parent().parent().slideUp(1000);
        });
    });
}(jQuery));
