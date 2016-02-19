var preID;
var newUserID;
var newUserName;
var newUserEmail;
var newUserLocation;
var newUserLat;
var newUserLng;

var publicRadio;
var privateRadio;
var meetingTypes;
var meetingTopic;
var meetingHosted;
var meetingPlace;
var meetingDate;
var meetingStart;
var meetingFinish;
var meetingDescription;
var meetingInvited;
var place;
var todayDate;
var MeetingDateIndex;
var theUserName;

var usersInvitedArray;
var invitedUser1;
var invitedUser2;
var invitedUser3;
var invitedUser4;
var invitedUser5;

var loginFieldinput;
var loginFieldValue;

var meetingCounts;
var meetingDateConverted;
var finalCountDownPu;
var finalCountDownPr;
var finalCountDown1;
var finalCountDown2;
var finalCountDown3;
var finalCountDown4;
var finalCountDown5;

var publicMeetingsObject;
var privateMeetingsObject;

var marker;
var geocoder;
var map;

function newUserRegistering() {
    preID = document.getElementById('txtRegEmail').value;
    newUserID = (preID.replace(/[^a-zA-Z0-9 ]/g, ""));
    newUserName = document.getElementById('txtRegName').value;
    newUserEmail = document.getElementById('txtRegEmail').value;
    newUserLocation = document.getElementById('txtRegLocation').value;
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('txtRegLocation').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            newUserLat = results[0].geometry.location.lat();
            newUserLng = results[0].geometry.location.lng();
        }
    });
}

