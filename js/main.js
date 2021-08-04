$(document).ready(function(){
    let $btns = $('.project-area.button-group buttons');
    $btns.click(function(e){
        
        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('project-area .grid').isotope({
            NodeFilter: selector
        });

        return false;

    })


});
 

//car

$('.site-main .about-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0: {
            items:1
        },
        544:{
            items:2
        }
    }
});


let nav_offset_top = $(' .header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area.main_menu').addClass(navbar_fixed);
                }else{
                    $('.header-area.main-menu').removeClass('navbar_fixed');
                }
                })
        }
    };

    /* links 
    whatsapphttps://www.facebook.com/sharer.php?u=[post-url]

    https://api.whatsapp.com/send?text=[post-title] [post-url]


    facebook
    


    twitter


    https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]


       instagram

       http://www.instagram.com/yourusername


 


    */


       const facebookBtn = document.querySelector(".facebook-btn");
       const twitterBtn = document.querySelector(".twitter-btn");
       const instagramBtn = document.querySelector(".instagram-btn");
       const whatsappBtn = document.querySelector(".whatsapp-btn");

       function init() {
           const facebookImg =document.querySelector(".facebook-img");
           let postUrl = encodeURI (document .location .href);
           let postTitle = encodeURI ("Hi everyone");
           let postImg =encodeURI (facebookImg.src);

           facebookImg.setAttribute(
           "href",'https://www.facebook.com/sharer.php?u=${postUrl}'
           );

           TwitterImg.setAttribute(
           "href",'  https://twitter.com/share?url=[post-url]&text=[post-title]'
           );
           
           facebookImg.setAttribute(
           "href",'https://www.facebook.com/sharer.php?u=${postUrl}'
           );
       }
       init();
           
            

           





        
    






