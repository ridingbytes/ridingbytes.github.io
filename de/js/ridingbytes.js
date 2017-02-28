jQuery(document).ready(function () {
    'use strict';

    // Smooth scrolling
    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        var anchor = href.split("/").pop();
        var $el = $(anchor);
        if ($el.offset() === undefined) return;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1500);
        event.preventDefault();
    });

    jQuery("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

});