function newMeetingAdd() {
    var ttref = new Firebase("https://meetmeup-001.firebaseio.com/");
    loginFieldinput = ttref.getAuth().password.email;
    loginFieldValue = (loginFieldinput.replace(/[^a-zA-Z0-9 ]/g, ""));
    meetingTypes = document.getElementById('meetingTypeChosen').value;
    meetingTopic = document.getElementById('meetingTopic').value;
    meetingHosted = document.getElementById('meetingHosted').value;
    meetingDate = document.getElementById('meetingDate').value;
    meetingStart = document.getElementById('meetingStart').value;
    meetingFinish = document.getElementById('meetingFinish').value;
    meetingDescription = document.getElementById('meetingDescription').value;
    meetingInvited = document.getElementById('meetingInvited').value;
    meetingDateConverted = (meetingDate.replace(/[^a-zA-Z0-9 ]/g, ""));
    
    if(document.getElementById('meetingPublicRadio').checked) {
        var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/meetings/' + meetingDateConverted);        
        finalCountDownPu = 1;   
        meetingCounts = myMeetingCountRef.on("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                finalCountDownPu = finalCountDownPu +1;
            });
        });

        var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/meetings/' + meetingDateConverted + '/' + finalCountDownPu);
        myMeetingRef.update({
            author: loginFieldinput,
            type: meetingTypes,
            hostedBy: meetingHosted,
            topic: meetingTopic,
            date: meetingDate,
            start: meetingStart,
            finish: meetingFinish,
            description: meetingDescription,
            invited: meetingInvited,
            placeID: place.place_id,
            placeName: place.name,
            lat: place.geometry.location.lat(),
            lon: place.geometry.location.lng(),
            address: place.formatted_address
        }); 
    } else if(document.getElementById('meetingPrivateRadio').checked) {
        var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + loginFieldValue + '/meetings/' + meetingDateConverted);
        finalCountDownPr = 1;
        meetingCounts = myMeetingCountRef.on("value", function (snapshot) {           
            snapshot.forEach(function(childSnapshot) {
                finalCountDownPr = finalCountDownPr +1;
            });
        });
                
        var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + loginFieldValue + '/meetings/' + meetingDateConverted + '/' + finalCountDownPr);
        myMeetingRef.update({
            author: loginFieldinput,
            type: meetingTypes,
            hostedBy: meetingHosted,
            topic: meetingTopic,
            date: meetingDate,
            start: meetingStart,
            finish: meetingFinish,
            description: meetingDescription,
            invited: meetingInvited,
            placeID: place.place_id,
            placeName: place.name,
            lat: place.geometry.location.lat(),
            lon: place.geometry.location.lng(),
            address: place.formatted_address
        });     

        usersInvitedArray = meetingInvited.split(",");
        if (typeof usersInvitedArray[0] != 'undefined' || typeof usersInvitedArray[0] != null){
            invitedUser1=(usersInvitedArray[0].replace(/[^a-zA-Z0-9 ]/g, ""));
            var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser1 + '/meetings/' + meetingDateConverted);
            finalCountDown1 = 1;
            meetingCounts = myMeetingCountRef.on("value", function (snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    finalCountDown1 = finalCountDown1 +1;
                });
            });

            var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser1 + '/meetings/' + meetingDateConverted + '/' + finalCountDown1);
            myMeetingRef.update({
                author: loginFieldinput,
                type: meetingTypes,
                hostedBy: meetingHosted,
                topic: meetingTopic,
                date: meetingDate,
                start: meetingStart,
                finish: meetingFinish,
                description: meetingDescription,
                invited: meetingInvited,
                placeID: place.place_id,
                placeName: place.name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
                address: place.formatted_address
            }); 
        }

        if (typeof usersInvitedArray[1] != 'undefined' || typeof usersInvitedArray[1] != null){
            invitedUser2=(usersInvitedArray[1].replace(/[^a-zA-Z0-9 ]/g, ""));
            var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser2 + '/meetings/' + meetingDateConverted);
            finalCountDown2 = 1;
            meetingCounts = myMeetingCountRef.on("value", function (snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    finalCountDown2 = finalCountDown2 +1;
                });
            });

            var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser2 + '/meetings/' + meetingDateConverted + '/' + finalCountDown2);
            myMeetingRef.update({
                author: loginFieldinput,
                type: meetingTypes,
                hostedBy: meetingHosted,
                topic: meetingTopic,
                date: meetingDate,
                start: meetingStart,
                finish: meetingFinish,
                description: meetingDescription,
                invited: meetingInvited,
                placeID: place.place_id,
                placeName: place.name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
                address: place.formatted_address
            });
        }

        if (typeof usersInvitedArray[2] != 'undefined' || typeof usersInvitedArray[2] != null){
            invitedUser3=(usersInvitedArray[2].replace(/[^a-zA-Z0-9 ]/g, ""));
            var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser3 + '/meetings/' + meetingDateConverted);
            finalCountDown3 = 1;
            meetingCounts = myMeetingCountRef.on("value", function (snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    finalCountDown3 = finalCountDown3 +1;
                });
            });

            var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser3 + '/meetings/' + meetingDateConverted + '/' + finalCountDown3);
            myMeetingRef.update({
                author: loginFieldinput,
                type: meetingTypes,
                hostedBy: meetingHosted,
                topic: meetingTopic,
                date: meetingDate,
                start: meetingStart,
                finish: meetingFinish,
                description: meetingDescription,
                invited: meetingInvited,
                placeID: place.place_id,
                placeName: place.name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
                address: place.formatted_address
            });
        }

        if (typeof usersInvitedArray[3] != 'undefined' || typeof usersInvitedArray[3] != null){
            invitedUser4=(usersInvitedArray[3].replace(/[^a-zA-Z0-9 ]/g, ""));
            var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser4 + '/meetings/' + meetingDateConverted);
            finalCountDown4 = 1;
            meetingCounts = myMeetingCountRef.on("value", function (snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    finalCountDown4 = finalCountDown4 +1;
                });
            });

            var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser4 + '/meetings/' + meetingDateConverted + '/' + finalCountDown4);
            myMeetingRef.update({
                author: loginFieldinput,
                type: meetingTypes,
                hostedBy: meetingHosted,
                topic: meetingTopic,
                date: meetingDate,
                start: meetingStart,
                finish: meetingFinish,
                description: meetingDescription,
                invited: meetingInvited,
                placeID: place.place_id,
                placeName: place.name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
                address: place.formatted_address
            });
        }

        if (typeof usersInvitedArray[4] != 'undefined' || typeof usersInvitedArray[4] != null){
            invitedUser5=(usersInvitedArray[4].replace(/[^a-zA-Z0-9 ]/g, ""));
            var myMeetingCountRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser5 + '/meetings/' + meetingDateConverted);
            finalCountDown5 = 1;
            meetingCounts = myMeetingCountRef.on("value", function (snapshot) {                
                snapshot.forEach(function(childSnapshot) {
                    finalCountDown5 = finalCountDown5 +1;
                });
            });

            var myMeetingRef = new Firebase('https://meetmeup-001.firebaseio.com/users/' + invitedUser5 + '/meetings/' + meetingDateConverted + '/' + finalCountDown5);
            myMeetingRef.update({
                author: loginFieldinput,
                type: meetingTypes,
                hostedBy: meetingHosted,
                topic: meetingTopic,
                date: meetingDate,
                start: meetingStart,
                finish: meetingFinish,
                description: meetingDescription,
                invited: meetingInvited,
                placeID: place.place_id,
                placeName: place.name,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng(),
                address: place.formatted_address
            });
        }                  
    } else {
        alert("Nothing here");
    }
    map.setCenter(thisUserCoordObject);
}

