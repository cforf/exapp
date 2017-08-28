//creating safe namespace
var menu = (function () {

    var menuItems = document.querySelectorAll('#content div');

    function menuOver(e) {
        e.target.getElementsByTagName('img')[0].style.display = 'inline';
        e.target.style.cursor = 'pointer';
    }

    function menuOut(e) {
        e.target.getElementsByTagName('img')[0].style.display = 'none';
    }

    function menuClick(e) {
        var item;

        if (e.target.tagName === 'DIV') {
            item = e.target.getAttribute('id');
        } else {
            console.log('inside div');

            var elem = e.target;

            do {
                elem = elem.parentNode;
                console.log(elem.tagName);
            } while (elem.tagName != 'DIV');

            //console.log('elem = ' + elem);

            item = elem.getAttribute('id');
        }

        console.log(item);

        switch (item) {
            case 'sol1':
                location = "example1.html";
                break;
            case 'sol2':
                location = "example2.html";
                break;
            case 'sol3':
                location = "/example3/dist/index.html";
                break;
        }
    }

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('mouseenter', menuOver);
        menuItems[i].addEventListener('mouseleave', menuOut);
        menuItems[i].addEventListener('click', menuClick);
    }


})();
