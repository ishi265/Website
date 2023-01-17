// all admin javascript 

// add vacancy modal

const addVacancy = () => {
    const addBtnn = document.querySelector('.add-vacancy');
    const overlay = document.querySelector('.add-vacancy-modal-overlay');
    const closeModal = document.querySelector('.vacancy-close');

    addBtnn.addEventListener('click', () => {
        overlay.classList.add('open-modal-project');
    });

    closeModal.addEventListener('click', () => {
        overlay.classList.remove('open-modal-project');
    });
}

const addProject = () => {
    const addBtnz = document.querySelector('.add-project-btn');
    const overlay = document.querySelector('.project-modal-overlay');
    const closeModal = document.querySelector('.project-close');

    addBtnz.addEventListener('click', function() {
        overlay.classList.add('open-modal-project');
    });

    closeModal.addEventListener('click', () => {
        overlay.classList.remove('open-modal-project');
    });
}
// end all admin javascript

addVacancy();
addProject();