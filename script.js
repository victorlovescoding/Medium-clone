const nav = document.querySelector('nav')
const getStartButton = document.querySelector('.get_Start_button')
window.addEventListener('scroll',()=>{
    if (scrollY>500){
        console.log("hi");
        nav.classList.toggle('transitionNav')
        getStartButton.classList.toggle('transitionGetStartButton')
        getStartButton.classList.toggle('transitionGetStartButton')
        nav.style.backgroundColor='#FFFFFF';
        getStartButton.style.backgroundColor='#0F730C';
        getStartButton.style.color='#FFFFFF';
    }else if(scrollY<500){
        nav.style.backgroundColor='#FFC017';
        getStartButton.style.backgroundColor='#191919';
        getStartButton.style.color='#FFFFFF';
    }
    console.log(scrollY);
})