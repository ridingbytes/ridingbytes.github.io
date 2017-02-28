(function() {
  jQuery(document).ready(function() {
    jQuery('a.page-scroll').bind('click', function(event) {
      var $anchor, $el, anchor, href;
      $anchor = $(this);
      href = $anchor.attr('href');
      anchor = href.split('/').pop();
      $el = $(anchor);
      if ($el.offset() === void 0) {
        return;
      }
      $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
      }, 1500);
      event.preventDefault();
    });
    return jQuery('input,textarea').jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {},
      filter: function() {
        return $(this).is(':visible');
      }
    });
  });

}).call(this);
