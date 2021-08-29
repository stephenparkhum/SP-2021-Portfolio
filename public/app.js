// Toggle Button 
const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('show');
})

// Links 
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');

    })
})

const projectContainer = document.querySelectorAll('.project-container');

console.log(projectContainer);


projects.forEach(project => {
    projectContainer[0].innerHTML += `
    <a href=${project.url} target="_blank">
        <div class="project-card" data-tags="#all ${project.tags}">
            <img src=${project.image} alt="${project.name} card">
            <div class="content">
                <h1 class="project-name">
                    ${project.name}
                </h1>
                <span class="tags">${project.tags}</span>
            </div>
        </div> 
    </a>
    `
});

// filters 
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let project = document.querySelectorAll('.project-card');

        project.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');

    })
})