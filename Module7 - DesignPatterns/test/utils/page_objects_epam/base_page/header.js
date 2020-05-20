
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", "div.header .top-navigation__item");
        this.firstNavigationButtonDropdown = new Collection("First Navigation Dropdown", ".top-navigation__flyout.with-featured")
        this.contactUsButton = new Element(".cta-button-ui");
        this.searchButton = new Element(".header-search__button.header__icon");
        this.submitButton = new Element(".header-search__submit");
        this.locationSelectButton = new Element(".location-selector__button") 
        this.languageDropdown = new Collection("Language dropdown", ".location-selector__list")
        this.searchField = new Element("#new_form_search")
    };
    clickContacktUs(){
        return this.contactUsButton.element.click();
    };

    clickSearch(){
        return this.searchButton.element.click();
    }

    clickLocationSelectorButton(){
        return this.locationSelectButton.element.click();
    }
};

module.exports = Header;








