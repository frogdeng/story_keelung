
// JavaScript Document

//------------------------------ HolidayPack V3	------------------------------------------------------------
var Allwidth=720;
var Allheight=920;

				
function openLightBox(URL,width,height){
	
		Allwidth=width;
		Allheight=height +5;
			$.modal("<iframe src=\"" + URL + "\" id=\"iframeTest\" SCROLLING=\"NO\" frameborder=\"0\" name=\"iframeTest\" height=\"" + height + "px\" width=\""  + width + "px\" style=\"border: 0px solid #000000;\" />", {onOpen:opencomparemodelDemo, onClose:modalCloseAll});
		}

function viewVideoDetail(nFileId,length,type){
		if($("#lock").val() == 0){
		$("#scrollLock").val(1);
		$("#nFileId").val(nFileId);
		history.pushState("","","/prog/event/common/event-view-paging-action.do?eventID=3414&szForward=/stat/events/enu/2014/Q3/PDVD_showdown/view_vote.jsp&nFileId=" + nFileId);
		var height = length;
		
		Allwidth=720;
		var width=720;
		Allheight=height;
		var URL = "/prog/event/common/event-video-detail-action.do?eventID=3414&szForward=/stat/events/enu/2014/Q3/PDVD_showdown/lightbox_view.jsp&&type="+type + "&nFileId=" + nFileId;
			$.modal("<iframe src=\"" + URL + "\" id=\"iframeTest\" SCROLLING=\"NO\" frameborder=\"0\" name=\"iframeTest\" height=\"" + height + "px\" width=\""  + width + "px\" style=\"border: 0px solid #000000;\" />", {onOpen:opencomparemodelAll, onClose:modalCloseAll});
		}
}
function votingEmail(nFileId){

		
		var height = 317;

		Allwidth=720;
		var width=720;
		Allheight=height;
		var URL = "/stat/events/enu/2014/Q3/PDVD_showdown/email_voting.jsp?nFileId=" + nFileId;
			$.modal("<iframe src=\"" + URL + "\" id=\"iframeTest\" SCROLLING=\"NO\" frameborder=\"0\" name=\"iframeTest\" height=\"" + height + "px\" width=\""  + width + "px\" style=\"border: 0px solid #000000;\" />", {onOpen:opencomparemodelAll3, onClose:modalCloseAll});
			//window.open(URL, '_blank', 'width=750,height=350,resizable=no');
		}		
		
function votingEmailLightBox(nFileId){

		
		var height = 317;

		Allwidth=720;
		var width=720;
		Allheight=height;
		var URL = "/stat/events/enu/2014/Q3/PDVD_showdown/email_voting.jsp?type=1&nFileId=" + nFileId;
			//$.modal("<iframe src=\"" + URL + "\" id=\"iframeTest\" SCROLLING=\"NO\" frameborder=\"0\" name=\"iframeTest\" height=\"" + height + "px\" width=\""  + width + "px\" style=\"border: 0px solid #000000;\" />", {onOpen:opencomparemodelAll3, onClose:modalCloseAll});
			window.open(URL, '_blank', 'width=750,height=350,resizable=no');
		}	

