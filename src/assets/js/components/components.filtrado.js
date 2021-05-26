$(function() {

  var COMPONENT_CLASS = 'c-filtrado';
  var FILTER_CLASS = 'c-filtrado__filter';
  var FILTER_ACTIVE_CLASS = 'c-filtrado__filter--active';
  var FILTER_CATEGORY_DATA_PROPERTY = 'categoria';
  var ITEM_CLASS = 'c-filtrado__item';
  var ITEM_CATEGORIES_DATA_PROPERTY = 'categorias';
  var ITEM_ACTIVE_CLASS = 'c-filtrado__item--active';
  var ITEM_DISABLED_CLASS = 'c-filtrado__item--disabled';

  $('.' + COMPONENT_CLASS).each(function() {
    var component = this;
    $(component).find('.' + FILTER_CLASS).on('click', function() {
      var filter = this;
      if ($(filter).hasClass(FILTER_ACTIVE_CLASS)) {
        deactivateAllFilters(component);
        enableAllItems(component);
        showOnlyCategories([], component);
      } else {
        if ($(filter).data().hasOwnProperty(FILTER_CATEGORY_DATA_PROPERTY)) {
          deactivateAllFilters(component);
          disableAllItems(component);
          $(filter).addClass(FILTER_ACTIVE_CLASS);
          var categoriesToShow = $(filter).
              data(FILTER_CATEGORY_DATA_PROPERTY).
              trim().
              split(' ');
          showOnlyCategories(categoriesToShow, component);
        }
      }
      return false;
    });

  });

  function deactivateAllFilters(component) {
    $(component).find('.' + FILTER_CLASS).removeClass(FILTER_ACTIVE_CLASS);
  }

  function enableAllItems(component) {
    $(component).find('.' + ITEM_CLASS).
      removeClass(ITEM_DISABLED_CLASS);
  }

  function disableAllItems(component) {
    $(component).find('.' + ITEM_CLASS).
      addClass(ITEM_DISABLED_CLASS);
    console.log($(component).find('.' + ITEM_CLASS));
  }

  function showOnlyCategories(categories, component) {

    $(component).find('.' + ITEM_CLASS).each(function() {
      var item = this;
      if (categories.length === 0) {
        $(item).removeClass(ITEM_ACTIVE_CLASS);
        $(item).removeClass(ITEM_DISABLED_CLASS);
        return;
      }
      var itemCategories = [];
      if ($(item).data().hasOwnProperty(ITEM_CATEGORIES_DATA_PROPERTY)) {
        itemCategories = $(item).
            data(ITEM_CATEGORIES_DATA_PROPERTY).
            trim().
            split(' ');
      }
      if ($(itemCategories).filter(categories).length > 0) {
        $(item).addClass(ITEM_ACTIVE_CLASS);
        $(item).removeClass(ITEM_DISABLED_CLASS);
      } else {
        $(item).removeClass(ITEM_ACTIVE_CLASS);
        $(item).addClass(ITEM_DISABLED_CLASS);
      }
    });

  }

});
