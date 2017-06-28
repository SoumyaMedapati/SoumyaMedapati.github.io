$(document).ready(function () {
    console.log("jquery working!!");
    document.getElementById('project_0').click();
});

function opendrawer(obj){
    $('#'+obj.dataset.link).slideToggle(500);
}