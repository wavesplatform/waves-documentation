jQuery(document).ready(function () {
	var $ = jQuery;
	var currentTreeState = {};
	var collapsedState = 'collapsed';
	var expandedState = 'expanded';
	var animationTime = 200;
	var pathToGithubFile = 'https://github.com/wavesplatform/waves-documentation/blob/master/';
	
	var attachChapterClickHandler = function ($collapseIcon) {
		$collapseIcon.on('click', function (e) {
			var $this = $(this);
			var anchorEl = $this.parent();
			var _key = getAbsoluteUrl(anchorEl);
			var parentEl = $this.parents('.chapter:first').find('>.articles');
			var isCollapsed = anchorEl.hasClass(collapsedState);
			
			
			if (isCollapsed) {
				anchorEl
					.removeClass(collapsedState)
					.addClass(expandedState);
				parentEl.show(animationTime);
				currentTreeState[_key] = expandedState;
			} else {
				anchorEl
					.removeClass(expandedState)
					.addClass(collapsedState);
				parentEl.hide(animationTime);
				currentTreeState[_key] = collapsedState;
			}
			e.preventDefault();
			return false;
		});
	};
	
	var attachHeaderClickHandlers = function ($collapseIcon) {
		$collapseIcon.parent().on('click', function () {
			var $headerEl = $(this);
			var _key = $headerEl.text();
			var itemsEl = $headerEl.next('.chapters-wrapper:first');
			var isCollapsed = $headerEl.hasClass(collapsedState);
			
			
			if (isCollapsed) {
				$headerEl
					.removeClass(collapsedState)
					.addClass(expandedState);
				itemsEl.show(animationTime);
				currentTreeState[_key] = expandedState;
			} else {
				$headerEl
					.removeClass(expandedState)
					.addClass(collapsedState);
				itemsEl.hide(animationTime);
				currentTreeState[_key] = collapsedState;
			}
		});
	};
	
	var wrapChapters = function ($header, level) {
		var $wrapper = $('<div class="chapters-wrapper"></div>');
		$('[data-level^="' + level + '."]').each(function (i, el) {
			var $chapter = $(el);
			if ($chapter.data('level').toString().split('.').length === 2) {
				$chapter.appendTo($wrapper)
			}
		});
		$header.after($wrapper);
	};
	
	var expandArticlesOnClick = function ($title) {
		$title.on('click', function () {
			$title.find('.icon-triangle').click();
		});
	};
	
	var getAbsoluteUrl = function ($a) {
		return $a.get(0).href.trim();
	};
	
	var buildCurrentTreeState = function () {
		
		var $collapseIcon = $(
			'<div class="icon-triangle">' +
			'<i class="octicon octicon-triangle"></i>' +
			'</div>');
		
		$('.header').each(function (index) {
			var $header = $(this);
			var _key = $header.text().trim();
			var $icon = $collapseIcon.clone();
			
			wrapChapters($header, index + 1);
			$header.prepend($icon);
			if (currentTreeState[_key] === expandedState) {
				$header.addClass(expandedState);
				$header.next('.chapters-wrapper').show(0);
			} else {
				if (index > 1 || (index < 2 && currentTreeState[_key] === collapsedState)) {
					$header
						.addClass(collapsedState)
						.next('.chapters-wrapper')
						.hide(0);
				} else {
					$header.addClass(expandedState);
				}
			}
			attachHeaderClickHandlers($icon);
		});
		
		$('.articles').each(function () {
			var $articles = $(this);
			var $title = $articles.prev();
			var _key = getAbsoluteUrl($title);
			var $icon = $collapseIcon.clone();
			attachChapterClickHandler($icon);
			expandArticlesOnClick($title);
			$title.prepend($icon);
			
			if (currentTreeState[_key] === expandedState) {
				$title
					.addClass(expandedState)
					.removeClass(collapsedState);
				$articles.show(0);
				currentTreeState[_key] = expandedState;
			} else {
				$title
					.addClass(collapsedState)
					.removeClass(expandedState);
				$articles.hide(0);
				currentTreeState[_key] = collapsedState;
			}
		});
	};
	
	
	var pageHasChanged = gitbook.page.hasChanged;
	gitbook.page.hasChanged = function (e, t, n) {
		pageHasChanged(e, t, n);
		buildCurrentTreeState();
		addBranding();
		addLinkToGithub();
	};
	
	buildCurrentTreeState();
	
	
	/**/
	var addBranding = function () {
		var $bookSummary = $('.book-summary');
		var $logo = $('<div class="sidebar-brand">' +
			'<a href="/"><img class="brand-logo" src="/_theme/brand-logo/waves-docs-logo.png"\n' +
			'     srcset="/_theme/brand-logo/waves-docs-logo@2x.png 2x,\n' +
			'             /_theme/brand-logo/waves-docs-logo@3x.png 3x"\n alt="Waves Docs"></a>' +
			'</div>');
		$bookSummary.prepend($logo);
	};
	addBranding();
	
	
	/*Another important function*/
	var addLinkToGithub = function () {
		var path = pathToGithubFile + gitbook.page.getState().file.path;
		var $button = $('<a class="btn pull-right" style="text-transform: none;" aria-label="" target="_blank" href="' + path + '"><i class="fa fa-github"></i> Open on Github</a>');
		$('.dropdown.pull-left.font-settings').before($button);
	}
	addLinkToGithub();
});