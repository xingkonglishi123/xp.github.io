$.fn.tab=function(){
	this.each(function(index){
		//alert(this);--->tihs-->div
		//$('.play').eq(0)
		var aBtn=$(this).find('ol li');
		var oUl=$(this).find('ul');
		var aLi=$(this).find('ul li');
		aBtn.on('click',function(){
			aBtn.removeClass('active').eq($(this).index()).addClass('active');
			alert($(this).index());
			oUl.stop().animate({top:-$(this).index()*aLi.eq(0).outerHeight()+'px'});
		});
	});
};