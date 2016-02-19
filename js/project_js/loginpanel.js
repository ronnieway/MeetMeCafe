$(document).ready(function() {
    $(".login_call").click(function(e) {
        $(".login_popup").show();    
    });
});

$(document).ready(function() {
    $(".close_overlay").click(function(e) {
        $(".login_popup").hide();
    });
});

$(document).ready(function() {
    $(".logout_call").click(function(e) {
        $(".logout_call").hide();
        $(".auth-only").hide();
        $(".login_call").show();
        $(".login_popup").hide();
        $(".aside-index").show();
        $(".divToLogin").show();
        $(".mobile-menu-div").hide();

    });
});

$(document).ready(function() {
    $(".register_link").click(function(e) {
        $(".login_register1").hide();
        $(".login_register2").show();
    });
});

$(document).ready(function() {
    $(".login_link").click(function(e) {
        $(".login_register2").hide();
        $(".login_register1").show();
    });
});

$(document).ready(function() {
    $(".mymeetings-menu").click(function(e) {
        $(".aside-index").hide();
        $(".aside-howto").hide();
        $(".aside-about").hide();
        $(".aside-createnew").hide();        
        $(".aside-meetings").show();
        $(".mobile-menu-div").hide();
    });
});

$(document).ready(function() {
    $(".howitworks-menu").click(function(e) {
        $(".aside-index").hide();
        $(".aside-about").hide();
        $(".aside-createnew").hide();        
        $(".aside-meetings").hide();
        $(".aside-howto").show();
        $(".mobile-menu-div").hide();
    });
});

$(document).ready(function() {
    $(".about-menu").click(function(e) {
        $(".aside-index").hide();
        $(".aside-createnew").hide();        
        $(".aside-meetings").hide();
        $(".aside-howto").hide();
        $(".aside-about").show();
        $(".mobile-menu-div").hide();
    });
});

$(document).ready(function() {
    $(".addmeeting-menu").click(function(e) {
        $(".aside-index").hide();      
        $(".aside-meetings").hide();
        $(".aside-howto").hide();
        $(".aside-about").hide();
        $(".aside-createnew").show(); 
        $(".mobile-menu-div").hide();
    });
});

$(document).ready(function() {
    $(".name").click(function(e) {   
        $(".aside-meetings").hide();
        $(".aside-howto").hide();
        $(".aside-about").hide();
        $(".aside-createnew").hide();
        $(".aside-index").show();
        $(".mobile-menu-div").hide();
    });
});

$(document).ready(function() {
    $(".appoint-btn").click(function(e) {
        $(".login_popup").show();
    });
});

$(document).ready(function() {
    $(".mob-menu").click(function(e) {
        $(".mobile-menu-div").show();
    });
});

$(document).mouseup(function (e)
{
    var container = $(".mobile-menu-div");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});