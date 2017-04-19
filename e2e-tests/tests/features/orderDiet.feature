Feature: Test 1

  Scenario: Add new book
    Given I am on Order Diet page
    When I select Standard Diet
    And I fill the form
    And I add diet to the basket
    Then I should see Standard Diet in the basket
