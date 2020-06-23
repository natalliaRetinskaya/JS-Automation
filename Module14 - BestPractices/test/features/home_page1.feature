@smoke
Feature: Home Page Title1


    Scenario: Page title
        Given I open "https://www.epam.com" url
        Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
        When I wait "2" seconds