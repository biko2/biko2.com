$(function() {

  const COMPONENT_CLASS = 'c-filtrado';
  const FILTER_CLASS = 'c-filtrado__filter';
  const FILTER_ACTIVE_CLASS = 'c-filtrado__filter--active';
  const FILTER_CATEGORY_DATA_PROPERTY = 'categoria';
  const ITEM_CLASS = 'c-filtrado__item';
  const ITEM_CATEGORIES_DATA_PROPERTY = 'categorias';
  const ITEM_ACTIVE_CLASS = 'c-filtrado__item--active';
  const ITEM_DISABLED_CLASS = 'c-filtrado__item--disabled';

  $('.' + COMPONENT_CLASS).each(function() {
    let component = this;
    $(component).find('.' + FILTER_CLASS).on('click', function() {
      let filter = this;
      if ($(filter).hasClass(FILTER_ACTIVE_CLASS)) {
        disableAllFilters(component);
        enableAllItems(component);
        showOnlyCategories([], component);
      } else {
        if ($(filter).data().hasOwnProperty(FILTER_CATEGORY_DATA_PROPERTY)) {
          disableAllFilters(component);
          disableAllItems(component);
          $(filter).addClass(FILTER_ACTIVE_CLASS);
          let categoriesToShow = $(filter).
              data(FILTER_CATEGORY_DATA_PROPERTY).
              trim().
              split(' ');
          showOnlyCategories(categoriesToShow, component);
        }
      }
      return false;
    });

  });

  function disableAllFilters(component) {
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
      let item = this;
      if (categories.length === 0) {
        $(item).removeClass(ITEM_ACTIVE_CLASS);
        $(item).removeClass(ITEM_DISABLED_CLASS);
        return;
      }
      let itemCategories = [];
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