//<![CDATA[
window.onload=function(){
(function (jQuery, Firebase, Path) {
    "use strict";
    // the main firebase reference
    var rootRef = new Firebase('https://meetmeup-001.firebaseio.com/');

    // pair our routes to our form elements and controller
    var routeMap = {
        '#/': {
            form: 'frmLogin',
            controller: 'login'
        },
            '#/logout': {
            form: 'frmLogout',
            controller: 'logout'
        },
            '#/register': {
            form: 'frmRegister',
            controller: 'register'
        },
            '#/aside-meetings': {
            form: 'frmProfile',
            controller: 'aside-meetings',
            authRequired: true // must be logged in to get here
        },
    };

    // create the object to store our controllers
    var controllers = {};
    // store the active form shown on the page
    var activeForm = null;
    var alertBox = $('#alert');

    function routeTo(route) {
        window.location.href = '#/' + route;
    }

    // Handle Email/Password login
    // returns a promise
    function authWithPassword(userObj) {
        var deferred = $.Deferred();
        rootRef.authWithPassword(userObj, function onAuth(err, user) {
            if (err) {
                deferred.reject(err);
            }
            if (user) {
                deferred.resolve(user);
            }
        });
        return deferred.promise();
    }

    // create a user but not login
    // returns a promsie
    function createUser(userObj) {
        var deferred = $.Deferred();
        rootRef.createUser(userObj, function (err) {
            if (!err) {
                deferred.resolve();
            } else {
                deferred.reject(err);
            }
        });
        return deferred.promise();
    }

    // Create a user and then login in
    // returns a promise
    function createUserAndLogin(userObj) {
        return createUser(userObj)
            .then(function () {
                var myUserRef=rootRef.child("users/" + newUserID);
                myUserRef.update({
                        name: newUserName,
                        email: newUserEmail,
                        mylat: newUserLat,
                        mylng: newUserLng
                });
            return authWithPassword(userObj);
        });
    }

    // route to the specified route if sucessful
    // if there is an error, show the alert
    function handleAuthResponse(promise, route) {
        $.when(promise)
            .then(function (authData) {
            // route
            routeTo(route);
        }, function (err) {
            alert(err);
            // pop up error
            showAlert({
                title: err.code,
                detail: err.message,
                className: 'alert-danger'
            });
        });
    }

    // options for showing the alert box
    function showAlert(opts) {
        var title = opts.title;
        var detail = opts.detail;
        var className = 'alert ' + opts.className;
        alertBox.removeClass().addClass(className);
        alertBox.children('#alert-title').text(title);
        alertBox.children('#alert-detail').text(detail);
    }

    /// Controllers
    ////////////////////////////////////////

    controllers.login = function (form) {
        // Form submission for logging in
        form.on('submit', function (e) {
            var userAndPass = $(this).serializeObject();
            var loginPromise = authWithPassword(userAndPass);
            e.preventDefault();
            handleAuthResponse(loginPromise, 'aside-meetings');
        });
    };

    // logout immediately when the controller is invoked
    controllers.logout = function (form) {
        rootRef.unauth();
        routeTo('login');
        location.reload();
    };

    controllers.register = function (form) {
        // Form submission for registering
        form.on('submit', function (e) {
            var userAndPass = $(this).serializeObject();
            var loginPromise = createUserAndLogin(userAndPass);
            e.preventDefault();
            handleAuthResponse(loginPromise, 'aside-meetings');
        });
    };

    controllers.profile = function (form) {
        // Check the current user
        var user = rootRef.getAuth();
        var userRef;
        // If no current user send to register page
        if (!user) {
            routeTo('register');
            return;
        }

        // Load user info
        userRef = rootRef.child('users').child(user.uid);
        userRef.once('value', function (snap) {
            var user = snap.val();
            if (!user) {
                return;
            }

            // set the fields
            form.find('#txtName').val(user.name);
            form.find('#ddlDino').val(user.favoriteDinosaur);
        });

        // Save user's info to Firebase
        form.on('submit', function (e) {
            e.preventDefault();
            var userInfo = $(this).serializeObject();
            userRef.set(userInfo, function onComplete() {
                // show the message if write is successful
                showAlert({
                    title: 'Successfully saved!',
                    detail: 'You are still logged in',
                    className: 'alert-success'
                });
            });
        });
    };

    /// Routing
    ////////////////////////////////////////

    // Handle transitions between routes
    function transitionRoute(path) {
        // grab the config object to get the form element and controller
        var formRoute = routeMap[path];
        var currentUser = rootRef.getAuth();
        // if authentication is required and there is no
        // current user then go to the register page and
        // stop executing
        if (formRoute.authRequired && !currentUser) {
            routeTo('register');
            return;
        }

        // wrap the upcoming form in jQuery
        var upcomingForm = $('#' + formRoute.form);

        // if there is no active form then make the current one active       
        if (!activeForm) {
            activeForm = upcomingForm;
        }

        // hide old form and show new form
        activeForm.hide();
        upcomingForm.show().hide().fadeIn(750);

        // remove any listeners on the soon to be switched form
        activeForm.off();

        // set the new form as the active form
        activeForm = upcomingForm;

        // invoke the controller
        controllers[formRoute.controller](activeForm);
    }

    // Set up the transitioning of the route
    function prepRoute() {
        transitionRoute(this.path);
    }

    /// Routes
    ///  #/         - Login
    //   #/logout   - Logut
    //   #/register - Register
    //   /#aside-meetings  - Profile

    Path.map("#/").to(prepRoute);
    Path.map("#/logout").to(prepRoute);
    Path.map("#/register").to(prepRoute);
    Path.map("#/meetings.html").to(prepRoute);
    Path.root("#/");

    /// Initialize
    ////////////////////////////////////////


    $(function () {
        // Start the router
        Path.listen();

        // whenever authentication happens send a popup
        rootRef.onAuth(function globalOnAuth(authData) {
            if (authData) {
                showAlert({
                    title: 'Logged in!',
                    detail: 'Using ' + authData.provider,
                    className: 'alert-success'
                });
                $(".login_popup").hide();
                $(".logout_call").show();
                $(".login_call").hide();
                $(".auth-only").show();
                $(".divToLogin").hide();
                $(".aside-index").hide();
                $(".aside-howto").hide();
                $(".aside-about").hide();
                $(".aside-createnew").hide();        
                $(".aside-meetings").show();
                $(".mobile-menu-div").hide();

                var ttref = new Firebase("https://meetmeup-001.firebaseio.com/");
                var smthnew = ttref.getAuth().password.email;
                var smthnew2 = (smthnew.replace(/[^a-zA-Z0-9 ]/g, ""));
                var ttref2 = new Firebase("https://meetmeup-001.firebaseio.com/users/" + smthnew2);
                var thisUserLat;
                var thisUserLng;
                var thisUserCoordObject;
                var andThisRef = ttref2.on("value", function (snapshot) {
                    theUserName = snapshot.val().name;
                    $('#welcome-message').append(', ' + theUserName);
                    thisUserLat = snapshot.val().mylat;                   
                    thisUserLng = snapshot.val().mylng;
                    if (thisUserLat && thisUserLng) {
                        thisUserCoordObject = {lat:thisUserLat, lng:thisUserLng};
                        map.setCenter(thisUserCoordObject);
                    }
                });

                var b = myTodayDate();
                MeetingDateIndex = b.replace(/[^a-zA-Z0-9 ]/g, ""); 
                var pubmeetingsRef = rootRef.child('meetings/' + MeetingDateIndex);
                pubmeetingsRef.once('value', function (snap) {
                    snap.forEach(function(childSnapshot) {
                        var myContent=childSnapshot.val();
                        $('.list-of-public-meetings').append('<div class="meeting-box"><h4><b>' + myContent.topic +': ' + myContent.type + '</b></h4><p>Created by ' + myContent.author + ', hosted by ' + myContent.hostedBy + '</p><p>On ' + myContent.date + ', from ' + myContent.start + ' to ' + myContent.finish + '</p><p>At ' + myContent.placeName + ', ' + myContent.address + '</p><p>Additional info: ' + myContent.description + '</p></div><br>');
                        publicMeetingsObject={lat:myContent.lat, lng:myContent.lon};

                        var myinfowindow = new google.maps.InfoWindow();
                        var myymarker = new google.maps.Marker({
                            position: publicMeetingsObject,
                            icon: 'img/beratungsstelle.png'
                        });
                        myymarker.setMap(map);
                        myymarker.addListener('click', function() {
                            myinfowindow.setContent('<div><strong>' + myContent.topic + ' ' + myContent.type + '</strong></br>At ' + myContent.placeName + ' (' + myContent.address + ')<br>On ' + myContent.date + ', ' + myContent.start + '</div>');
                            myinfowindow.open(map, myymarker); 
                        });
                    });
                });
                var ttref = new Firebase("https://meetmeup-001.firebaseio.com/");
                loginFieldinput = ttref.getAuth().password.email;
                loginFieldValue = (loginFieldinput.replace(/[^a-zA-Z0-9 ]/g, ""));
                var privmeetingsRef = rootRef.child('users/'+ loginFieldValue + '/meetings/' + MeetingDateIndex);
                privmeetingsRef.once('value', function (snap) {
                    snap.forEach(function(childSnapshot) {
                        var myContent2=childSnapshot.val();
                        $('.list-of-private-meetings').append('<div class="meeting-box"><h4><b>' + myContent2.topic +': ' + myContent2.type + '</b></h4><p>Created by ' + myContent2.author + ', hosted by ' + myContent2.hostedBy + '</p><p>On ' + myContent2.date + ', from ' + myContent2.start + ' to ' + myContent2.finish + '</p><p>At ' + myContent2.placeName + ', ' + myContent2.address + '</p><p>Invited persons: ' + myContent2.invited + '</p><p>Additional info: ' + myContent2.description + '</p></div><br>');
                        privateMeetingsObject={lat:myContent2.lat, lng:myContent2.lon};

                        var my2infowindow = new google.maps.InfoWindow();
                        var my2ymarker = new google.maps.Marker({
                            position: privateMeetingsObject,
                            icon: 'img/beratungsstelle2.png'
                        });
                        my2ymarker.setMap(map);
                        my2ymarker.addListener('click', function() {
                            my2infowindow.setContent('<div><strong>' + myContent2.topic + ' ' + myContent2.type + '</strong></br>At ' + myContent2.placeName + ' (' + myContent2.address + ')<br>On ' + myContent2.date + ', ' + myContent2.start + '</div>');
                            my2infowindow.open(map, my2ymarker); 
                        });
                    });
                });
            } else {
                showAlert({
                    title: 'You are not logged in',
                    detail: '',
                    className: 'alert-info'
                });
            }
        });
    });
}(window.jQuery, window.Firebase, window.Path))
}//]]> 

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.45, lng: 30.51},
    zoom: 13
  });
  geocoder = new google.maps.Geocoder();
  var input = /** @type {!HTMLInputElement} */(
      document.getElementById('meetingPlace'));

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
//    marker.setVisible(false);
    place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });
}

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser");
    }
}

