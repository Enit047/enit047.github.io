window.addEventListener("DOMContentLoaded", function(){
    'use strict';

    function activeMenu(){
        let buttM = document.querySelector(".small_menu"),
            menu = document.querySelector(".menu");
    
        buttM.addEventListener("touchstart", function(){
            if(!menu.classList.contains("menu_active")){
                menu.classList.add("menu_active");
                buttM.classList.add("small_menu_active");
            } else{
                menu.classList.remove("menu_active");
                buttM.classList.remove("small_menu_active");
            }
        });
    }
    activeMenu();

    function close(){
        let menuItem = document.querySelectorAll(".menu_item"),
            menu = document.querySelector(".menu"),
            buttM = document.querySelector(".small_menu");


        menu.addEventListener("touchstart", function(){
            if(event.target && event.target.matches(".menu_link")){
                menu.classList.remove("menu_active");
                buttM.classList.remove("small_menu_active");
            }
        });
    }
    close();
});