// finished unfinished sections
const projLinks = () => {

    let finished = document.querySelector('.finished-link');
    let unfinished = document.querySelector('.unfinished-link');
    let showUnfinished = document.querySelector('.unfinished');
    let finishedDone = document.querySelector('.finished');
    let activated = document.querySelector('.proj-nav-f');
    let uactivated = document.querySelector('.proj-nav-u');

    unfinished.addEventListener('click', function(){
        showUnfinished.classList.add('unfinished-show');
        finishedDone.classList.add('unfinished'); 
        uactivated.classList.add('active');
        activated.classList.remove('active');   
    });

    finished.addEventListener('click', function(){
        showUnfinished.classList.remove('unfinished-show');
        finishedDone.classList.remove('unfinished'); 
        activated.classList.add('active');
        uactivated.classList.remove('active');   
    });
}

// viewing all projects in the website

const showProjects = ()=> {
    let readMore = document.querySelectorAll('.read-more');
    let closeReadMore = document.querySelectorAll('.project-closing');

    readMore.forEach(function(btn){

        btn.addEventListener('click', function(e){
            let btnContainer = e.currentTarget.parentElement.parentElement;
            
            btnContainer.classList.add('show-project-details');
            body.classList.add('noscroll');
        });

    });

    closeReadMore.forEach(function(close){

        close.addEventListener('click', function(e){
            let divClose = e.currentTarget.parentElement.parentElement.parentElement;

            divClose.classList.remove('show-project-details');
            body.classList.remove('noscroll');
        });
    });
}

// project sliding

const slider = () => {

    const containerPoject = document.querySelectorAll('.bottom-extra-project-details');

    containerPoject.forEach(function (projectSingle){

        const slides = projectSingle.querySelectorAll('.slide-slide');
        const prev = projectSingle.querySelectorAll('.previous-project');
        const next = projectSingle.querySelectorAll('.next-project');

        slides.forEach(function (slide, index){
            slide.style.left = `${index * 100}%`;
        });

        let counter = 0;

        prev.forEach(function (previ){

            previ.addEventListener("click", function(){
                counter--;
                coursel();
            });
        
        });

        next.forEach(function (nexti) {
            nexti.addEventListener("click", function(){
                counter++;
                coursel();
            });
        });

        function coursel() {

            if(counter === slides.length){
                counter = 0;
            }
        
            if(counter < 0){
                counter = slides.length - 1;
            }
        
            slides.forEach(function (slide) {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        }

    });
}

projLinks();
showProjects();
slider();