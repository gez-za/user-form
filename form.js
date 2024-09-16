const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
           /* imagePreview.style.width='100px';
            imagePreview.style.height='100px';*/
        }
        reader.readAsDataURL(file);
    }
});

    const autrechoix=document.getElementById("nivE");
    const choixfait=document.getElementById("choixfait");
    
    autrechoix.addEventListener('change', function () {
        if(autrechoix.value === "niv6"){
            choixfait.style.display='block';
        }
        else{
            choixfait.style.display='none';
        }
    });