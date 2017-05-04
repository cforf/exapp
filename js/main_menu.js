//creating safe namespace
var menu = (function () {

    var menuItems = document.querySelectorAll('#content div');

    console.log('-begin work-');

    function menuOver(e) {

        var menuItem = e.target;
        console.log(menuItem.tagName);
        console.log("You over menu item!");
        console.log(menuItem.getAttribute('id'));
        console.log(menuItem.getElementsByTagName('img')[0]);

        menuItem.getElementsByTagName('img')[0].style.display = 'inline';
    }

    function menuOut(e) {
        console.log("You out of menu item!");
        e.target.getElementsByTagName('img')[0].style.display = 'none';
    }

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('mouseenter', menuOver, false);
        menuItems[i].addEventListener('mouseleave', menuOut, false);
    }



})();
