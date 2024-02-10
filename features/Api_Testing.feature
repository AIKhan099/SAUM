Feature: Api Testing of automationexercise website

  Scenario Outline: Sending and verifying GET request.

    Given I send the GET request at url.
    And I get 200 status.
    And I get message Get Products Successfully.
    And I get pages 153037.
    And I get total 459110.

  