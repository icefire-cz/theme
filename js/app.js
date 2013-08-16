// Javascript for the IceFireBootstrap theme.
// Requires jQuery > v1.7.2 in order to function properly

jQuery(document).ready(function() {

	$('html').show();

	// Autosize textareas
	$('textarea.TextBox').livequery(function() {
		$(this).autosize();
	});

	// Stop auto drafts
	$.fn.autosave = function(opts) {
		return;
	};

	// Smooth Scroll to Top
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 250);
		return false;
	});

	// Correctly position markup help
	$('.CommentForm .Buttons').each(function() {
		var $markuphelp = $(this).find('.MarkupHelp');
		var $content = $markuphelp.outerHTML();
		var $backbutton = $(this).find('.Back');
		$markuphelp.remove();
		$backbutton.after($content);
	});

	// Enable Popovers and Tooltips
	$("a[rel=popover]").popover();
	$("a[rel=tooltip]").tooltip();

	// Make Category selectors utilize Chosen
	$('.Category select').each(function() {

		// Trim the trailing spaces of all options
		// and make sure only clean spaces are used
		$(this).find('option').each(function() {
			var $text = $.trim($(this).text());
			$(this).contents().replaceWith($text.replace(/(\u00a0)/g,' '));
		});

		// Turn option[disabled] into an optgroup header
		// and sort options into newly created optgroup
		$(this).find('option[disabled]').each(function() {
			var $label = $(this).text();
			var $options = $(this).nextUntil('option[disabled]');
			var $optionsHtml = $('<option />').append($($options)).html();
			$(this).replaceWith($('<optgroup label="'+$label+'">'+$optionsHtml+'</optgroup>'));
		});

		$(this).chosen();

	});

	// Non-livequery based markup changes
	// ---------------------------------

	// Fix an annoying bug
	$('body').removeClass('thumbnail');

	// Buttons
	$('.Button').toggleClass('Button btn');
	$('.NavButton').toggleClass('NavButton btn');
	$('a.Cancel, .Danger').addClass('btn btn-danger');
	$('.Primary.btn, .DiscussionButton, .NewDiscussion').addClass('btn-primary');
	$('.ButtonGroup.Big .btn').addClass('btn-large');

	// Checkboxes and radio buttons
	$('.CheckBoxLabel').toggleClass('CheckBoxLabel checkbox');
	$('.RadioLabel').toggleClass('RadioLabel radio');

	// Labels and Badges
	$('.Tag').addClass('label');
	$('.Tag-Closed').addClass('label-important');
	$('.Tag-Announcement').addClass('label-info');
	$('.Alert').addClass('badge badge-important');
	$('.HasNew').addClass('badge badge-warning');

	// Alerts
	$('.AlertMessage, .InfoMessage').addClass('alert');
	$('.CasualMessage').addClass('alert alert-info');
	$('.Count').addClass('badge badge-info');
	$('.WarningMessage').addClass('alert alert-danger');

	// Pagination
	$('.NumberedPager').each(function() {
		$(this).addClass('btn-group');
		$(this).find('a, span').addClass('btn btn-small');
		$(this).find('.Highlight').addClass('active');
	});

	// Flyout Menus
	$('.MenuItems').toggleClass('MenuItems dropdown-menu');
	$('.FlyoutMenu').addClass('dropdown-menu');

	// Navigation
	$('.navbar form').each(function() {
		$(this).addClass('navbar-search pull-left');
		$(this).find('input').addClass('search-query span2').attr('placeholder','Search...');
		$(this).find('input[type="submit"]').remove();
	});
	$('.FilterMenu, .PanelInfo').each(function() {
		$(this).toggleClass('nav nav-list');
		$(this).find('.Active').toggleClass('Active active');
	});

	// Grouped Buttons
	$('.ButtonGroup').each(function() {
		$(this).addClass('btn-group');
		$(this).find('.btn').addClass('btn-primary');
		$(this).find('.Handle').each(function() {
			$(this).addClass('dropdown-toggle').append('<span class="caret"></span>');
		});
	});
	$(document).delegate('.ButtonGroup > .Handle', 'click', function() {
		var buttonGroup = $(this).parents('.ButtonGroup');
		if (buttonGroup.hasClass('open')) {
			$('.ButtonGroup').removeClass('open');
		} else {
			$('.ButtonGroup').removeClass('open');
			buttonGroup.addClass('open');
		}
		return false;
	});

	// Pages
	$('.Entry').each(function() {
		$(this).find('#panel').remove();
		$(this).find('#content').toggleClass('span9 span6 offset3');
	});
	$('body.Conversations.add #panel, body.Vanilla.Post #panel').remove();
	$('body.Conversations.add #content, body.Vanilla.Post #content').toggleClass('span9 span10 offset1');

	// Icons
	$('.Note.Closed').livequery(function() {
		$(this).prepend('<i class="icon-lock"></i> ');
	});

	// Buttons
	$('.Button').livequery(function() {
		$(this).toggleClass('Button btn');
	});
	$('a.Cancel').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.Cancel').find('a').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.ForgotPassword').livequery(function() {
		$(this).addClass('btn btn-danger');
	});
	$('.Primary.btn, .DiscussionButton').livequery(function() {
		$(this).addClass('btn-primary');
	});

	// Checkboxes and radio buttons
	$('.CheckBoxLabel').livequery(function() {
		$(this).toggleClass('CheckBoxLabel checkbox');
	});
	$('.RadioLabel').livequery(function() {
		$(this).toggleClass('RadioLabel radio');
	});

	// Pagination
	$('.MorePager').livequery(function() {
		$(this).find('a').addClass('btn btn-small btn-block');
	});

	// Flyout Menus
	$('.MenuItems').livequery(function() {
		$(this).toggleClass('MenuItems dropdown-menu');
	});
	$('.FlyoutMenu').livequery(function() {
		$(this).addClass('dropdown-menu');
	});
	$('.ac_results').livequery(function() {
		$(this).find('ul').addClass('typeahead dropdown-menu');
	});

	// Navigation
	$('.dropdown-menu ul li hr').livequery(function() {
		$(this).parent().addClass('divider');
		$(this).remove();
	});

	// Grouped Buttons
	$('.ButtonGroup').livequery(function() {
		$(this).find('.Dropdown').addClass('dropdown-menu');
	});

	// Plugin specific Javascript
	// ------------------

	// QnA plugin
	$('.DataBox-Comments .QnA-Item-Accepted').remove();
	$('.QnA-Tag-Answered, .QnA-Tag-Accepted').addClass('label-success');

});

// Recaptcha
var RecaptchaOptions = {
	theme : 'clean'
};

// OuterHTML function
jQuery.fn.outerHTML = function(s) {
	return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
};

// Recaptcha
var RecaptchaOptions = {
	theme : 'clean'
};

// OuterHTML function
jQuery.fn.outerHTML = function(s) {
	return s
		? this.before(s).remove()
		: jQuery("<p>").append(this.eq(0).clone()).html();
};

// Detect clicks outside elements
(function(jQuery) {
	jQuery.fn.clickOutside = function(callback) {
		var outside = 1, self = $(this);
		self.cb = callback;
		this.click(function() {
			outside = 0;
		});
		$(document).click(function() {
			outside && self.cb();
			outside = 1;
		});
		return $(this);
	}
})(jQuery);
