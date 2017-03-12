(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// 'item' is injected through state's resolve
ItemListController.$inject = ['items']
function ItemListController(items) {
  var itemList = this;
  itemList.items = items;

}

})();