function youtube(youtubeId){
			
			$.modal("<iframe src=\"http://www.youtube.com/embed/" + youtubeId + "?wmode=opaque&autoplay=1\" id=\"iframeTest\" SCROLLING=\"YES\" frameborder=\"0\" name=\"iframeTest\" height=\"478px\" width=\"804px\" style=\"border: 0px solid #000000;\" />", {onOpen:openAll, onClose:modalCloseAll2});
		}		
		
		function openAll(dialog) {
			
			var left = (document.documentElement.clientWidth - 802 ) / 2 - 8;
			var top = $(document).scrollTop() + 120;
			overlay_dialogAll2(dialog).container.css({top:top + "px", left:left+"px", height:'488px',width: '812px', overflow: 'hidden', padding: '35px 0px 0px 5px', position: 'absolute'});
		}
		
		function opencomparemodelAll(dialog) {
			var left = ($(window).width()- Allwidth ) / 2;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			left = left+40;
			}
			var top = $(document).scrollTop();
		
			 if($(window).height() - Allheight > 0){top = ($(window).height() - Allheight) / 2 + top;}
			else {top = top + 80;}
			
			overlay_dialogAll(dialog).container.css({top:top+"px", left:left+"px", height: Allheight + "px",width: Allwidth + "px", overflow: 'hidden', padding: '0px 0px 0px 0px', position: 'absolute'});
		}
		
		function opencomparemodelAll3(dialog) {
			var left = ($(window).width()- Allwidth ) / 2;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			left = left+40;
			}
			var top = $(document).scrollTop();
		
			 if($(window).height() - Allheight > 0){top = ($(window).height() - Allheight) / 2 + top;}
			else {top = top + 80;}
			
			overlay_dialogAll(dialog).container.css({top:top+"px", left:left+"px", height: Allheight + "px",width: Allwidth + "px", overflow: 'hidden', padding: '0px 0px 0px 0px', position: 'absolute'});
		}
		
	function opencomparemodelDemo(dialog) {
			var left = ($(window).width()- Allwidth ) / 2;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			left = left+40;
			}
			var top = $(document).scrollTop();
		
			
			 if($(window).height() - Allheight > 0){top = ($(window).height() - Allheight) / 2 + top;}
			else {top = top + 80;}
			
			overlay_dialogAll(dialog).container.css({top:top+"px", left:left+"px", height: Allheight + "px",width: Allwidth + "px", overflow: 'hidden', padding: '0px 0px 0px 0px', position: 'absolute'});
		}
		
	function opencomparemodelText(dialog) {
			var left = ($(window).width()- Allwidth ) / 2;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			left = left+40;
			}
			var top = $(document).scrollTop();
		
			 top = ($(window).height() - 300) / 2 + top;
			
			overlay_dialogAll(dialog).container.css({top:top+"px", left:left+"px", height: Allheight + "px",width: Allwidth + "px", overflow: 'hidden', padding: '0px 0px 0px 0px', position: 'absolute'});
		}
		
		
		
		function overlay_dialogAll(dialog){
			 $("body").css("overflow", "hidden");
			
			 //document.body.style.overflow="hidden";
			dialog.overlay.fadeIn("fast", function () {
				dialog.container.fadeIn("fast", function () {
					dialog.data.hide().slideDown("fast");
				});
			});
			return dialog;
		}
		
		function modalCloseAll(dialog) {
			 $("body").css("overflow", "auto");
			 
			 //document.body.style.overflow="visible";
			dialog.data.fadeOut("fast", function () {
				dialog.container.hide("fast", function () {
					dialog.overlay.slideUp("fast", function () {
					$("#lock").val(0);
					$("#scrollLock").val(0);
					$.modal.close();
					});
				});
			});
		}
		
		
		function overlay_dialogAll2(dialog){
			// $("body").css("overflow", "hidden");
			
			 //document.body.style.overflow="hidden";
			dialog.overlay.fadeIn("fast", function () {
				dialog.container.fadeIn("fast", function () {
					dialog.data.hide().slideDown("fast");
				});
			});
			return dialog;
		}
		
		function modalCloseAll2(dialog) {
			// $("body").css("overflow", "auto");
			 
			 //document.body.style.overflow="visible";
			dialog.data.fadeOut("fast", function () {
				dialog.container.hide("fast", function () {
					dialog.overlay.slideUp("fast", function () {
					$("#lock").val(0);
					$("#scrollLock").val(0);
					$.modal.close();
					});
				});
			});
		}
		
var containerId = 'simplemodal-container';
var iframId = 'iframeTest';

function resizeLightbox(height, width) {
	
	var top = $(document).scrollTop();
	
	 if($(window).height() - height > 0){top = ($(window).height() - height) / 2 + top;}
	 else {top = top + 80;}
	//alert(top + "/" + $(window).height() + "/" + height);
	$('#' + iframId, parent.document).css({height:height + 'px'});
	$('#' + containerId, parent.document).css({height:height + 'px'});
	
	$('#' + iframId, parent.document).css({top:top + 'px'});
	$('#' + containerId, parent.document).css({top:top + 'px'});
	
	$('#' + iframId, parent.document).css({width:width + 'px'});
	$('#' + containerId, parent.document).css({width:width + 'px'});
}	

function upLightbox() {
	var top=180;
	
	$('#' + iframId, parent.document).css({top:top + 'px'});
	$('#' + containerId, parent.document).css({top:top + 'px'});
	
}	