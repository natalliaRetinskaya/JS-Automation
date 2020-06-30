@smoke
Feature: Home Page Title


    Scenario: Page title
        Given I open "https://www.epam.com" url
        Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
        When I wait "2" seconds



    Scenario Outline: Menu pages
        Given I open "<URL>" url
        Then Page title should be "<Title>"
        When I wait "1" seconds

        Examples:
            | URL                               | Title                                                              |
            | https://www.epam.com/what-we-do   | What We Do \|Technology Consulting & Engineering Services \|EPAM   |
            | https://www.epam.com/how-we-do-it | How We Do It \|Agile Product Engineering Services \|EPAM           |
            | https://www.epam.com/our-work     | Explore our Work \|EPAM Customer Stories, Brochures & Accelerators |
            | https://www.epam.com/insights     | Discover our Latest Insights \|EPAM                                |
            | https://www.epam.com/about        | One of the Fastest-Growing Public Tech Companies \|About EPAM      |
            | https://www.epam.com/careers      | Explore Professional Growth Opportunities \|EPAM Careers           |






    Scenario: Verify user can open menu
        Given I open "https://www.epam.com/" url
        When I wait until "Menu" is present
        Then Text of "Menu" should contain "MENU"

    Scenario: Verify menu has 6 subitems
        Given I open "https://www.epam.com/" url
        When I wait until "Menu" is present
        Then Text of "Menu" should contain "MENU"
        When I click "Menu"
        And I wait until "Expanded Menu" is present
        Then "Expanded Menu" should be visible
        And Count of "Expanded Menu Row Titles" should be "6"
        And I wait "1" seconds