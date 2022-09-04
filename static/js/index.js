function scrolltop(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
}

document.addEventListener('visibilitychange', function (event) {
    document.title = ((document.hidden) ? "Don't leave, please come back 🥺" : "Parth Kabra")
});