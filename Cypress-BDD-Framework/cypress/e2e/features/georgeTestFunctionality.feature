Feature: Testing search functionality

  Background:
    Given Open George AT page
    And Login with user "101980439"
    And Enter a correct OPT


  Scenario: Validate that the search elements are visible
    Given The user is at the homepage
    Then The search component is visible and enabled

   ############################################

  Scenario Outline:  Search functionality test
    Given The user is at the homepage
    And The search component is visible and enabled
    When Search term is entered "<searchTerm>"
    And Search button is clicked
    Then All results contain "<searchTerm>"
    Examples:
      | searchTerm |
      | Fashion    |