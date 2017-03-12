(function () {
'use strict';

angular.module('MenuApp')
.controller('DetailController', DetailController);

// 'item' is injected through state's resolve
DetailController.$inject = ['items']
function DetailController(items) {
  var detailList = this;
  detailList.items = items;

}

})();
