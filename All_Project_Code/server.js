/***********************
  Load Components!

  Express      - A Node.js Framework
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();

var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var url = "mongodb://database:27017/";
var MongoClient = require('mongodb').MongoClient

// set the view engine to ejs 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory


//these two functions parse the jsonBooks.txt file and pass it to mongoBook to be added to db
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('jsonSelect.txt') //change jsonSelect.txt to read from different file
});

lineReader.on('line', function (line) {
    var newBook = JSON.parse(line)
    mongoBook(newBook);
});

//adds books to db 
//TODO: figure out how to stop adding duplicates 
function mongoBook(book) {
    MongoClient.connect(url, book, function (err, db) {
        if (err) throw err;
        var dbo = db.db("bookmark");
        
        dbo.collection("books").insertOne(book, function (err, res) {
            if (err) {
                console.log("Ran into mongo error");
                throw err;
            }
            console.log("inserted book");
            db.close();
        });
    });
}

//adds users to db
function mongoUser(user) {
    MongoClient.connect(url, user, function (err, db) {
        if (err) throw err;
        var dbo = db.db("bookmark");
        dbo.collection("users").insertOne(user, function (err, res) {
            if (err) {
                console.log("Ran into mongo error");
                throw err;
            }
            console.log("inserted user");
            db.close();
        });
    });
}

function mongoPullBook(book_title) {
    var foundBook;
    MongoClient.connect(url, function (err, db) {
        if(err) throw err;
        var dbo = db.db("bookmark");
        var query = {title: book_title};

        dbo.collection("books").find(query).toArray(function (err, res) {
            if (err) {
                console.log("Ran into mongo error");
                throw err;
            }
            if(res[0]) { 
                console.log("book found");
                //console.log(res[0]);
                //foundBook = res[0];
                return res[0];
            }
            else {
                console.log("not found");
            }
            db.close();
        });
    });
    //console.log(foundBook);
    //return foundBook;
}

//
app.post('/registration/new_user', function (req, res) {
    
    // req.body is a JSON object with these attributes 
    // none of these are used in this API, we can delete them
    var name = req.body.name_fl;
    var email = req.body.email;
    var user_name = req.body.user_name;
    var password = req.body.password;
    var password_c = req.body.password_c;

    console.log(user_name);
    console.log(password);
    if(password === password_c) {
        mongoUser(req.body);
        res.render('pages/userspage', {
            local_css: "",
            my_title: "Users Page",
            user: req.body
        });
        console.log("New user has been created!");
    } 
    else {
        res.render('pages/registration_page', {
            local_css: "registration.css",
            my_title: "Login Page",
            messageNewUser: "Invalid inputs, please try again!",
            messageVerifyUser: "" 
        });
        
        console.log("Invalid parameters for creating user");
    }
});




app.get('/registration/verify_user', function (req, res) {
    //console.log(req.body);
    var user_name = req.query.username; //username input in form
    var password = req.query.password_input; //password input in form
    var user;

    var temp = mongoPullBook("Autumn: A Novel");
    console.log(temp);
    //console.log(mongoPullBook("Autumn: A Novel"));
    


    MongoClient.connect(url, function(err, db) { //open db connection
        if(err) throw err;
        //console.log(user_name); 
        //console.log(password);
        var dbo = db.db("bookmark");
        var query = {
            user_name: user_name,
            password: password
        };
        //this loops through users db and returns an array of users 
        dbo.collection("users").find(query).toArray(function(err, result) {
            if (err) throw err;
            if(result[0]) { //if we have a match
                res.render('pages/userspage', {
                    local_css: "",
                    my_title: "Users Page",
                    user: result[0]
                });
                db.close();
            }
            else { //if we dont have match
                res.render('pages/registration_page', {
                    local_css: "registration.css",
                    my_title: "Login Page",
                    messageNewUser: "",
                    messageVerifyUser: "Could not find username or password, please try again!", 
                    user: ""
                });
                db.close();
            }
          });

            
    });
      
});

//load book page
app.get('/books', function(req, response) {
    MongoClient.connect(url, function (err, db) {
        if(err) throw err;
        var dbo = db.db("bookmark");
        //var book_author, book_genre, booke_pub, book_date, book_rating, book_summary, book_cover;
        var book_title = req.query.book_selection; //temp
        var query = {title: book_title};

        dbo.collection("books").find(query).toArray(function (err, res) {
            if (err) {
                console.log("Ran into mongo error");
                throw err;
            }
            
            
            if(res[0]) { 
                console.log("book found");
                //console.log(res[0]);
                //foundBook = res[0];
                response.render('pages/books', {
                    local_css: "books.css",
                    my_title: "Book Page",
                    bookInfo: res[0]
                      //book_summary: res[0].
                });
                db.close();
            }
            else {
                console.log("not found");
                response.render('pages/books', {
                    local_css: "books.css",
                    my_title: "Book Page",
                    bookInfo: ""
                      //book_summary: res[0].
                });
                db.close();
            }
        });
    });
});
 


app.get('/', function (req, res) {


    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var dbo = db.db("bookmark");
        var query2 = {};
        dbo.collection("books").find(query2).toArray(function(err,result){
            if (err) throw err;
            var fiction = [];
            var religion = [];
            var biography = []; 
            var week = []; // books of the week
            var full = false;
            console.log("SIZE OF ARRAY: " + result.length)
            
            while(full == false)
            {
                var random = Math.floor(Math.random() * (result.length - 1));
                //console.log("random: " + random + "   " + result[random].tags);
                
                //check for fiction tag and make sure no non-fiction tag
                var fictionBool = (result[random].tags.indexOf('Fiction') != -1 && result[random].tags.indexOf("Non-Fiction") == -1);
                //check length
                fictionBool = fictionBool && !religionBool && !bioBool;
                
                //check for religion, spirit, or spirituality tag
                var religionBool = ((result[random].tags.indexOf('Religion') != -1) || (result[random].tags.indexOf('Spirit') != -1));
                religionBool = religionBool || (result[random].tags.indexOf('Spirituality') != -1);
                //check length, make sure it isn't also in the fiction slide
                religionBool = religionBool && !fictionBool && !bioBool;
                
                
                var bioBool = (result[random].tags.indexOf('Biography') != -1);
                bioBool = bioBool || (result[random].tags.indexOf('Autobiography')) != -1;
                bioBool = bioBool && !religionBool && !fictionBool;
                
                for(i = 0; i < fiction.length; i++)
                {
                    if (result[random].title == fiction[i].title)
                    {
                        fictionBool = 0;
                    }
                }
                
                for(i = 0; i < religion.length; i++)
                {
                    if (result[random].title == religion[i].title)
                    {
                        religionBool = 0;
                    }
                }
                
                for(i = 0; i < biography.length; i++)
                {
                    if (result[random].title == biography[i].title)
                    {
                        bioBool = 0;
                    }
                }
                
                console.log("Random Number: " + random);
                
                
                if(fictionBool && fiction.length < 3)
                {
                    fiction.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                if(religionBool && religion.length < 3)
                {
                    religion.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                if(bioBool && biography.length < 3)
                {
                    biography.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                
                
                if(biography.length == 3 && fiction.length == 3 && religion.length== 3)
                {
                    full = true;
                }
                
                console.log("fiction:" + fiction.length);
                console.log("religion:" + religion.length);
                console.log("bio:" + biography.length);
            }
            while(week.length < 3)
            {
                var random = Math.floor(Math.random() * (result.length - 1));
                
                for(i = 0; i < fiction.length; i++)
                {
                    if (result[random].title == fiction[i].title)
                    {
                        continue;
                    }
                }
                
                for(i = 0; i < religion.length; i++)
                {
                    if (result[random].title == religion[i].title)
                    {
                        continue;
                    }
                }
                
                for(i = 0; i < biography.length; i++)
                {
                    if (result[random].title == biography[i].title)
                    {
                        continue;
                    }
                }
                
                for(i = 0; i < week.length; i++)
                {
                    if (result[random].title == week[i].title)
                    {
                        continue;
                    }
                }
                
                week.push(result[random]);
                console.log("week:" + week[i]);
            }
            db.close();
            res.render('pages/home', {
                fiction: fiction,
                religion: religion,
                biography: biography,
                week: week,
                local_css: "home.css",
                my_title: "Login Page"
            });
            
        });

    
    });
    
});

app.get('/registration', function (req, res) {
    res.render('pages/registration_page', {
        local_css: "registration.css",
        my_title: "Login Page",
        messageNewUser: "",
        messageVerifyUser: "" 
    });
});

app.post('/search_results',function(req,response){
    MongoClient.connect(url, function (err, db) {
        if(err) throw err;
        var dbo = db.db("bookmark");
        console.log("wormhole");
        console.log(req.body);
        var search = req.body.search;
        console.log(search);
        var query = {title: search};

        dbo.collection("books").find(query).toArray(function (err, res) {
            if (err) {
                console.log("Ran into mongo error");
                throw err;
            }
            if(res[0]){ //at least one result
                console.log("search success");
                console.log(res[0]);

                response.render('pages/books', {
                    local_css: "books.css",
                    my_title: "Search Results",
                    bookInfo: res[0]
                });
                db.close();
            }
            else 
            {
                var query2 = {};
        dbo.collection("books").find(query2).toArray(function(err,result){
            if (err) throw err;
            var fiction = [];
            var religion = [];
            var biography = []; 
            var week = []; // books of the week
            var full = false;
            console.log("SIZE OF ARRAY: " + result.length)
            
            while(full == false)
            {
                var random = Math.floor(Math.random() * (result.length - 1));
                //console.log("random: " + random + "   " + result[random].tags);
                
                //check for fiction tag and make sure no non-fiction tag
                var fictionBool = (result[random].tags.indexOf('Fiction') != -1 && result[random].tags.indexOf("Non-Fiction") == -1);
                //check length
                fictionBool = fictionBool && !religionBool && !bioBool;
                
                //check for religion, spirit, or spirituality tag
                var religionBool = ((result[random].tags.indexOf('Religion') != -1) || (result[random].tags.indexOf('Spirit') != -1));
                religionBool = religionBool || (result[random].tags.indexOf('Spirituality') != -1);
                //check length, make sure it isn't also in the fiction slide
                religionBool = religionBool && !fictionBool && !bioBool;
                
                
                var bioBool = (result[random].tags.indexOf('Biography') != -1);
                bioBool = bioBool || (result[random].tags.indexOf('Autobiography')) != -1;
                bioBool = bioBool && !religionBool && !fictionBool;
                console.log("Random Number: " + random);
                
                
                if(fictionBool && fiction.length < 3)
                {
                    fiction.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                if(religionBool && religion.length < 3)
                {
                    religion.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                if(bioBool && biography.length < 3)
                {
                    biography.push(result[random]);
                    console.log("success!!!!:" + result[random].title);
                }
                if(biography.length == 3 && fiction.length == 3 && religion.length== 3)
                {
                    full = true;
                }
                
                console.log("fiction:" + fiction.length);
                console.log("religion:" + religion.length);
                console.log("bio:" + biography.length);
            }
            for(var i = 0; i <= 2; i++)
            {
                var random = Math.floor(Math.random() * (result.length - 1));
                week.push(result[random]);
                console.log("week:" + week[i]);
            }
            db.close();
            res.render('pages/home', {
                fiction: fiction,
                religion: religion,
                biography: biography,
                week: week,
                local_css: "home.css",
                my_title: "Login Page"
            });

        });
                
            }
        });
    });

});




app.get('/user', function (req, res) {
    res.render('pages/userspage', {
        my_title: "User Page"
    });
});

app.listen(3000);
console.log('3000 is the magic port');



