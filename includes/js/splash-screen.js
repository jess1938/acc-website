// $(".splash").delay(2000).fadeIn("slow");

function enterHome() { 

        setTimeout(() => {
            document.querySelector('.intro').style.top = "-100vh";
            document.querySelector('.main-Home').fadeIn();
            }, 500)
    
};

window.addEventListener('DOMContentLoaded', () => {

 
        setTimeout(() => {
            document.querySelectorAll('.logo').forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add("active");
                }, (idx + 1) * 700)
            });
        });
    
   


        // setTimeout(() => {
        //     document.querySelectorAll('.logo').forEach((span, idx) => {
        //         setTimeout(() => {
        //             span.classList.remove("active");
        //             span.classList.add("fade");
        //         }, (idx + 1) * 100)
        //     })
        // }, 2000);

        // setTimeout(() => {
        //     document.querySelector('.intro').style.top = "-100vh";
        // }, 3000)


})