$(document).ready(function() {
    $(".all-meeting-link").click(function(e) {
        $(".location-select").show();
    });
});

$(document).ready(function() {
    $(".location-get-btn").click(function(e) {
        $(".location-select").hide();
    });
});

function myTodayDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    todayDate = year + "-" + month + "-" + day;
    return todayDate;
};

function locateAddress(address) {
      if (geocoder) {
        geocoder.getLatLng(
          address,
          function(point) {
            if (!point) {
              alert(address + " not found");
            } else {
              map.setCenter(point, 15);
            }
          }
        );
      }
    }

$(document).ready(function() {
    $("#meetingPublicRadio").click(function(e) {
        $("#invited-friends").hide();
        $("#meetingInvited").removeProp('required');
    });
});

$(document).ready(function() {
    $("#meetingPrivateRadio").click(function(e) {
        $("#invited-friends").show();
        $("#meetingInvited").prop('required', true);
    });
});

function meetingTypeCheck() {
    tt=document.getElementById('meetingTypeChosen');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingTypeChosen').setCustomValidity('type is empty');
        $(".meetingTypeFeedback").append("Choose the meeting type, please");
        $(".meetingTypeOk").hide();
    }
    else{
        $(".meetingTypeOk").show();
    }
}

function meetingHostedCheck() {
    tt=document.getElementById('meetingHosted');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingHosted').setCustomValidity('host is empty');
        $(".meetingHostedFeedback").append("Please, fill the host of meeting");
        $(".meetingHostedOk").hide();
    }
    else{
        $(".meetingHostedOk").show();
    }
}

