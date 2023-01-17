// web javascript

// webpage toggole navigation
const body = document.querySelector('body');

const modal = ()=> {
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const mobileMenu = document.querySelector('.header-buger-menu');

    burger.addEventListener('click', ()=>{
        overlay.classList.toggle('add-overlay');
        mobileMenu.classList.toggle('open-menu');
        body.classList.toggle('noscroll');
        burger.classList.toggle('open');
    });
}

// job details user viewing

const jobDetails = ()=> {
    const jobs = document.querySelectorAll('.job-pressented-user');

    jobs.forEach( (job) => {
        const moreDetails = job.querySelector('.open-jobs');
        
        moreDetails.addEventListener('click', (item)=>{

            jobs.forEach( (item)=> {
                if (item !== job) {
                    item.classList.remove('view-alot');
                }
            });

            job.classList.add('view-alot');
        });

    });
}


// end web javascript

// functions 
modal();
jobDetails();
