### Application Description:

Bookmark is a reading log and consumer review hub for books. A user will be able to rate, review, and track which books they have read, as well as browse the site for new books to read. Users can explore the website’s database of books by genre. Bookmark is the next great way to find the perfect book.


### Architecture Plan:

Our project will require database software to manage and store book and user data. We will use MongoDB, as it works seamlessly with JSON objects. Node.js will be our backend framwork. Front-end development will consist of a combination of HTML / EJS, Javascript, and CSS. These languages will be used to create visual components of the website, such as the homepage, each book genre’s page, and user profiles.

### Repo File Structure: 

```
3308SP21_SECTION013_5
|-All_Project_Code //contains all code necessary to run Bookmark
| |-resources
| | |-covers //jpg images of book covers
| | | |-Alan Watts //author
| | | | |-The Wisdom of Insecurity //book title
| | | | | |-cover.jpg //all covers named 'cover.jpg'
| | | |-...
| | | |-...
| | | |-Toni Morrison
| | | | |-Beloved_A Novel (37)
| | | | | |-cover.jpg
| | | | |-Song of Solomon (362)
| | | | | |-cover.jpg
| | |-css
| | | |-home.css
| | | |-registration.css
| | |-img
| | | |-BookMark.png
| | | |-just_bookmark.png
| | | |-profile.png
| |-views
| | |-pages
| | | |-books.ejs
| | | |-registration_page.ejs 
| | | |-userspage.ejs
| | |-partials 
| | | |-footer.ejs
| | | |-header.ejs
| | |-.docker_ignore
| | |-.gitignore 
| | |-bookmarkfilenew.csv //raw book data
| | |-csvToJson.sh //converts all rows in bookmarkfilenew.csv to JSON
| | |-docker-compose.yml //dockerizes application
| | |-jsonBooks.txt //JSON formatted list of all 400 books
| | |-jsonSelect.txt //JSON formatted list of select books with covers uploaded to Github
| | |-package-lock.json
| | |-package.json
| | |-server.js //Node.js server
| |-test
| | |-server.js //server for test cases
|-Milestone_Submissions
| |-Milestone1
| |-...
| |-...
| |-Milestone7
|-Team_Meeting_Logs
| |-TA_Meeting_1.md
| |-..
| |-...
| |-TA_MEETING_7.md
|-README.md
  
```


Milestone_Submissions is the directory in which we collaborated to complete all of the project milestones, and Team_Meeting_Logs contains the meeting minutes for all of our meetings with Karthik. 

All of the code necessary to run Bookmark is contained in All_Project_Code. All_Project_Code contains four subdirectories (listed below), a file named server.js (our Node.js server), our docker-compose.yml file, and a text file containing all of our book data formatted as JSON objects which is used to initialize our database. 



### Deployment: 

To deploy this app, simply clone the repository onto your local system and navigate to in your terminal. Run the command docker-compose up, and navigate to localhost:3000 in your favorite browser. Bookmark works best in Safari. 