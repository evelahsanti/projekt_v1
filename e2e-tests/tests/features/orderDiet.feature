Feature: Ordering diet

  Scenario: Order standard diet
    Given I am on Order Diet page
    When I select Standard Diet
    And I fill the form for 2 sets with data:
      |caloriesAmount|duration|date|
      |     1500     | 14 dni | 15 |
      |     1250     | 7 dni  | 25 |
    And I add diet to the basket
    Then I should see Standard Diet in the basket
