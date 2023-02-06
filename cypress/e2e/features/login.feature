Feature: Login

  @login
  Scenario Outline: Verify the user login fail with an invalid account
    Given the user opens the Login page
    When the user logins an account by entering a user as "<user>" and password as "<pass>"
    And the error "Login Failed" is displayed

    Examples: 
      | user            | pass     |
      | email@email.com | Test@124 |

  Scenario: Verify the user login success with a valid account
    Given the user opens the Login page
    When the user logins an account by entering a user as "<user>" and password as "<pass>"
    Then the landing page should be loaded
    Then Logout the application

    Examples: 
      | user             | pass     |
      | email@email.com  | Test@123 |
      
