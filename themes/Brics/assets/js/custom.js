(function ($){
    "use script";
    // get active menu
    let navMenuItems = document.querySelectorAll(".rd-nav-item");
    Array.from(navMenuItems).map((item, index) => {
        let accessLocation = window.location.pathname.split("/");
        accessLocation = accessLocation.filter((el) => {
            return el !== "" && typeof el !== 'undefined';
        });
        let navUrlPath = item.querySelector("a").getAttribute("href").split("/");
        navUrlPath = navUrlPath.filter((el) => {
            return el !== "" && typeof el !== 'undefined';
        });
        navUrlPath = navUrlPath[navUrlPath.length -1];
        accessLocation.find(element => {
            if(element === navUrlPath){
                navMenuItems[index].classList.add('active')
            } else {
                navMenuItems[index].classList.remove('active')
            }

        })
    })
    let isActive = Array.from(navMenuItems).map((item, index) => {
        return  item.classList.contains("active")
    });
    isActive = isActive.filter((el) => {
        return el !== false && typeof el !== 'undefined';
    });
    if (isActive.length === 0){
        navMenuItems[0].classList.add('active')
    }
})(jQuery)
