jQuery(document).ready ->

  # Smooth scrolling
  jQuery('a.page-scroll').bind 'click', (event) ->
    $anchor = $(this)
    href = $anchor.attr('href')
    anchor = href.split('/').pop()
    $el = $(anchor)
    if $el.offset() == undefined
      return
    $('html, body').stop().animate { scrollTop: $(anchor).offset().top }, 1500
    event.preventDefault()
    return

  jQuery('input,textarea').jqBootstrapValidation
    preventSubmit: true
    submitError: ($form, event, errors) ->
      # additional error messages or events
      return
    filter: ->
      $(this).is ':visible'
