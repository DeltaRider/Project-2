
$.ajax({
url: "/hrhlead",
method: "GET"
}).then(function(data){
    for (i=0; i < data.length; i++){
        $('.left').append(`<div class="marg"><span class="score" id="score${[i+1]}">${[i + 1]}.&nbsp;&nbsp;&nbsp; ${data[i].score}</span><span class="player" id="player${[i+1]}">${data[i].player}</span></marg><br>`)
    }
});

$.ajax({
url: "/dkmlead",
method: "GET"
}).then(function(data){
    for (i=0; i < data.length; i++){
        $('.right').append(`<div class="marg"><span class="score" id="score${[i+1]}">${[i + 1]}.&nbsp;&nbsp;&nbsp; ${data[i].score}</span><span class="player" id="player${[i+1]}">${data[i].player}</span></marg><br>`);
    }
});

$.ajax({
url: "/allscoresh",
method: "GET"
}).then(function(data){
    for (i=0; i < data.length; i++){
        $('.leftTwo').append(`<div class="marg"><span class="score" id="score${[i+1]}">${[i + 1]}.&nbsp;&nbsp;&nbsp; ${data[i].score}</span><span class="player" id="player${[i+1]}">${data[i].player}</span></marg><br>`)
    }
});

$.ajax({
    url: "/allscoresd",
    method: "GET"
    }).then(function(data){
        for (i=0; i < data.length; i++){
            $('.rightTwo').append(`<div class="marg"><span class="score" id="score${[i+1]}">${[i + 1]}.&nbsp;&nbsp;&nbsp; ${data[i].score}</span><span class="player" id="player${[i+1]}">${data[i].player}</span></marg><br>`)
        }
    });

$(document).on('click', "#register", function(){ 
    if ($("#register").attr('pop') == 'n'){
        $(".regpopup-overlay, .regpopup-content").addClass("active");
        $("#register").attr('pop', 'y');
    }
});

$(document).on('click', "#login", function(){ 
    if ($("#login").attr('pop') == 'n'){
        $(".logpopup-overlay, .logpopup-content").addClass("active");
        $("#login").attr('pop', 'y');
    }
});

$(document).on('click', "#exit", function(){ 
    if ($("#register").attr('pop') == 'y'){
        $(".regpopup-overlay, .regpopup-content").removeClass("active");
        $("#register").attr('pop', 'n');
    } if ($("#login").attr('pop') == 'y'){
        $(".logpopup-overlay, .logpopup-content").removeClass("active");
        $("#login").attr('pop', 'n');
    }
});
