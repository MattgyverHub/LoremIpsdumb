/* ************************************************************************ */
// Libs to load
/* ************************************************************************ */
// Prepended scripts like libraries and misc
//@prepros-prepend

// Appended scripts like components and other functions
//@prepros-append libs/like_button.js

console.log("JavaScript libs loaded and ready");


/* ************************************************************************ */
// Init
/* ************************************************************************ */
if (typeof mcbrusselsprouts == 'undefined') {
    var mcbrusselsprouts = {};
}


/* ************************************************************************ */
// 1. Establish Main class
/* ************************************************************************ */
mcbrusselsprouts = {
    tests: {
        //isUsingRetina: window.devicePixelRatio > 1,
        //isTouchDevice: Modernizr.touch,
        //isMobileDevice: $.browser.mobile
    },
    app: (function() {
        return {
            init: function() {
                this.initScripts();
                this.registerEvents();
            },

            initScripts: function() {
                // 1. Get the quote data from json
                // 2. Determine the quote to display & update url
                // 3. Count up the active indicators and set quote navigation
                // 4.
                //mcbrusselsprouts.sproutdata.init();
                //mcbrusselsprouts.setsprout.init();
                //mcbrusselsprouts.google.init();
                //mcbrusselsprouts.sproutpager.init();
                //mcbrusselsprouts.shareTwitter.init();
                //mcbrusselsprouts.shareInstagram.init();
                //mcbrusselsprouts.shareFacebook.init();

                // Modal text
                // Set color scheme with fades and other animations
                //
            },

            registerEvents: function() {

                // Stop the hash, man
                /*
                $(document).on("click", "a[href='#']", function(e) {
                    e.preventDefault();
                });
                */

            }
        };
    })()
};


/* ************************************************************************ */
// Press RUN button on your TG16 controller
/* ************************************************************************ */
//$(function() {
    console.log("Lorem Ipsdumb app ready");
    //mcbrusselsprouts.app.init();
//});

//$(document).ready(function($) {
    //
//});