function meetingInvitedCheck() {
    tt=document.getElementById('meetingInvited');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingInvited').setCustomValidity('list of invited friends is empty');
        $(".meetingInvitedFeedback").append("Put the invited friend emails, separated by comma, 5 maximum");
        $(".meetingInvitedOk").hide();
    }
    else{
        $(".meetingInvitedOk").show();
    }
}

function meetingTopicCheck() {
    tt=document.getElementById('meetingTopic');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingTopic').setCustomValidity('topic is empty');
        $(".meetingTopicFeedback").append("What is the topic of meeting?");
        $(".meetingTopicOk").hide();
    }
    else{
        $(".meetingTopicOk").show();
    }
}

function meetingPlaceCheck() {
    tt=document.getElementById('meetingPlace');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingPlace').setCustomValidity('place for meeting is not chosen');
        $(".meetingPlaceFeedback").append("Choose the location of the meeting, please");
        $(".meetingPlaceOk").hide();
    }
    else{
        $(".meetingPlaceOk").show();
    }
}

function meetingDateCheck() {
    tt=document.getElementById('meetingDate');
    var mdate = new Date();
    var mday = mdate.getDate();
    if (mday < 10) {
        mday = '0' + mday;
    }
    var mmonth = mdate.getMonth() + 1;
    if (mmonth < 10) {
        mmonth = '0' + mmonth;
    }
    var myear = mdate.getFullYear();
    var mtoday = myear + "-" + mmonth + "-" + mday; 
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingDate').setCustomValidity('date is empty');
        $(".meetingDateFeedback").append("Choose the correct date of the meeting");
        $(".meetingDateOk").hide();
    }
    else if (tt.value < mtoday) {
        document.getElementById('meetingDate').setCustomValidity('date is empty');
        $(".meetingDateFeedback").append("Date can not be earlier than today");
        $(".meetingDateOk").hide();
    }
    else{
        $(".meetingDateOk").show();
    }
}

