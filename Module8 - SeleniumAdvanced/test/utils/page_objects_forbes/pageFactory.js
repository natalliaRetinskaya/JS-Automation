const HomePage = require("./home_page/home_page");
const BasePage = require("./base_page/base_page");
const SearchResultsPage = require("./search_results_page/search_results_page");
const PressRoomPage = require("./press_room_page/press_room_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "SearchResults":
                return new SearchResultsPage();
            case "PressRoom":
                return new PressRoomPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;