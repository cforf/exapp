//creating safe namespace
var menu = (function () {

    var menuItems = document.querySelectorAll('#content div');

    function menuOver(e) {
        e.target.getElementsByTagName('img')[0].style.display = 'inline';
    }

    function menuOut(e) {
        e.target.getElementsByTagName('img')[0].style.display = 'none';
    }

    function menuClick(e) {
        var item;
        if (e.target.tagName === 'DIV') {
            //console.log('- click -' + );
            item = e.target.getAttribute('id');
        } else {
            //console.log(e.target.parentNode.getAttribute('id'));
            item = e.target.parentNode.getAttribute('id');
        }

        console.log(item);

        switch (item) {
            case 'sol1':
                location = "example1.html";
                break;
            case 'sol2':
                location = "example2.html";
                break;
        }

    }

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('mouseenter', menuOver);
        menuItems[i].addEventListener('mouseleave', menuOut);
        menuItems[i].addEventListener('click', menuClick, false);
    }


})();
