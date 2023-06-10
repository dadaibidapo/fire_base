// how to style
const btn_click = document.getElementById('btn-click');
const getForm = document.getElementById('myForm');
const sizeChange = document.getElementById('sizechange');

btn_click.addEventListener('click', () => {
    sizeChange.style.fontSize="50px";


    getForm.style.backgroundColor = "black";
    getForm.style.padding ="30px";
})

