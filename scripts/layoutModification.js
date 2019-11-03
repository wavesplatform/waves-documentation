jQuery(document).ready(function () {
  var $ = jQuery;
  var setPageInnerStyles = function() {
    var element = $('.page-inner')[0];
    element.style.maxWidth = '90%';
    element.style.padding = '20px 5% 40px 5%';
  };
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      setPageInnerStyles();
    });
  });

  var config = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    // attributeFilter: ['one', 'two'],
    attributeOldValue: true,
    characterDataOldValue: true
  };

  observer.observe(document.body, config);

  setPageInnerStyles();
});
