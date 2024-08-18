document.addEventListener('DOMContentLoaded', () => {
    const capybara = document.getElementById('capybara');
    const popSound = document.getElementById('pop-sound');
    const scoreDisplay = document.getElementById('score');
    const backgroundMusic = document.getElementById('background-music');
    
    let score = 0;
    let clicksInCurrentSecond = 0;
    let cps = 0;
    let lastUpdateTime = Date.now();
    
    // Play background music when the page loads
    backgroundMusic.play();

    // Update CPS every second
    setInterval(() => {
        cps = clicksInCurrentSecond;
        clicksInCurrentSecond = 0; // Reset clicks count for the next second
        scoreDisplay.innerHTML = `Score: ${score} | CPS: ${cps}`;
    }, 1000);

    capybara.addEventListener('click', () => {
        const currentTime = Date.now();
        if (currentTime - lastUpdateTime < 200) {
            // If the animation hasn't finished, don't apply it again
            return;
        }
        lastUpdateTime = currentTime;

        // Play pop sound
        popSound.play();

        // Animate capybara bounce
        capybara.classList.add('pop-animation');
        setTimeout(() => {
            capybara.classList.remove('pop-animation');
        }, 200); // Animation duration matches the CSS transition

        // Update score
        score++;
        clicksInCurrentSecond++; // Increase click count for CPS
    });
});
