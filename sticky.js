/* sticky */
(function(e,p){e.extend({lockfixed:function(a,b){b&&b.offset?(b.offset.bottom=parseInt(b.offset.bottom,50),b.offset.top=parseInt(b.offset.top,10)):b.offset={bottom:100,top:0};if((a=e(a))&&a.offset()){var n=a.css("position"),c=parseInt(a.css("marginTop"),10),l=a.css("top"),g=a.offset().top,h=!1;if(!0===b.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS ([0-9])_/)||navigator.userAgent.match(/\bAndroid ([0-9])\./i))h=!0;e(window).bind("scroll resize orientationchange load lockfixed:pageupdate",
a,function(k){if(!h||!document.activeElement||"INPUT"!==document.activeElement.nodeName){var d=0,d=a.outerHeight();k=a.outerWidth();var m=e(document).height()-b.offset.bottom,f=e(window).scrollTop();"fixed"!=a.css("position")&&(g=a.offset().top,c=parseInt(a.css("marginTop"),10),l=a.css("top"));f>=g-(c?c:0)-b.offset.top?(d=m<f+d+c+b.offset.top?f+d+c+b.offset.top-m:0,h?a.css({marginTop:parseInt((c?c:0)+(f-g-d)+2*b.offset.top,10)+"px"}):a.css({position:"fixed",top:b.offset.top-d+"px",width:k+"px"})):
a.css({position:n,top:l,width:k+"px",marginTop:(c?c:0)+"px"})}})}}})})(jQuery);
