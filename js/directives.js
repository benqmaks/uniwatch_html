/*global $:false, jQuery:false */

'use strict';

app.directive('scrollToCatalog', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            function scroll(event) {
                // prevent default scrolling
                event.preventDefault();

                var isScrollBottom = scope.scrollDirection(event);

                if (isScrollBottom) {
                    if (scope.isMainPage && !scope.isAnimationRunning) {

                        scope.isAnimationRunning = true;

                        TweenLite.to(window, 0.5, {
                            scrollTo: { y: scope.windowHeight },
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
                            scrollTo : { y: 0 },
                            ease     : Power2.easeInOut,
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

app.directive('stuckOnTop', function () {
   return {
       restrict: 'A',
       link: function (scope, element) {
           function scroll(event) {
               event.preventDefault();

               var isScrollBottom = scope.scrollDirection(event);

               if (isScrollBottom) {
                   if (!scope.isMainPage && !scope.isAnimationRunning) {
                       //check if products on top
                       scope.$apply(function() {
                           scope.isMenuStuck = true;
                       });
                   }
               } else if(!isScrollBottom) {
                   if (!scope.isMainPage && !scope.isAnimationRunning) {
                       // check if products not on top
                       scope.$apply(function () {
                           scope.isMenuStuck = false;
                       });
                   }
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
            function disableHoverOnScroll () {
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

            // prevent chrome from scroll to previous position
            function scrollToTop () {
                setTimeout(function() {
                    // target, duration, options
                    TweenLite.to(window, 0, {
                        scrollTo : { y:0 },
                        ease     : Power2.ease
                    });
                }, 200);
            }

            // init custom scroll plugin on catalog page
            function initScrollPlugin() {
                $('#catalog-page').mCustomScrollbar();
            }

            $(function() {
                scrollToTop();
                disableHoverOnScroll();
                initScrollPlugin();
            });
        }
    }
});

app.directive('windowResize', function() {
    return {
        restrict: 'A',
        link: function(scope) {
            var height;
            var timer = 200,
                timeout;

            $(window).on('resize', function() {
                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(function() {
                    scope.$apply(function() {
                        scope.windowHeight = $(window).height();
                    });
                }, timer);
            });
        }
    }
});
