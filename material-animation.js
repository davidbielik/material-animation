(function(){
    'use strict';
    angular
        .module('material-animation', [])
        .factory('materialAnimation', function materialAnimation(){
            return {
                slideIn: slideIn
            };
        });

        function slideIn(){
            var elements = document.querySelectorAll('.material-animation.material-animation__slide-in-right > *');
            var visibleElementsCount = getVisibleElementsCount(elements);

            animate(elements, visibleElementsCount);

            setTimeout(function(){
                showRemainingElements(elements);
            });
        }

        function animate(elements, count){
            var delay;
            var multiplier = 0.07;
            for (var i = 0; i < count; i++) {
                delay = (i * multiplier);
                elements[i].style.webkitTransitionDelay = delay + 's';
                elements[i].style.transitionDelay = delay + 's';
                elements[i].className += ' material-animation material-animation__animating';
            }
        }

        function getVisibleElementsCount(elements){
            var count = 0;
            for (var i = 0, l = elements.length; i < l; i++) {
                if (elements[i].offsetTop >= window.innerHeight) {
                    break;
                }
                ++count;
            }
            return count;
        }

        function showRemainingElements(elements) {
            for (var i = 0, l = elements.length; i < l; i++) {
                var child = elements[i];
                child.className += ' material-animation material-animation__animating';
            }
        }
})();