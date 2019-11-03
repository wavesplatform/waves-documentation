var pageChangeHandler = function(event) {
  // var bookSummaryElement = document.querySelector('.book-summary');
  // var activeChapterElement =  document.querySelector('.chapter.active');
  // setTimeout(function() {
  //   var activeChapterBoundingClientRect = activeChapterElement.getBoundingClientRect();
  //   bookSummaryElement.scrollTop = activeChapterBoundingClientRect.top;
  // }, 1000);
  // gitbook.events.unbind("page.change", pageChangeHandler);
};
gitbook.events.bind("page.change", pageChangeHandler);
