const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

let yesBtnScale = 1;

yesBtn.addEventListener('click', () => {
    response.textContent = "Yahooo! Shall we plan our date then?";
});

noBtn.addEventListener('click', () => {
    response.textContent = "Please... 😢";
    
    // Make the Yes button bigger each time No is clicked
    yesBtnScale *= 1.5;
    yesBtn.style.transition = "transform 0.4s cubic-bezier(.4,2,.3,1)";
    yesBtn.style.transform = `scale(${yesBtnScale})`;

    // If Yes button is very big, cover the screen and show a message
    if (yesBtnScale > 10) {
        yesBtn.style.position = "fixed";
        yesBtn.style.left = "50%";
        yesBtn.style.top = "50%";
        yesBtn.style.transform = "translate(-50%, -50%) scale(50)";
        yesBtn.style.zIndex = "9999";
        yesBtn.textContent = "Please click yes or im gonna cry :')";
        noBtn.style.visibility = "hidden";
        response.textContent = "";
        document.body.style.overflow = "hidden";
    }
};
