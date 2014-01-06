(function($){
  $.boxer = function(el, options){
    // To avoid scope issues, use 'self' instead of 'this'
    // to reference this class from internal events and functions.
    var self = this;
  
    // Access to jQuery and DOM versions of element
    self.$el = $(el);
    self.el = el;
    
    // Add a reverse reference to the DOM object
    self.$el.data("boxer", self);
    
    self.init = function(){
      self.options = $.extend({},$.boxer.defaultOptions, options);
      
      // add check all
      self.$el.find(self.options.checkAll).on(self.options.event, function(e) {
        e && e.preventDefault();
        var checked = $(e.target).is(':checked');
        self.$el.find(self.options.check).prop('checked', checked);
      });

      // track checked count
      self.$el.find(self.options.check).on(self.options.event, function(e) {
        e && e.preventDefault();
        var $checked = self.$el.find(self.options.check);
        self.$el.find(self.options.checkAll).prop('checked', $checked.length === $checked.filter(":checked").length);
      });

    };
    
    // Run initializer
    self.init();
  };
  
  $.boxer.defaultOptions = {
    event: "change",
    checkAll: "thead :checkbox",
    check: "tbody :checkbox"
  };
  
  $.fn.boxer = function(options){
    return this.each(function(){
      (new $.boxer(this, options));
    });
  };

})(jQuery);
