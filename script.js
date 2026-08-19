console.log("Portfolio loaded successfully!");


// Change the page title when the user leaves the tab
document.addEventListener("visibilitychange", function () {

    if (document.hidden) {
        document.title = "Come back! 👋";
    } else {
        document.title = "Vincent | Developer";
    }

});