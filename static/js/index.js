function scrolltop(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
}
function openNav() {
    document.getElementById("mySidebar").style.width = "70vw"; 
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

const elements = [
    "nav__text",
    "options",
    "sidebar"
]

function find(x){
    let low = 0;
    let high = elements.length - 1;
    while(low <= high){
        const mid = low + (high - low) / 2;
        if(elements[mid] == x){
            return true;
        }
        else if(elements[mid] < x){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return false;
}

window.addEventListener("click", (event) => {
    const isopen = document.getElementById("mySidebar").clientWidth > 0
    if(isopen){
        const id = event.target.className
        if(!find(id)){
            document.getElementById("mySidebar").style.width = "0"
        }
    }
})

function f(s){
    return $(s).val()
}

document.getElementById("contact").addEventListener("submit", ()=>{
    $.ajax({
        type:'POST',
        url:'/',
        data:{
            name: f("#name"),
            email: f("#email"),
            msg: f("#msg")
        },
    })
    $(".form")[0].reset()
    swal("", "Thanks for submitting the form the form, I will get back to you shortly!", "../static/img/swal_ok.png")
})
