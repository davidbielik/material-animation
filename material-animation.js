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
                angular.element(elements[i]).addClass('material-animation material-animation__animating');
                elements[i].style.webkitTransitionDelay = delay + 's';
                elements[i].style.transitionDelay = delay + 's';
                removeAnimationClasses(elements[i], delay);
            }
        }

        function removeAnimationClasses(node, delay){
            var element = angular.element(node);
            var classToRemove = 'material-animation__animating';
            var classToAdd = 'material-animation__animated';
            setTimeout(function(){
                element.removeClass(classToRemove);
                element.addClass(classToAdd);
            }, delay * 1e3);
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
            var element;
            for (var i = 0, l = elements.length; i < l; i++) {
                element = angular.element(elements[i]);
                element.addClass('material-animation material-animation__animated');
            }
        }
})();