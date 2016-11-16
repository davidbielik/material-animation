# material-animation
Angular animation library 

[See a demo](http://codepen.io/davidbielik/pen/YpGJoy) - (http://codepen.io/davidbielik/pen/YpGJoy)

* Requires Angular
* MDL is optional
* Animates all child elements of the `material-animation material-animation__slide-in-right` class

## Getting Started

Install this module
```
npm install material-animation --save
```

Add this module to your HTML page
```html
<script src="node_modules/material-animation/material-animation.js"></script>
<link href="node_modules/material-animation/material-animation.css" rel="stylesheet">
```

Add the module into your angular app

```javascript
angular.module('app', ['material-animation']);
```

Call the animate function to animate a list of items (or `ng-repeat`)
```javascript
angular.module('app')
	.controller('AppController', function($scope, materialAnimation, $timeout){
		$scope.items = ['item1','item2','item3','item4','item5','item6','item7','item8','item9'];
		$timeout(materialAnimation.slideIn);
	});
```

```html
<div ng-controller="AppController">
	<ul class="material-animation material-animation__slide-in-right">
		<li ng-repeat="item in item">{{item}}</li>
	</ul>
</div>
```