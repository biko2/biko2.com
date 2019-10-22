(function($){
    $(document).ready(function(){
        var urlParam = '?gracias-por-suscribirte';
        var messageElement = '.js-subscription-ok';
        var hiddenClass = 'd-none';

        if(window.location.search === urlParam){
            
            $(messageElement).removeClass(hiddenClass);
        }
    });
}(jQuery));

(function($){
    $(document).ready(function(){
        var urlParam = '?gracias';
        var messageElement = '.js-insights-ok';
        var hiddenClass = 'd-none';
        if(window.location.search === urlParam){
            
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