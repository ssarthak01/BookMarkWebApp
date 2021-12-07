# Bookmark
#### Sarthak, Albert, Tyler, Lucas, and Andy

- [Bookmark](#bookmark)
      - [Sarthak, Albert, Tyler, Lucas, and Andy](#sarthak-albert-tyler-lucas-and-andy)
  - [Project Description](#project-description)
  - [Project Tracker](#project-tracker)
  - [Github](#github)
  - [Deployment](#deployment)
  - [Individual Contributions](#individual-contributions)
    - [Albert](#albert)
    - [Sarthak](#sarthak)
    - [Tyler](#tyler)
    - [Andy](#andy)
    - [Lucas](#lucas)


## Project Description
Bookmark is a reading log and consumer review hub for books. A user will be able to find information about books that they’ve read, as well as browse the site for new books to read. Bookmark is the next great way to find the perfect book. 

Bookmark’s codebase makes use of several modern web development frameworks and languages. At the heart of Bookmark is docker, which packages up our entire application and all of its dependencies with the use of a docker-compose.yml file. Under the hood, Bookmark runs on a Node.js server and a MongoDB Database. The application’s front end is constructed with EJS, allowing the seamless combination of HTML and Javascript in the same file. Our unit tests were written using Mocha and Chai testing frameworks. Our team used Github for version control, and Discord for communication and collaboration.

Currently, Bookmark maintains a database of about 400 books, and we have plans to add many more. Future plans also include allowing the user to rate and review books, as well as create a wishlist of books that they would like to read. Please stay tuned as bookmark continues to grow! 

## Project Tracker

[Jira](https://csci-3308-spring21-5.atlassian.net/jira/software/projects/A55/boards/1/roadmap)


![image](https://user-images.githubusercontent.com/77512061/115314174-eefd9e00-a131-11eb-8fe5-465459ea644f.png)


## Github

[GitHub Repository](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5)

## Deployment

Steps for deployment:
1. git clone repository onto computer so it is downloaded locally.
2. Open the repository in VS Code and in the terminal type cd All_Project_Code
3. In the terminal, run the command docker-compose run web npm install
4. Finally, run docker-compose up. Sometimes there is a weird glitch where the first time the docker-compose up is executed, the application does not work. If this happens run docker-compose up again and it should work the second time.
5. Navigate to localhost:3000 on terminal and the home page should pop up.
## Individual Contributions

### Albert
[Albert's Commits](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commits?author=alberttmy1)
Worked on the the front side of the website using ejs and css and worked on the design wirframe. I also helped on implementing some api in order to get books from the database and helped groupmates try to resolveand come up with solutions and write some test cases, as well as updating jira. Used discord, vscode and liveshare.


### Sarthak
[Sarthak's Commits](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commits?author=ssarthak01)

Worked with Albert & Tyler to create and design wireframes for our webpages. Designed and implemented the registration/sign-in page. Created the verify_user API to facilitate the process of validating the inputs entered by a user on the sign-in form with user info in the database and then rendering the users page based on inputs. Edited the new_user api to make sure that the password and confirm password fields match and made it render the users page on valid inputs or display error message. Wrote the books api to load the books page with the book image and book info whenever someone clicks on a book. Helped on problems teammates were having and worked on most parts of project.



### Tyler
[Tyler's Commits](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commits?author=tylerpaik)

Worked on wireframing, creation of pages, as well as assisted in implementing docker and getting the containers to work, and helped with the database to backend connection.
Also designed presentation and filled in where needed.

### Andy
  [Andy's Commits](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commits?author=aritt0923)

I implemented the Node.js / Mongodb architecture and dockerized the application. I also worked on all other parts of the project with the exception of HTML / UI design. I wrote APIs with Express and used EJS to gather data from the user and display data send from the server on user-facing web pages.  I also compiled all of the book data used in the application and wrote a shell program to convert that data to JSON format for use with Mongodb. 

### Lucas
[Lucas's Commits](https://github.com/CSCI-3308-CU-Boulder/3308SP21_section013_5/commits?author=lderr4)

At the beginning I spent most of my time trying to integrate the mongodb database and nodejs web application in a docker container and then get that working. Then, I created the userspage and the books page. Then I spent a lot of energy writing the code in the APIs so that the books page worked and everything loaded properly. Then I made the search bar. Finally, I created the test cases which check that each of the pages works properly.


