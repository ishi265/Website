// job details user viewing

const jobDetails = ()=> {
    const jobs = document.querySelectorAll('.job-pressented-user');

    jobs.forEach( (job) => {
        const moreDetails = job.querySelector('.expand');
        
        moreDetails.addEventListener('click', (item)=>{

            jobs.forEach( (item)=> {
                if (item !== job) {
                    item.classList.remove('view-alot');
                }
            });

            job.classList.toggle('view-alot');
        });

    });
}

jobDetails();