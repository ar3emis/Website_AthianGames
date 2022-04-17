
$('a').each(function() {
    if (this.classList.contains("media")){
      //DO NOTHING. This is a youtube popup video.
    }
    else {
      var a = new RegExp('/' + window.location.host + '/');
      if(!a.test(this.href)) {
           $(this).click(function(event) {
               event.preventDefault();
               event.stopPropagation();
               window.open(this.href, '_blank');
           });
       }
    }
   
  });

