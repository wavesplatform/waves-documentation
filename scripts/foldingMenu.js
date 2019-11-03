jQuery(document).ready(function () {
  var $ = jQuery;
  var config = {
    animationDuration: 500,
    sticky: true
  };


  // our plugin configuration object
  // ... optionally defined in client book.json
  // ... auto defaulted by gitbook as follows:
  //     config: {
  //       animationDuration: 400,
  //       sticky:            false
  //     }
  // glean plugin configuration on start event
  gitbook.events.bind('start', function(e, myConfig) {
    console.log('start', e);
    // simply retain in parent scope (for subsequent use)
    config = myConfig['folding-menu'];
    diag('start event ... config: ', config);
  });


  // listen for gitbook "page.change" events
  // ... emitted whenever a file.md changes
  var pageChangeHandler = function(e) {
    // handle obsecure case  where 'active' class designation is delayed
    // - either when different MD files are used within sections/sub-sections
    // - or when api.md is referenced in multiple seperate sections
    //   ... i.e. Core API and Extension API
    // > process on next event tick (i.e. timeout) seems to help

    const findClosestChapter = function($currentElement) {
      var parentChapters = $currentElement.parents('.chapter');
      parentChapters.each(function(index, parentChapter) {
        var trigger = $(parentChapter).find('.icon-triangle')[0];
        if(trigger) {
          trigger.click();
        }
      });
    }

    setTimeout( function() {

      var activeElement = $('.chapter.active');
      var activeElementClosestParent = activeElement.closest('.chapters-wrapper');
      var activeElementClosestTrigger = activeElementClosestParent.prev();
      var bookSummaryElement = activeElement.closest('.book-summary');
      if(!activeElementClosestTrigger.hasClass('expanded')) {
        setTimeout(function() {
          findClosestChapter(activeElement);
          activeElementClosestTrigger.click();
          var activeChapterBoundingClientRect = activeElement[0].getBoundingClientRect();
          bookSummaryElement[0].scrollTop = activeChapterBoundingClientRect.top;
        }, 1000);
      }

      diag('page.change event ... e: ', e);

      // locate our top level sections
      // ... NOTE: this must be inside our event processor.
      //           - We cannot perform this once statically,
      //           - BECAUSE, each page change in gitbook is a FULL page change!
      //             causing a fresh new DOM to be rendered!
      var $topNav = $('ul.summary');
      diag('$topNav: ', $topNav);
      var $topSections = $topNav.children('li.chapter').children('ul.articles');
      diag('$topSections length(' + $topSections.length + ') ... ', $topSections);

      // locate activeChapter
      // ... there will always be only one (defaults to the first)
      // ... this is what is  visually highlighted
      // ... can be at any depth
      // >>> KEY:
      //      <li class="chapter"> at a file break (can be lower down)
      var $activeChapter = $('li.chapter.active'); // various renditions ... all seem to work
      // var $activeChapter = $('li.active');
      // var $activeChapter = $('.active');
      diag('$activeChapter length(' + $activeChapter.length + ') ... ', $activeChapter);

      // locate our active top-level section
      var $activeTopSection = locateActiveTopSection($activeChapter);
      diag('$activeTopSection length(' + $activeTopSection.length + ') ... ', $activeTopSection);

      // for our animation to work correctly, we must baseline our
      // prior section visibility (INSTANTLY - i.e. no animation)
      // ... BECAUSE, each page change in gitbook is a FULL page change,
      //     the entire page is re-displayed, so a page change ALWAYS
      //     starts out with leftNav expanded!!!
      baselinePriorVisibility($topSections);

      // when necessary, leave the last section expanded
      // ... by simply no-oping
      if (config.sticky &&                  // when configured to be sticky -AND-
        $activeTopSection.length === 0) { // the current active section has NO sub-content
        return;
      }

      // sync our left-nav to display ONLY the active top section
      // ... FINALLY: this is what we are here for :-)
      // ... we itterate over each, applying show/hide directives
      //     as opposed to sledge hammer
      //        a: hide all top,
      //        b: show active
      //        ... this has a MUCH better visual
      // ... we also use animation - THANK YOU jQuery!!
      var activeTopSectionElm = $activeTopSection.get(0); // undefined if out-of-bounds
      $topSections.each( function(indx, topSectionElm) {
        if (topSectionElm === activeTopSectionElm) {
          setVisible(topSectionElm, 'show');
        }
        else {
          setVisible(topSectionElm, 'hide');
        }
      });

    }, 0); // TIMEOUT for next event tick
  };
  pageChangeHandler();
  gitbook.events.bind("page.change", pageChangeHandler);

  // cache retaining current visibility of sections
  // - NOTE: We cannot retain this state in the DOM
  //         via jQuery.data()
  //         BECAUSE, each page change in gitbook is a FULL page change!
  //         In other words, the entire page is re-displayed
  //         so a page change ALWAYS starts out with leftNav expanded!!!
  //         THEREFORE: we maintain our own cache, keyed by the data-path
  //                    maintained in the DOM by gitbook.
  var visibilityCache = {
    /* dynamically maintained ... ex:
       elmSectionKey:  'show'/'hide'
       ==============  =============
       'usage.html':   'show'
       'detail.html':  'hide'
     */
  };

  // baseline our prior section visibility (INSTANTLY - i.e. no animation)
  // ... BECAUSE, each page change in gitbook is a FULL page change,
  //     the entire page is re-displayed, so a page change ALWAYS
  //     starts out with leftNav expanded!!!
  function baselinePriorVisibility($topSections) {
    $topSections.each( function(indx, topSectionElm) {
      var sectionKey        = getSectionKey(topSectionElm);
      var sectionVisibility = getCurSectionVisibility(sectionKey);
      if (sectionVisibility === 'show') {
        $(topSectionElm).show(); // NO animation on baseline
      }
      else {
        $(topSectionElm).hide(); // NO animation on baseline
      }
    });
  }

  // return the persistent section key for the supplied elmSection (ex: "detail.html")
  // ... sample elmSection DOM expection (from gitbook generation of leftNav)
  //     <ul>
  //       <li data-path="detail.html"> ... we hang our hat on this data-path (maintained by gitbook)
  //       <li data-path="detail.html#someHash">
  //       <li data-path="detail.html#etc">
  //     </ul>
  function getSectionKey(elmSection) { // 'show'/'hide'
    var domKey     = 'data-path'; // maintained by gitbook (something unique to hang our hat on)
    var sectionKey = elmSection.childNodes[1].getAttribute(domKey); // HACK: a bit vulnerable ... [0] is a text node, [1] is ... ex: 'detail.html'
    return sectionKey;
  }

  // return the current visibilitys of the supplied sectionKey (from our cache)
  function getCurSectionVisibility(sectionKey) { // 'show'/'hide'
    var curVisibility  = visibilityCache[sectionKey];
    return curVisibility || 'hide'; // we force the default/initial state bo be hidden (with our baseline process - an initial display will collapse all sections - but the active)
  }

  // convenience routine to show/hide supplied elmSection
  // ... keeping track of current visibility state
  //     - resulting in a MUCH better visual
  function setVisible(elmSection, directive) {

    var sectionKey           = getSectionKey(elmSection);
    var curSectionVisibility = getCurSectionVisibility(sectionKey);

    var diagMsg = 'setVisible(elmSection: ' + sectionKey + ', directive: ' + directive + ') ... curSectionVisibility: ' + curSectionVisibility + ' ... ';

    // apply the visibility directive, when needed (based on cached current visibility)
    if (directive === 'show') {
      if (curSectionVisibility !== 'show') {          // when out-of-sync
        $(elmSection).show(config.animationDuration); // ... change visiblity WITH animation
        visibilityCache[sectionKey] = 'show';         // ... maintaining our cache
        diagMsg += 'SHOWING';
      }
      else {
        diagMsg += 'no-oping';
      }
    }
    else {
      if (curSectionVisibility !== 'hide') {          // when out-of-sync
        $(elmSection).hide(config.animationDuration); // ... change visiblity WITH animation
        visibilityCache[sectionKey] = 'hide';         // ... maintaining our cache
        diagMsg += 'HIDING';
      }
      else {
        diagMsg += 'no-oping';
      }
    }

    diag(diagMsg);
  }

  // locate top level chapter
  // ... drill up till parent is <ul class="summary">
  function topChapter($elm) {
    // normally the initial supplied $elm is what we want
    // ... however, when a sub-section is part of a separate file (e.g. api.md under coreApi.md)
    //     then the initial $elm is lower, and we must drill up (recursively)
    if ($elm.parent().attr('class') !== 'summary' &&
      $elm.length !== 0) {
      diag('topChapter UP');
      return topChapter($elm.parent());
    }
    else {
      diag('topChapter USE: ', $elm);
      return $elm;
    }
  }

  // locate our active top section
  function locateActiveTopSection($activeChapter) {
    // drill up till parent is <ul class="summary">
    var $topChapter = topChapter($activeChapter);

    // resolve chapter into section (if any)
    // ... will be an item of 0 length if there is no section
    return $topChapter.children('ul.articles');
  }

  // convenience diagnostic logger
  function diag(msg, obj) {
    return; // comment out to enable
    console.log('Manage LeftNav: ' + msg,
      obj ? obj : '');
  }
});
