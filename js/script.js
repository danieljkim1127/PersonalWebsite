 $(document).ready(function(){//jquery cant change page until it decides document is safe
     $(window).scroll(function(){//jquery makes navigation bar fixed based on how much you scrolled
         if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
         }else{
            $('.navbar').removeClass("sticky");
         }
        });
        //toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");//toggles menu when compressed
            $('.menu-btn i').toggleClass("active");//toggles the menu icon to x icon when compressed
        })
 });

 //display proficiency for programming languages
 function basic(){
    document.getElementById("plevel").innerHTML = "Proficiency: Basic";
 }
 function intermediate(){
    document.getElementById("plevel").innerHTML = "Proficiency: Intermediate";
 }