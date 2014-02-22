$(document).ready(function(){
    var gall = new Gallery(588, 295);

    var galSwitch = setInterval(function(){
        gall.Controller();
    }, 5000);

});


var Gallery = function(mainWidth, previewWidth){
    this.$widget = $("div.imageGallery");
    this.$mainImageCont = this.$widget.find("div.mainImage");
    this.$previewImageCont = this.$widget.find("div.previewImage");
    this.$queuedLarge = this.$widget.find("div.previewImage");
    this.totalImages = $("img.imglarge").length;
    this.curentImage = 1;
    this.filePath = this.GetFilePath();
}




Gallery.prototype.BindEvents = function()
{
    var self = this;

    this.$widget.find("a.btnNext").on("click", function(){
        self.Controller();
    });
}

Gallery.prototype.GetFilePath = function()
{
    var $img = this.$mainImageCont.find("img.visible");
    var source = $img.attr("src");
    var parts = source.split("/");
    
    parts.pop();

    return parts.join("/");
}

Gallery.prototype.GetImageNum = function($el)
{
    var imageNum = $el.find("img.queued").attr("data-img-num");

    return imageNum;
}

Gallery.prototype.Controller = function()
{
    //get image number
    var queuedMainImageNum = parseInt(this.GetImageNum(this.$mainImageCont));
    var queuedPreviewImageNum = parseInt(this.GetImageNum(this.$previewImageCont));

    //Set the queued image
    var mainImgNext = this.SetQueuedImage(queuedMainImageNum);
    var previewImgNext = this.SetQueuedImage(queuedPreviewImageNum);

    this.AnimateImage("main", mainImgNext, 589);
    this.AnimateImage("preview", previewImgNext, 296);
}

Gallery.prototype.SetQueuedImage = function(imgNumber)
{
    if (imgNumber >= this.totalImages)
    {
        return 1;
    }
    else {
        return imgNumber + 1;
    }
}

Gallery.prototype.AnimateImage = function(container, i, width) 
{
    var self = this;
    var $imgVisible;
    var $imgQueued;
    var imgSrc;

    if(container == "main")
    {
        $imgVisible = this.$mainImageCont.find("img.visible");
        $imgQueued = this.$mainImageCont.find("img.queued");
        imgSrc = self.filePath + "/imageLarge" + i + ".jpg";
    }
    else if (container == "preview") {
        $imgVisible = this.$previewImageCont.find("img.visible");
        $imgQueued = this.$previewImageCont.find("img.queued");
        imgSrc = self.filePath + "/imageSmall" + i + ".jpg";
    }
    else {
        return;
    }

    $imgVisible.animate({
        left: '-=' + width
    }, 1000, function() {
        var $this = $(this);

        $this.removeClass("visible").addClass("queued").css({left: width + "px"});
        $this.attr({
        "src": imgSrc,
        "data-img-num": i
        });
    });

    $imgQueued.animate({
        left: '-=' + width
    }, 1000, function() {
        $(this).removeClass("queued").addClass("visible");
    });
}