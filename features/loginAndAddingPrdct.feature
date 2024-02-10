Feature: Logging in at the automationexercise website

  Scenario Outline: Logging in, adding product to cart and removing it.

    Given I am on the login page
    When I login with <username> and <password>.
    When I click on the add to cart button of backpack.
    And I click on the shopping cart.
    And I remove the product from cart.

  Examples:
  | username                |  password        | 
  | standard_user           |  secret_sauce    |
  | problem_user            |  secret_sauce    |  
  | performance_glitch_user |  secret_sauce    |  
  | error_user              |  secret_sauce    |  
  | visual_user             |  secret_sauce    |  


  