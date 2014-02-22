$(document).ready(function(){
	$window = $(window);
	bindEvents(domEventMap);
	parallaxController($window);
});// [end]

//event map
var domEventMap = {
	"a.scrollLink" : {
		"click" : {
			handler: function(e) {
				scrollToLink(e.currentTarget);
			}
		}
	}
}// [end]

//binds dom events
var bindEvents = function(map) {
	for (var address in map) {
		for (var action in map[address]) {
			$(address).live(action, map[address][action].handler);
		}
	}
}// [end]

//applies the scroll to effect on links
function scrollToLink(linkEl) {
	
	var dataTarget = linkEl.getAttribute("data-target");
	$(window).scrollTo($("#" + dataTarget), 1000, {easing:'swing'});
}//[end]

//coordinates the parallax dom events
function parallaxController($window) {
	var isDataSet = getParallaxProperties();

	if (isDataSet) {
		setParallaxEvent($window);	
	}
}// [end]

//Uses HTML5 data-type attribute to retireve and store parallax properties from the page
function getParallaxProperties() {

	// Cache parallax data for each data-type attribute
	$("[data-type]").each(function() {
		var $this = $(this);
		
		$this.data(this, "yoffset", 	$this.attr("data-yoffset"));
		$this.data(this, "xpos", 		$this.attr("data-xpos"));
		$this.data(this, "speed", 		$this.attr("data-speed"));
	});

	return true;
}// [end]

//details the events that will occur in the scroll events
function setParallaxEvent($window) {

	//All parallax elements exist within the background sections
	$("section[data-type='background']").each(function(){
		var $self = $(this);
		
		//on scroll
		$window.scroll(function() {
			var isViewable = isInViewPort($window, $self);

			// If this section is in viewport
			if (isViewable) {
				var yPos = -($window.scrollTop() / $self.data("speed") + $self.data("yoffset"));
				var coords = $self.data("xpos") + " " + yPos + "px";
				
				$self.css({
					backgroundPosition: coords
				});
				
				engageParallax("otherStuff");
				engageParallax("moreStuff");
				engageParallax("article");

			}; // [end] in viewport
		}); // [end] scroll event
	});	// [end] data-type:background	
}// [end]

//Determines whether a page element is in the view port or not
function isInViewPort($domWindow, $domEl) {
	var viewable = false;
	
	var scrollTop = $domWindow.scrollTop();
	var windowHeight = $domWindow.height();

	var elHeight = $domEl.height();
	var offsetCoords = $domEl.offset();
	var elTopOffset = offsetCoords.top;

	var currWinPosBottom = scrollTop + $window.height();
	var elBottomPos = elTopOffset + elHeight;

	//if window bottom position is below the element top position
	// &&
	//the element bottom is below the scroll top position
	if (currWinPosBottom > elTopOffset && elBottomPos > scrollTop) {
		viewable = true;
	}

	return viewable;
}// [end]

//Takes a data-type element and applies a parallax effect to it
function engageParallax(otherStuff) {
	$("[data-type='" + otherStuff + "']").each(function() {
		var $otherStuff = $(this);
		var speed = $otherStuff.data("speed");
		var scrollTop = $window.scrollTop();
		var yOffset = $otherStuff.data("yoffset") || 0; ;
		var xpos = $otherStuff.data("xpos") || 0;

		//negative value to scroll up
		var yCoord = -(scrollTop / speed) + yOffset;
		var xCoord = xpos;
		
		$otherStuff.css({ 
			top: yCoord,
			left: xCoord 
		});													
	});	
}// [end]