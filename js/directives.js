/*global $:false, jQuery:false */

'use strict';

app.directive('scrollToCatalog', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var windowObj = $(window);

           var windowHeight = windowObj.height(),
               height = parseInt(windowHeight, 10);

           function scroll(event) {
               // prevent default scrolling
               event.preventDefault();

               var isScrollBottom = scope.scrollDirection(event);

               if (isScrollBottom) {
                   if (scope.isMainPage && !scope.isAnimationRunning) {

                       scope.isAnimationRunning = true;

                       TweenLite.to(window, 0.5, {
                           scrollTo: {y:height},
                           ease    : Power2.easeInOut,
                           onComplete: function() {
                               scope.isAnimationRunning = false;
                               scope.isMainPage = false;
                           }
                       });
                   } else {
                       return false;
                   }
               } else {
                   return false;
               }
           }

           $('body').on('mousewheel', scroll);
        }
    }
});

app.directive('scrollToMain', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            function scroll(event) {
                // prevent default scrolling
                event.preventDefault();


                var isScrollBottom = scope.scrollDirection(event);

                if (!isScrollBottom) {
                    if (!scope.isMainPage && !scope.isAnimationRunning) {
                        scope.isAnimationRunning = true;
                        TweenLite.to(window, 0.5, {
                            scrollTo: {y:0},
                            ease    : Power2.easeInOut,
                            onComplete: function() {
                                scope.isAnimationRunning = false;
                                scope.isMainPage = true;
                            }
                        });
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            $('body').on('mousewheel', scroll);
        }
    }
});

app.directive('initPage', function() {
    return {
        restrict: 'A',
        link: function() {

            //this function used for improve scroll performance;
            function disableHover () {
                var body = $('body'),
                    timer;

                $(window).on('scroll', function () {
                    clearTimeout(timer);

                    if(!body.hasClass('disable-hover')) {
                        body.addClass('disable-hover');
                    }

                    timer = setTimeout(function(){
                        body.removeClass('disable-hover');
                    },500);
                });
            }

            function scrollToTop () {
                setTimeout(function() {
                    TweenLite.to(window, 0, {scrollTo:{y:0}, ease:Power2.easeIn});
                }, 200);
            }

            $(function() {
                scrollToTop();
                disableHover();
            });
        }
    }
});
