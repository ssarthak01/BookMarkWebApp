# Milestone 5 - Testing
#### Sarthak, Albert, Tyler, Lucas, and Andy

- [Milestone 5 - Testing](#milestone-5---testing)
      - [Sarthak, Albert, Tyler, Lucas, and Andy](#sarthak-albert-tyler-lucas-and-andy)
  - [Test Plans](#test-plans)
      - [res.body of object returned by post.(/new_user) should have properties 'user', 'email', 'password' & 'confirm_password'](#resbody-of-object-returned-by-postnew_user-should-have-properties-user-email-password--confirm_password)
      - [res.query of by get.(/registration/verify_user) should have properties 'user', 'password'](#resquery-of-by-getregistrationverify_user-should-have-properties-user-password)
      - [res.body of post.(/load_book) should have properties 'title', 'author'](#resbody-of-postload_book-should-have-properties-title-author)
  - [Individual Contributions](#individual-contributions)
      - [Albert](#albert)
      - [Sarthak](#sarthak)
      - [Tyler](#tyler)
      - [Andy](#andy)
      - [Lucas](#lucas)


## Test Plans

#### res.body of object returned by post.(/new_user) should have properties 'user', 'email', 'password' & 'confirm_password' 
      - Feature: new user registration 

#### res.query of by get.(/registration/verify_user) should have properties 'user', 'password'
      - Feature: existing user login

#### res.body of post.(/load_book) should have properties 'title', 'author' 
      - Feature: book page
      - Make sure that books are correctly pulled from the database with all of their information 


## Individual Contributions

![Jira](link_to_board_screenshot)

![image](https://user-images.githubusercontent.com/77512061/114246851-edbdbb80-9950-11eb-89a8-1d5762c4ccec.png)



#### Albert

[Albert's Commit](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commit/9db46217083f5a2e82d4ca66c30f429b80842c29)
created tests functions to test for the users and help on the registration page.

#### Sarthak

[Sarthak's Commit](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commit/5fa37932fab3314272fd627fee5ca99a3107eeb3)

Created the verify user API that is called when a user tries to sign in to their account. When they click submit, this API is called and if the user has provided valid credentials (credentials that match the user info in database) then they will be redirected to their user page.
    
#### Tyler

Finalized mongo-server connection, helped with creation of yml file and began creation of second books page.

#### Andy

With the help of Karthik, I dockerized our app with a docker-compose.yml that includes Node image and a Mongo image, as well as persistent db volumes. Converted all HTML files to EJS, created header.ejs and footer.ejs. Created post.(/new_user) API, our first API that successfully takes input from the user and creates a DB entry. Received support and suggestions from the rest of the team on all of the above. Assisted other team members who were having technical issues.

[Andy's Commit](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commit/2c10cbb1e5c5414a6f42c70eba745e2347b24d69)

#### Lucas

[Lucas's Commit](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commit/ac61af69af6ce7e29ef9fbc9c4801525950914c6)
Updated the books.ejs file and helped get the registration page working.


