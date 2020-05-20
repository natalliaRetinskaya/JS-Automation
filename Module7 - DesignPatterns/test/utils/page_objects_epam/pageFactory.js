const HomePage = require("./home_page/home_page");
const BasePage = require("./base_page/base_page");
const OurWorkPage = require("./our_work_page/our_work_page");
const WhatWeDoPage = require("./what_we_do_page/what_we_do_page");
const HowWeDoItPage = require("./how_we_do_it_page/how_we_do_it_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Our Work":
                return new OurWorkPage();
            case "What We Do":
                return new WhatWeDoPage();
            case "How We Do":
                return new HowWeDoItPage();

            default:
                return new BasePage();
        };
    };
};

module.exports = PageFactory;