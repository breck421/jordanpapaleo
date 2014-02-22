$("document").ready(function(){
	BindEvents();
	var switcher = new ImageSwitcher();
	switcher.SeedImageGroups();
});

function BindEvents()
{
	$("a.stop").click(function(){
		ImageSwitcher.prototype.Stop();
	});
}

var ImageSwitcher = function() {}

//array of images that waiting to show
ImageSwitcher.prototype.queuedImages = [];

//array of images that have already shown
ImageSwitcher.prototype.usedImages = [];

//array of images that are currently visible
ImageSwitcher.prototype.activeImages = [];

//array of images that are new to the active state
//for use when ensuring older images are swapped first
ImageSwitcher.prototype.newImages = [];

ImageSwitcher.prototype.SeedImageGroups = function()
{
	var that = this;

	$("div.imageHolder img").each(function(){
		that.queuedImages.push(this);
	});

	$("div.imageGallery img").each(function(){
		that.activeImages.push(this);
	});


	this.Start();
}

ImageSwitcher.prototype.Start = function()
{
	var that = this;

	window.setInterval(function(){
		that.Switch();
	}, 1000);
}

ImageSwitcher.prototype.Stop = function()
{	
	//console.log("STOPPED");
}

ImageSwitcher.prototype.Switch = function()
{
	var activeIndex = this.SelectRandom(this.activeImages);
	var newIndex = this.SelectRandom(this.queuedImages);

	//if there are no more imagse in queue, we want to continue with the used images
	if(this.queuedImages.length == 0)
	{
		// debugger;
		this.queuedImages = this.usedImages;
		this.usedImages = [];
	}

	//if
	if(this.activeImages.length == 0)
	{
		// debugger;
		this.activeImages = this.newImages;
		this.newImages = [];
	}

	// console.log("active", this.activeImages[activeIndex]);
	// console.log("queued", this.queuedImages[newIndex]);

	this.ChangeImage(this.activeImages[activeIndex], this.queuedImages[newIndex]);
	this.UpdateImageGallery(activeIndex, newIndex);
}

ImageSwitcher.prototype.ChangeImage = function(imgFrom, imgTo)
{
	var $span = $(imgFrom).parent();
	
	$span.fadeOut(1500, function(){
		$span.children().replaceWith(imgTo);
		$span.fadeIn(1000);
	});

	//$span.children().replaceWith(imgTo);
}

ImageSwitcher.prototype.UpdateImageGallery = function(activeIndex, newIndex)
{
	//use given index and take one,
	var newImage = this.queuedImages.splice(newIndex, 1)[0];
	var usedImage = this.activeImages.splice(activeIndex, 1)[0];

	// console.log("newImage", newImage);
	// console.log("usedImage", usedImage);
	
	this.usedImages.push(usedImage);
	this.newImages.push(newImage);

	// console.log("active", this.activeImages.length);
	// console.log("not active", this.queuedImages.length);
	// console.log("used", this.usedImages.length);
	// console.log("---------------");
}

ImageSwitcher.prototype.SelectRandom = function(arr)
{
	return Math.floor(Math.random() * arr.length);
}


