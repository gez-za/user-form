const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
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
    function sign() {
        const signup=document.getElementById("signup");
        const login=document.getElementById("signin");
        const inverse=document.getElementById("inverrseid");
        login.style.display='block';
        signup.style.display='none';
        inverse.style.display='none';
    }
    function signp() {
        const signup=document.getElementById("signup");
        const login=document.getElementById("signin");
        const inverse=document.getElementById("inverrseid");
        login.style.display='none';
        signup.style.display='block';
        inverse.style.display='block';
    }