let parent = document.querySelector('#block')
let elements = document.querySelectorAll('.element')
let links = document.querySelectorAll('.element__link')

parent.addEventListener('click', function (event) {
    let currentElement = event.target;
    console.log(event.target);
    for (let element of elements) {
        element.classList.remove('active')
    }
    currentElement.classList.add('active');
})

for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        this.parentElement.style.backgroundColor = 'green';
        this.parentElement.append(this.getAttribute('href'))
    })
}