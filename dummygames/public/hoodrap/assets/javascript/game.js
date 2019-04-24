function loadGame(){
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var lettersGuessed = [];
    var lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wordToGuess = "bigl"; //max 14 characters all lower case.
    var guessedCorrect = [];
    var goodCount = 0;
    var hangStage = "./assets/images/hung-start.png";
    var start = true;
    var spacebar = true;
    var k;
    var tutor = false;
    var gamesArr = [
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/001-allcity-actual.mp3" type="audio/mpeg"></audio>',
            word: 'primo',
            hint: "Christopher Edward Martin, known professionally as DJ Premier, has collaborated with many East Coast Rappers, including the current group playing named All City.  One of DJ Premier's well known nickname's is what 5 letter word?",
            num: '0'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/002-allcity-moveonyou.mp3" type="audio/mpeg"></audio>',
            word: 'allcity',
            hint: "This American rap duo composed of Brooklyn-based rappers J. Mega and Greg Valentine is best known for its hit single \"The Actual\", of which they partnered with DJ Premier for the beat.  What is this rap duo's name?",
            num: '1'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/003-nickatina-ayo.mp3" type="audio/mpeg"></audio>',
            word: 'cocaine',
            hint: "In the song Ayo for Yayo by Andre Nickatina, he frequently refers to Yayo.  Yayo is slang for what?",
            num: '2'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/004-nickatina-4am.mp3" type="audio/mpeg"></audio>',
            word: 'oakland',
            hint: "In the song 4am-Bay Bridge Music by Andre Nickatina, refers to the Bay Bridge in the San Francisco Bay Area.  The Bay Bridge connects San Francisco to which city?",
            num: '3'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/005-nickatina-gitdown.mp3" type="audio/mpeg"></audio>',
            word: 'equipto',
            hint: "Andre Nickatina collaborates on many albums, but especially with one particular artist.  An example would be the 2005 album Horns and Halos.  Who is this artist?",
            num: '4'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/006-nickatina-yeah.mp3" type="audio/mpeg"></audio>',
            word: 'fillmore',
            hint: "American rapper Messy Marv is from which district in San Francisco, California?",
            num: '5'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/007-nickatina-jungle.mp3" type="audio/mpeg"></audio>',
            word: 'fillmore',
            hint: "American rapper Andre Nickatina is from which district in San Francisco, California?",
            num: '6'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/008-nickatina-pbreakdown.mp3" type="audio/mpeg"></audio>',
            word: 'nickatina',
            hint: "American rapper Equipto collaborated with which Bay Area rapper on the Midnight Machine Gun Rhymes and Alibis album? Andre...",
            num: '7'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/009-nickatina-sayhey.mp3" type="audio/mpeg"></audio>',
            word: 'selling',
            hint: `If you're "slangin" in the streets, you're' doing what in the streets?`,
            num: '8'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/010-nickatina-scotty.mp3" type="audio/mpeg"></audio>',
            word: 'cocaine',
            hint: `In this song, Andre Nickatina say's, "I smoke chewy like a muthaf*ckin nut."  Chewy is weed with what in it or on it?`,
            num: '9'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/011-nickatina-train.mp3" type="audio/mpeg"></audio>',
            word: 'kilogram',
            hint: `In rap and drug culture, a "key" is short for what unit of measurement?`,
            num: '10'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/012-nickatina-ghettostar.mp3" type="audio/mpeg"></audio>',
            word: 'frisco',
            hint: `This is a slang term for the city of San Francisco, California?`,
            num: '11'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/013-ap9-swag.mp3" type="audio/mpeg"></audio>',
            word: 'coco',
            hint: `American rapper AP.9 allegedly banged which celebrity wife?`,
            num: '12'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/014-ap9-moneyup.mp3" type="audio/mpeg"></audio>',
            word: 'bitchkilla',
            hint: `American rapper AP.9 also goes by what alias?`,
            num: '13'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/015-atmosphere-bathroom.mp3" type="audio/mpeg"></audio>',
            word: 'minneapolis',
            hint: `American hip hop duo Atmosphere is from which city in the United States?`,
            num: '14'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/016-az-comeup.mp3" type="audio/mpeg"></audio>',
            word: 'brooklyn',
            hint: `American rapper AZ is from which borough of New York City?`,
            num: '15'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/017-az-payback.mp3" type="audio/mpeg"></audio>',
            word: 'nas',
            hint: `American rapper AZ after partnered with which popular New York Rapper?`,
            num: '16'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/018-az-action.mp3" type="audio/mpeg"></audio>',
            word: 'firm',
            hint: `American rapper AZ is a member of which hip hop group? The...`,
            num: '17'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/019-az-hustler.mp3" type="audio/mpeg"></audio>',
            word: 'az',
            hint: `Anthony Cruz is the real name for which American rapper?`,
            num: '18'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/020-az-paradise.mp3" type="audio/mpeg"></audio>',
            word: 'underrated',
            hint: `American rapper AZ is considered "one of the most _________ rappers of all time."`,
            num: '19'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/021-az-magichour.mp3" type="audio/mpeg"></audio>',
            word: 'clsmooth',
            hint: `Who is the second rapper featured on this song in 1 minute and 30 seconds?`,
            num: '20'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/022-az-fanmail.mp3" type="audio/mpeg"></audio>',
            word: 'illmatic',
            hint: `American rapper AZ was featured first on which album by Nas?`,
            num: '21'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/023-az-gimme.mp3" type="audio/mpeg"></audio>',
            word: 'five',
            hint: `How many boroughs are there in New York City?`,
            num: '22'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/024-az-momoney.mp3" type="audio/mpeg"></audio>',
            word: 'nas',
            hint: `Who starts out rapping first on this song?`,
            num: '23'
        },
        {
            song: '<audio controls style="display:none" autoplay><source src="./assets/audio/025-az-hardest.mp3" type="audio/mpeg"></audio>',
            word: 'sosa',
            hint: `American rapper AZ also goes by what nickname?`,
            num: '24'
        },
    ];
    var ranNum = Math.floor(Math.random()*gamesArr.length);
    var gameHint;
    var gameSong;
    var gamePlay;
    var wordsPicked = [];
        
    function beginTutorial(){
        document.onkeypress = function(e){
            if(e.keyCode == 32 && spacebar == true){
                $.ajax({
                    url: "/hrhlead",
                    method: "GET"
                    }).then(function(data){
                        for (i=0; i < data.length; i++){
                            $('.powerbar').append(`<span class="score" id="score${[i+1]}">${[i + 1]}.&nbsp;${data[i].score}</span><span class="player" id="player${[i+1]}">${data[i].player}</span>`);
                        }
                    });
                document.querySelector('#scoreboard').innerText = `LEADERBOARD`;
                document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
                document.querySelector('#delete').innerText = "";
                document.querySelector('#letters').innerText = "Incorrect Letters Guessed: " + lettersGuessed;
                document.querySelector('#hint').innerText = "Hint:";
                document.querySelector('#hinttext').innerText = "This is where the hint will go to help you figure out the word, name, or phrase represented by underscores below.  This first game is used as a tutorial so you can get the hang (no pun intended) of the game before we start keeping score.  The tutorial is always the same, but from here on out, the word will be chosen randomly.  This tutorial also acts as a tribute to my favorite old school rapper Big L from the D.I.T.C. Crew.  If you can't guess the word from this hint, you are a fool.  But feel free to test out a couple of mistakes before guessing correclty.";
                strCreator();
                hangStart();
                tutorialTime();
                spacebar = false;
                document.onkeyup = grabKeyPressed;
            }
        }
    }

    beginTutorial();


    function grabKeyPressed(){        
        if (tutor==false && !lettersGuessed.includes(event.key) && lettersArr.includes(event.key) && !wordToGuess.includes(event.key)){
            lettersGuessed.push(event.key);
            typeLetters();
            guessCounter();
            document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
            hangChange();
            if (tutor==false && guessesLeft>0){
                badSound(); 
                blinkBlue();
                setTimeout(blinkRed, 300);
                setTimeout(blinkBlue, 600);
                setTimeout(resetPic, 900); 
            } else if (tutor==false && guessesLeft===0){
                !lettersGuessed.push(event.key);
                tutor = true;
                loseSound();
                blinkBlue();
                setTimeout(blinkRed, 300);
                setTimeout(blinkBlue, 600);
                setTimeout(blinkRed, 900);
                setTimeout(blinkBlue, 1200);
                setTimeout(blinkRed, 1500);
                setTimeout(blinkBlue, 1800);
                setTimeout(blinkRed, 2100);
                setTimeout(blinkBlue, 2400);
                setTimeout(readyToPlay, 2400);
            }
        } else if (tutor==false && guessesLeft!==0 && !guessedCorrect.includes(event.key) && wordToGuess.includes(event.key) && lettersArr.includes(event.key) && tutor==false){
            goodCount++;
            strUpdater();
            goodSound();
            blinkPurp();
            setTimeout(blinkWhite, 300);
            setTimeout(blinkPurp, 600);
            setTimeout(resetPic, 900);
            if (goodCount == wordToGuess.length){
                tutor=true;
                setTimeout(blinkWhite, 900);
                setTimeout(winSound, 900);
                setTimeout(blinkPurp, 1200);
                setTimeout(winSoundTwo, 1500);
                setTimeout(blinkWhite, 1500);
                setTimeout(blinkPurp, 1800);
                setTimeout(readyToPlay, 2100);
            }
        } 
    }

    function guessCounter(){
        if (guessesLeft>0){
            guessesLeft--;
        }
    }

    function typeLetters(){
        if (guessesLeft>0){
            document.querySelector("#letters").innerText = "Incorrect Letters Guessed: " + lettersGuessed.toString().substr(0);
        }
    }

    function tutorialTime(){
        if (start == true) {
            document.querySelector('#song').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/audio/000-bigl-eightenuff.mp3" type="audio/mpeg"></audio>';
            start = false;
        }
    }

    function hangStart(){
        if (guessesLeft === 9){
            hangStage = "./assets/images/hung-start.png";
            document.querySelector('#hangstage').src = hangStage;
        }
    }

    function hangChange(){
        if (guessesLeft === 8){
            document.querySelector('#hangstage').src = "./assets/images/hung0.png";
        } else if (guessesLeft === 7){
            document.querySelector('#hangstage').src = "./assets/images/hung1.png"; 
        } else if (guessesLeft === 6){
            document.querySelector('#hangstage').src = "./assets/images/hung2.png"; 
        } else if (guessesLeft === 5){
            document.querySelector('#hangstage').src = "./assets/images/hung3.png"; 
        } else if (guessesLeft === 4){
            document.querySelector('#hangstage').src = "./assets/images/hung4.png"; 
        } else if (guessesLeft === 3){
            document.querySelector('#hangstage').src = "./assets/images/hung5.png"; 
        } else if (guessesLeft === 2){
            document.querySelector('#hangstage').src = "./assets/images/hung6.png"; 
        } else if (guessesLeft === 1){
            document.querySelector('#hangstage').src = "./assets/images/hung7.png"; 
        } else if (guessesLeft === 0){
            document.querySelector('#hangstage').src = "./assets/images/hung.png"; 
        }
    }

    function readyToPlay(){
        var ready = prompt("Well done sucka.  You completed the tutorial.  Easy right?  \n\nIf you want to retry the tutorial, type \"retry\" and press OK.  \n\nIf you're ready to play for real, type \"play\" and press OK. \n\nIf and when you're done playing, exit the window.")
        if (ready == "retry"){
            location.reload();
        } else if (ready == "play"){
            resetGame();
        } else {
            readyToPlay();
        }
    }

    function resetPic(){
        document.querySelector('#header').src = "./assets/images/hoodrap-hangman.png";
    }

    function blinkRed(){
        document.querySelector('#header').src = "./assets/images/hoodrap-hangman-red.png";
    }

    function blinkBlue(){
        document.querySelector('#header').src = "./assets/images/hoodrap-hangman-blue.png";
    }

    function badSound(){
        document.querySelector('#sound').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/sounds/krsone.mp3" type="audio/mpeg"></audio>';
    }

    function loseSound(){
        document.querySelector('#sound').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/sounds/krsone_1.mp3" type="audio/mpeg"></audio>';
    }

    function goodSound(){
        document.querySelector('#sound').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/sounds/nas_1.mp3" type="audio/mpeg"></audio>'; 
    }

    function winSound(){
        document.querySelector('#sound').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/sounds/2pac_6.mp3" type="audio/mpeg"></audio>'; 
    }

    function winSoundTwo(){
        document.querySelector('#sound').innerHTML = '<audio controls style="display:none" autoplay><source src="./assets/sounds/chingy_1.mp3" type="audio/mpeg"></audio>'; 
    }

    function blinkPurp(){
        document.querySelector('#header').src = "./assets/images/hoodrap-hangman-purple.png";
    }

    function blinkWhite(){
        document.querySelector('#header').src = "./assets/images/hoodrap-hangman-white.png";
    }

    function strCreator(){
        for (var i=0; i<wordToGuess.length; i++){
            guessedCorrect[i] = "_";
        }
        document.querySelector('#getlost').innerHTML = `<h3>${guessedCorrect.join(" ")}</h3>`;
    };

    function strUpdater(){
        for (var i=0; i<wordToGuess.length; i++){
            if (wordToGuess[i] == event.key){
                guessedCorrect.splice(i, 1, event.key);
            }
            document.querySelector('#getlost').innerHTML = `<h3>${guessedCorrect.join(" ")}</h3>`;
        }
    }

    function gameOver(){        
        if (wins + losses == gamesArr.length && wins < losses){
            var loser = prompt(`Damn, I knew you was a sucka that didn't know shit about rap.  

            You lost ${losses} times and only won ${wins} times.  You lost more than you won! 
            
            If you want to try again, type "retry" and press OK.
            
            If and when you're done playing, type "exit" and press OK to quit.`)
            if (loser == "retry"){
                location.reload();
            } else if (loser == "exit"){
                window.close();
            } else {
                gameOver();
            }
        }  if (wins + losses == gamesArr.length && wins > losses){
            var winner = prompt(`Damn, I guess you do know a little something about rap.  

            You won ${wins} times and only lost ${losses} times.  You won more than you lost! 
            
            Well, if you want to play again, type "play" and press OK.
            
            If and when you're done playing, type "exit" and press OK to quit.`)
            if (winner == "play"){
                location.reload();
            } else if (winner == "exit"){
                window.close();
            } else {
                gameOver();
            }
        } else resetGame();
    }

    function resetGame(){
        var n = ranNum.toString();
        if (wordsPicked.includes(n)){
            ranNum = Math.floor(Math.random()*gamesArr.length);
            resetGame();
        } else
        goodCount = 1;
        guessesLeft = 9;
        document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
        lettersGuessed = [];
        guessedCorrect = [];
        document.querySelector('#letters').innerText = "Incorrect Letters Guessed: " + lettersGuessed;
        hangStart();
        resetPic();
        wordToGuess = gamesArr[ranNum].word;
        gameHint = gamesArr[ranNum].hint;
        document.querySelector('#hinttext').innerText = gameHint;
        gameSong = gamesArr[ranNum].song;
        document.querySelector('#song').innerHTML = gameSong;
        wordsPicked.push(gamesArr[ranNum].num);
        strCreator();
        gamePlay=true;
        letGameBegin();
    }

    function letGameBegin(){
        document.onkeyup = regularGamePlay;
    }

    function regularGamePlay(){        
        if (gamePlay==true && !lettersGuessed.includes(event.key) && lettersArr.includes(event.key) && !wordToGuess.includes(event.key)){
            lettersGuessed.push(event.key);
            typeLetters();
            guessCounter();
            document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
            hangChange();
            if (gamePlay==true && guessesLeft>0){
                badSound(); 
                blinkBlue();
                setTimeout(blinkRed, 300);
                setTimeout(blinkBlue, 600);
                setTimeout(resetPic, 900); 
            } else if (gamePlay==true && guessesLeft===0){
                document.querySelector('#getlost').innerHTML = `<h3 style="color:red;">${wordToGuess.split("").join(" ")}</h3>`;
                !lettersGuessed.push(event.key);
                gamePlay = false;
                guessedCorrect = [];
                loseSound();
                blinkBlue();
                losses++;
                document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
                ranNum = Math.floor(Math.random()*gamesArr.length);
                setTimeout(blinkRed, 300);
                setTimeout(blinkBlue, 600);
                setTimeout(blinkRed, 900);
                setTimeout(blinkBlue, 1200);
                setTimeout(blinkRed, 1500);
                setTimeout(blinkBlue, 1800);
                setTimeout(blinkRed, 2100);
                setTimeout(blinkBlue, 2400);
                setTimeout(gameOver, 4400);
            }
        } else if (gamePlay==true && guessesLeft!==0 && !guessedCorrect.includes(event.key) && wordToGuess.includes(event.key) && lettersArr.includes(event.key) && gamePlay==true){
            goodCount++;
            strUpdater();
            goodSound();
            blinkPurp();
            setTimeout(blinkWhite, 300);
            setTimeout(blinkPurp, 600);
            setTimeout(resetPic, 900);
            if (guessedCorrect.join("") === wordToGuess){
                gamePlay=false;
                guessedCorrect = [];
                wins++;
                document.querySelector('#score').innerText = "Guesses: " + guessesLeft + "\xa0\xa0\xa0\xa0Wins: " + wins + "\xa0\xa0\xa0\xa0Losses: " + losses;
                ranNum = Math.floor(Math.random()*gamesArr.length);
                setTimeout(blinkWhite, 900);
                setTimeout(winSound, 900);
                setTimeout(blinkPurp, 1200);
                setTimeout(winSoundTwo, 1500);
                setTimeout(blinkWhite, 1500);
                setTimeout(blinkPurp, 1800);
                setTimeout(gameOver, 3800);
            }
        } 
    }
}

loadGame();