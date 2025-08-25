// First page: blinking question
const question = document.getElementById("question");
const colors = ["#ff0000", "#ff8000", "#ffff00", "#00ff00", "#0000ff", "#8000ff", "#ff00ff"];
let colorIndex = 0;
setInterval(() => {
    question.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 500);

// YES button click
document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";

    const address = document.getElementById("address");
    const sentence = document.getElementById("sentence");
    const heartsContainer = document.getElementById("heartsContainer");

    // Color-changing text for second page
    let colorIndex2 = 0;
    setInterval(() => {
        address.style.color = colors[colorIndex2];
        sentence.style.color = colors[colorIndex2];
        colorIndex2 = (colorIndex2 + 1) % colors.length;
    }, 800);

    // Floating hearts
    const maxHearts = 50;
    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "images/heart.png";
        heart.style.position = "absolute";
        heart.style.width = `${30 + Math.random()*30}px`;
        heart.style.height = "auto";
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = "-50px";
        heartsContainer.appendChild(heart);

        let dx = (Math.random() - 0.5) * 4;
        let dy = 1 + Math.random() * 3;

        function move() {
            let top = parseFloat(heart.style.top);
            let left = parseFloat(heart.style.left);
            top += dy;
            left += dx;

            if (top > window.innerHeight || left < 0 || left > window.innerWidth) {
                top = -50;
                left = Math.random() * window.innerWidth;
                dx = (Math.random() - 0.5) * 4;
                dy = 1 + Math.random() * 3;
            }

            heart.style.top = `${top}px`;
            heart.style.left = `${left}px`;

            requestAnimationFrame(move);
        }
        move();
    }

    for (let i = 0; i < maxHearts; i++) {
        createHeart();
    }
});

// NO button movement
const noBtn = document.getElementById("no");
let noClickCount = 0;

noBtn.addEventListener("mouseenter", function() {
    if(noClickCount === 0) {
        noBtn.style.position = "absolute";
        noBtn.style.left = "200px";
        noBtn.style.top = "300px";
        noClickCount++;
    } else if(noClickCount === 1) {
        noBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        noClickCount++;
    } else {
        noBtn.style.display = "none";
    }
});