function meetingTimeCheck() {
    tt=document.getElementById('meetingStart');
    tu=document.getElementById('meetingFinish');
    var tdate = new Date();
    var nowhours = tdate.getHours();
    var nowminutes = tdate.getMinutes();
    var ttarray = tt.value.split(":");
    var tuarray = tu.value.split(":");
    var tthours =  ttarray[0];
    var ttminutes = ttarray[1];
    var tuhours =  tuarray[0];
    var tuminutes = tuarray[1];
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('meetingStart').setCustomValidity('start time is empty');
        $(".meetingTimeFeedback").append("Choose the correct time of the meeting");
        $(".meetingTimeOk").hide();
    }
    else if (typeof tu.value == undefined || typeof tu.value == null || tu.value == "") {
        document.getElementById('meetingFinish').setCustomValidity('finish time is empty');
        $(".meetingTimeFeedback").append("Choose the correct time of the meeting");
        $(".meetingTimeOk").hide();
    }
    else{
        $(".meetingTimeOk").show();
    }
}

function txtEmailCheck() {
    tt=document.getElementById('txtEmail');
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtEmail').setCustomValidity('email field is empty');
        $(".txtEmailFeedback").append("Enter your email, please");
    }
    else if (!emailPattern.test(tt.value)) {
        document.getElementById('txtEmail').setCustomValidity('email is incorrect');
        $(".txtEmailFeedback").append("Please, correct your email address");
    }
}

