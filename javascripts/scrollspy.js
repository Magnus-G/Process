var PositionHighlighter = {
  headings: function() {
    elementsToWatch = $('h1, h2').map(function(i, el){
      return {
        top: $(el).offset().top,
        id: el.id
      }
    });
    return elementsToWatch;
  },

  closestElementToTop: function() {
    var heading;
    var headings = this.headings();
    var offset = 121;
    var top = $(document).scrollTop() + offset;
    var i = headings.length;
    while (i--) {
      heading = headings[i];
      if (top >= heading.top) return heading;
    }
  },

  setup: function() {
    $(document).scroll((function(){
      var heading = this.closestElementToTop();
      if (!heading) return;

      var correspondingAnchor = $('a[href="#' + heading.id + '"]');
      $('ul li.active').removeClass('active');
      correspondingAnchor.parent('li').addClass('active');
    }).bind(this));
  }
};



