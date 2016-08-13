"use strict";angular.module("colosisApp",["ui.router","ngResource"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app",{url:"/",views:{header:{templateUrl:"views/header.html"},content:{templateUrl:"views/main.html",controller:"IndexController"},footer:{templateUrl:"views/footer.html"}}}).state("app.about",{url:"about",views:{"content@":{templateUrl:"views/about.html",controller:"AboutController"}}}).state("app.contact",{url:"contact",views:{"content@":{templateUrl:"views/contact.html",controller:"ContactController"}}}).state("app.login",{url:"login",views:{"content@":{templateUrl:"views/login.html",controller:"LoginController"}}}).state("app.register",{url:"register",views:{"content@":{templateUrl:"views/register.html",controller:"RegisterController"}}}),b.otherwise("/")}]),angular.module("colosisApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("colosisApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("colosisApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <h3>Our people make the difference. </h3> <p> Our team of experienced professionals is dedicated to providing award-winning service to our clients. We take the time to research your situation completely and bring about the most effective opportunities ensuring you get the successful outcome you deserve. We\'re here to help you succeed. <br><br><br><br><br><br><br><br><br> Our team consists of highly talented and experienced professionals. <br><br><br><br><br><br><br> Visit us to see the energy and enthusiasm we carry at our work place. <br><br><br><br> We enjoy our work! <br> </p> </div>'),a.put("views/contact.html",'<div class="container"> <div class="container bg-grey"> <h2 class="text-center">CONTACT</h2> <div class="row"> <div class="col-sm-5"> <p>Contact us and we\'ll get back to you.a</p> <p><span class="glyphicon glyphicon-map-marker"></span> 1178/151 Mansukh Singh Marg, Sarita Vihar New Delhi-110076</p> <p><span class="glyphicon glyphicon-phone"></span> .. </p> <p><span class="glyphicon glyphicon-envelope"></span> info@colosistech.com</p> </div> <div class="col-sm-7"> <div class="row"> <div class="col-sm-6 form-group"> <input class="form-control" id="name" name="name" placeholder="Name" type="text" required> </div> <div class="col-sm-6 form-group"> <input class="form-control" id="email" name="email" placeholder="Email" type="email" required> </div> </div> <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br> <div class="row"> <div class="col-sm-12 form-group"> <button class="btn btn-default pull-right" type="submit">Send</button> </div> </div> </div> </div> </div> </div>'),a.put("views/footer.html",'<footer class="row-footer"> <div class="container"> <div class="row"> <div class="col-xs-12"> <p style="padding:10px"></p> <p align="center">Copyright © ColosisTech Solutions LLP. All rights reserved.</p> </div> </div> </div> </footer>'),a.put("views/header.html",'<!-- This is for top navigation menu --> <nav class="navbar navbar-inverse navbar-fixed-top"> <div class="container"> <div class="navbar-header"> <a a class="navbar-brand" ui-sref="app"><img src="images/logo.0b56d375.png" height="30" width="41"></a> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="glyphicon glyphicon glyphicon-align-justify"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav"> <li class="active"><a ui-sref="app"> <span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</a></li> <li><a ui-sref="app.about"> <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> About</a></li> <li><a ui-sref="app.contact"> <i class="fa fa-envelope-o"></i> Contact</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a ui-sref="app.register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> <li><a ui-sref="app.login" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> </ul> </div> </div> </nav> <!-- For login & SignUp, please refer to login.html --> <!-- This is for marketing header --> <div class="container"> <header class="jumbotron"> <!-- Main component for a primary marketing message or call to action --> <div class="row row-header"> <div class="col-xs-12 col-sm-8"> <h2>Colosistech Solutions LLP</h2> Innovation - world is changing ! </div> </div> </header> <!-- Carousel in the header section --> <div id="myCarousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner" role="listbox" class="embed-responsive embed-responsive-16by9"> <div class="item active"> <img class="img-responsive" src="images/carousel/1.c9172069.png" alt="Chania"> <div class="carousel-caption"> <h3>IoT</h3> <p>World connected to next level through Internet of Things.</p> </div> </div> <div class="item"> <img class="img-responsive" src="images/carousel/2.0ab9aeee.png" alt="Chania"> <div class="carousel-caption"> <h3>Robotics</h3> <p>Robots will drive the service industry.</p> </div> </div> <div class="item"> <img class="img-responsive" src="images/carousel/3.c64c66f9.png" alt="Flower"> <div class="carousel-caption"> <h3>Artificial Intelligence</h3> <p>AI will power robots.</p> </div> </div> <div class="item"> <img class="img-responsive" src="images/carousel/4.72b348b8.png" alt="Flower"> <div class="carousel-caption"> <h3>Machine Learning</h3> <p>Machines are becoming smart.</p> </div> </div> </div> <!-- Left and right controls --> <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </div>'),a.put("views/login.html",'<div class="modal fade" id="myModal" role="dialog"> <div class="modal-dialog"> <!-- Modal content--> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">Login</h4> </div> <form class="form-horizontal" role="form"> <div class="form-group"> <label class="col-sm-2 control-label" for="inputEmail3">Email</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label" for="inputPassword3">Password</label> <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div> </div> </form> <form> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <div class="checkbox"> <label> <input type="checkbox"> Remember me </label> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-default">Log in</button> </div> </div> </form> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="container"> <div class="row marketing"> <p> Making sure you get the solution you need. We\'re dedicated to ensuring that we take care of all of our clients, and that their needs are met and exceeded. We offer high-quality work and personal client service. We’re committed to providing you with top notch support. <br><br><br><br><br><br><br><br><br> We can add more articles <br><br><br><br><br><br><br><br><br> and images <br><br><br><br><br><br><br><br><br><br> and testimonials <br><br><br> etc. </p> </div> </div>'),a.put("views/register.html",'<div class="container"> <form class="form-horizontal" role="form"> <div class="form-group"> <label class="col-sm-2 control-label" for="inputEmail3">Email</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label" for="inputPassword3">Password</label> <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div> </div> </form> <form> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <div class="checkbox"> <label> <input type="checkbox"> Remember me </label> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-default">Register</button> </div> </div> </form> </div>')}]);