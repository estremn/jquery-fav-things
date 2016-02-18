$(document).ready(function () {
    $(function () {
        $('p').remove();
    });

    $(function () {
        $('body').append('<header><h1> These are my favorite things about JavaScript </h1></header>');
    });

    //Jquery
    $(function () {
        $('header').append('<div id="1"><h2 class="h2" id="jquery">Jquery</h2></div>');
    });


    //Use
    $(function () {
        $('header').append('<div id="2"><h2 class="h2" id="use">Use</h2></div>');
    });


    //Versatility
    $(function () {
        $('header').append('<div id="3"><h2 class="h2" id="versatility">Versatility</h2></div>');
    });


    //Jquery
    $(function () {
        $('#jquery').after('<p id="jqueryDef">Jquery makes everything so much easier, neater, and faster. <br> Though I will add, making an entire site, only using Jquery, is quite a pain...</p>');
    });

    $(function () {
        $('#jqueryDef').after('<p><a id="jqueryPic" href="jqueryLogo.png"><img src="jqueryLogo.png" height="150" width="200" alt="Jquery Logo"> </a></p>');
    });


    //Use
    $(function () {
        $('#use').after('<p id="useDef">I like how you can use JavaScript to customize, animate, and basically manipulate your site to suit your desires. <br> Another cool thing is how widely it is used.</p>');
    });

    $(function () {
        $('#useDef').after('<p><a id="usePic" href="javascriptUse.png"><img src="javascriptUse.png" height="300" width="600" alt="Javascript Use"> </a></p>');
    });


    //Versatility
    $(function () {
        $('#versatility').after('<p id="versatilityDef">You can use a variety of different keywords and methods to reach the same end result. Though sometimes this can lead to unneeded confusion.</p>');
    });


/*    //Hide
    $(function () {
        $('p').hide();
    });

    //Event
    $('#h2').on('click', function () {
        $('#1*').show();
    });
*/


});


/*
Jquery Logo
http://taswar.zeytinsoft.com/wp-content/uploads/2014/05/jquery-logo.png

Use Logo
http://blog.pivotal.io/wp-content/uploads/2012/04/githubPopularLanguages.png
*/
