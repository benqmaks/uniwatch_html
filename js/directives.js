'use strict';

app.directive('initPage', function() {
    return {
        restrict: 'A',
        link: function() {
            console.log('test');
        }
    }
});

app.directive('scrollPage', function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            var count = 0;
            var step = 5;
            var activePage = $('.page.active');

            element.on('mousewheel', function(e) {
                if (activePage.length) {
                    if(e.originalEvent.wheelDelta /120 > 0) {
                        // up
                        if (activePage.attr('id') == 'catalog-page') {
                            // scroll catalog up
                        } else {
                            e.preventDefault();
                            return false
                        }
                    } else{
                        // down
                        if (activePage.attr('id') == 'home-page') {
                            count++;
                            if (count > step) {
                                $('#home-page').animate({
                                    top: -$('#home-page').height() + 'px'
                                }, function() {
                                    $('#home-page').removeClass('active');
                                    $('#catalog-page').addClass('active');
                                });
                            }
                        } else {
                            // scroll catalog down
                        }
                    }
                } else {
                    e.preventDefault();
                    return false
                }
            });
        }
    }
});
