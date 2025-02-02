<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Mojo Works Inc. </title>
    <link rel="stylesheet" href="css/hover-min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="pages/pstyle.css">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    
   

    
    
</head>
<!-- <body onload="loaded()"> -->
    <body>
    <!-- Navigation -->
    <nav id="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
    </nav>

     <!-- Home Section -->
     <section id="home">
        <video id="home_video_bg" preload="auto" autoplay="true" loop="loop" muted="muted">
        <source src="videos/green_white.mp4" type="video/mp4">
        </video>
            <h2 class="ml12">Welcome</h2>
    </section>
    <!-- About -->
        <section id="about">
            <h1>About</h1>
            <p>My name is Kelvin Joel Mojica and I am a web developer looking to take my expertise to
                the next level in helping anyone and everyone when it comes to their development and or software needs.
                With technology and the internet becoming more and more present within our daily lives, it is imperative
                that one heeds the new age pivot and answer the calls inbound. Brandishing expertise in HTML5, CSS, Javascript,
                and Node.js, I am more than confident in utilzing my ever-growing skillset and natural resourcefulness 
                to provide the best solutions possible!
            </p>
            <br>
            
            <div id="about_icons">
                <a href="#" class="hvr-pop">
                    <i class="fab fa-html5"></i>
                </a>
                <a href="#" class="hvr-pop">
                    <i class="fab fa-css3"></i>
                </a>
                <a href="#" class="hvr-pop">
                    <i class="fab fa-js"></i>
                </a>
                <a href="#" class="hvr-pop">
                    <i class="fab fa-node"></i>
                </a>
            </div>


            
            
            <p> In my spare time, I enjoy spending time with family and friends, playing music, losing myself
                in either a good book or a good video game or questioning whether or not we live in a simulation
                of a simulation of another simulation.</p>
    
    </section>
    <!-- Projects Section -->
    <section id="works">
        <h1>Works</h1>
        <h2>Here are some examples of what I've created lately. . .</h2>
        <div class="gallery">
            <a target="_blank" href="joke_teller_bot/index.html">
              <img src="images/joke_teller_bot.jpg" alt="joke_teller">
            </a>
            <div class="desc">J, the joke telling bot! Utilizing two different api's
                and asynchronous JS to feed jokes and transcribe them into speech, delight yourself with this
                fun little "bot."
            </div>
        </div>
        <br>
        <br>

        <div class="gallery">
            <a target="_blank" href="../doomzu/index.html">
              <img src="images/doomzu.jpg" alt="doomzu">
            </a>
            <div class="desc">A time capsule of sorts for my friends and I D&D campaign! 
                This was built from scratch utilzing HTML5, CSS, and Javascript. No, I did
                not draw the awesome images but I utilized Photoshop to be able to use them
                in the site. 
            </div>
        </div>
        <br>
        <br>

        <div class="gallery">
            <a target="_blank" href="just_breathe/breatheindex.html">
              <img src="images/just_breathe.jpg" alt="breathe">
            </a>
            <div class="desc"> A simple yet powerful little display of CSS animation and time based
                Javascript! 
            </div>
        </div>
        <br>
        <br>

        <div class="gallery">
            <a target="_blank" href="http://mojica-weather-application.herokuapp.com">
              <img src="images/h_n.jpg" alt="h_n">
            </a>
            <div class="desc"> A nifty weather app that utilzes Node, Express, Handlebars, and two API's to bring you the current weather conditions
                based on whichever major city lies near. 
            </div>
        </div>
        <br>
        <br>

        <h2>Aaaaand of course this landing page itself!</h2>
        <p>Code is available for viewing at my github! Link to page down below!</p>

    </section>
    

    <!-- Contact Section -->
    <section id="contact">
	<?php
		if($_GET["did_email"] != "1"){
	?>
        <h2>So you want to get ahold of me eh?</h2>
		<button class="cta-btn" id="open">Email Me!</button>
	<?php
		} else if (mail("kamacoustic@gmail.com","New Message from TheMojoWorks.com", "FROM: ".$_POST["email"]." ".$_POST["message"], "From:kamacoustic@gmail.com")){
	?>
		<h2>Thanks!<h2>
	<?php
		} else {
	?>
		<h2>Error.<h2>
	<?php
		}
	?>

        <div class="icon_container">
            <a target="_blank" href="https://github.com/kamacoustic/portfolio_main" class="icon">
            <i class="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/themojoworksinc/" class="icon">
            <i class="fab fa-linkedin"></i>
            </a>
        </div>
        
        
    </section>
    
    <!-- Modal -->
    <div class="modal-container" id="modal">
        <div class="modal">
            <div class="modal-header">
                <h3>Let me hear from you!</h3>
            </div>
            <div class="modal-content" id="modal-box">
                <p>I will respond as soon as I am able! Thank you!</p>
                <form class="modal-form" action="index.php?did_email=1#contact" method="post">
                    <div>
                        <label for="name">Name or Company</label>
                        <input class="form-input" type="text" id="name" placeholder="Enter Name">
                    </div>
                    <div>
                        <label for="email">Best Contact Email</label>
                        <input class="form-input" type="email" id="email" placeholder="Enter Email">
                    </div>
                    <div>
                        <textarea id="message" name="message" placeholder="Type Message Here"></textarea>
                        <!-- <input class="form-input" type="text" id="message" placeholder="Type Message Here"> -->
                    </div>
                    <input type="hidden" id="process-email" name="process-email" value="1">
                    <input id="modal-submit" class="submit-btn" type="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>

    <footer>

        <h2>Created by The Mojo Works</h2>
        <img src="images/logo_idea.png" alt="logo">
    </footer>

    
    <!-- <script src="scripts/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> -->
    <script src="scripts/script.js"></script>
</body>
</html>