function txtPassCheck() {
    tt=document.getElementById('txtPass');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtPass').setCustomValidity('password field is empty');
        $(".txtPassFeedback").append("Enter your password, please");
    }
}

function txtRegNameCheck() {
    tt=document.getElementById('txtRegName');
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtRegName').setCustomValidity('name is absent');
        $(".txtRegNameFeedback").append("Please, enter your name");
    }
}

function txtRegEmailCheck() {
    tt=document.getElementById('txtRegEmail');
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtRegEmail').setCustomValidity('email field is empty');
        $(".txtRegEmailFeedback").append("Enter your email, please");
    }
    else if (!emailPattern.test(tt.value)) {
        document.getElementById('txtRegEmail').setCustomValidity('email is incorrect');
        $(".txtRegEmailFeedback").append("Please, correct your email address");
    }
}

function txtRegPassCheck() {
    tt=document.getElementById('txtRegPass');
    var passPattern=/[A-Za-z0-9\!\@\#\$\%\^\&\*\.\-]/;
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtRegPass').setCustomValidity('password field is empty');
        $(".txtRegPassFeedback").append("Enter your password, please");
    }
    else if (!passPattern.test(tt.value)) {
        document.getElementById('txtRegPass').setCustomValidity('password format is incorrect');
        $(".txtRegPassFeedback").append("Please, use only numbers, letters, and the following special symbols in your password: ! @ # $ % ^ & * . -");
    }
    else if(tt.value.length < 6 || tt.value.length >256) {
        document.getElementById('txtRegPass').setCustomValidity('password length is incorrect');
        $(".txtRegPassFeedback").append("Password length should be 6 symbols minimum and 256 symbols maximum");
    }
}

function txtRegRePassCheck() {
    tt=document.getElementById('txtRegRePass');
    tu=document.getElementById('txtRegPass');
    var passPattern=/[A-Za-z0-9\!\@\#\$\%\^\&\*\.\-]/;;
    if (typeof tt.value == undefined || typeof tt.value == null || tt.value == "") {
        document.getElementById('txtRegRePass').setCustomValidity('repeated password field is empty');
        $(".txtRegRePassFeedback").append("Please re-enter your password");
    }
    else if (!passPattern.test(tt.value)) {
        document.getElementById('txtRegRePass').setCustomValidity('password format is incorrect');
        $(".txtRegRePassFeedback").append("Please, use only numbers, letters, and the following special symbols in your password: ! @ # $ % ^ & * . -");
    }
    else if(tt.value.length < 6 || tt.value.length >256) {
        document.getElementById('txtRegRePass').setCustomValidity('password length is incorrect');
        $(".txtRegRePassFeedback").append("Password length should be 6 symbols minimum and 256 symbols maximum");
    }
    else if(tt.value!=tu.value) {
        document.getElementById('txtRegRePass').setCustomValidity('passwords does not match');
        $(".txtRegRePassFeedback").append("Your passwords are different. Please correct them");
    } 
}

  $(document).ready(function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;       
    $("#meetingDate").attr("value", today);
});

$(document).ready(function() {     
  var d = new Date(),        
      h = d.getHours(),
      m = "00";
  var start= h + 2;
  var finish= h + 4
  if (start < 10) start = '0' + start;
  if (start == 24) start = '00'; 
  if (start > 24) start = '0' + (start-24); 
  if (finish < 10) finish = '0' + finish;
  if (finish == 24) finish = '00';  
  if (finish > 24) finish = '0' + (finish-24);
  var starttime= start + ':' + m;
  var finishtime= finish + ':' + m;
  $("#meetingStart").attr("value", starttime);
  $("#meetingFinish").attr("value", finishtime);
});







