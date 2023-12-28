const header = document.querySelector('.header');
fetch('../header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data;
    })

const footer = document.querySelector('.footer');
fetch('../footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data;
    })


function scrollToHead() {
    document.documentElement.scrollTop = 0;
}

//Ideally this will change the css using php instead of this convoluted method// 
var html_theme = document.querySelector("html");
html_theme.style.transition="0.4s";
var pageTheme = "dark";
function toggleMode() {
    var checkBox = document.getElementById("mode_checkbox");
    if (checkBox.checked == true) {
        pageTheme = "light";
        html_theme.setAttribute("data-theme", pageTheme);
    }
    else {
        pageTheme = "dark";
        html_theme.setAttribute("data-theme", pageTheme);
    }
}

window.onload = function () {
    console.log(pageTheme);
    html_theme.setAttribute("data-theme", pageTheme);
}

var menuFlag = false;

function openTheMenu(){
    let menu = document.getElementById("expanded-menu");
    menu.style.left = "0%";
    menuFlag = true;
}

function closeTheMenu(){
    let menu = document.getElementById("expanded-menu");
    menu.style.left = "-100%";    
}


//needs work for closing
// window.addEventListener('click', function(){
//     console.log(event.target);
//     if(menuFlag === true){
//         document.getElementById("expanded-menu").style.left = "-100%";
//     console.log("cum");
//     }
//         // document.getElementById("expanded-menu").style.left = "-100%";
// }
// )

// let openMenu = document.getElementById("menu");
// // let closeCart = document.getElementByClassName('closeCart');
// // let listCart = document.querySelector('.listCart');
// let menu = document.getElementById('cart');
// //opening and closing the menu
// openMenu.addEventListener('click', () => {
//     menu.classList.toggle('active');
// })
// closeCart.addEventListener('click', () => {
//     menu.classList.remove('active');
// })