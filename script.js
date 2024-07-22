document.addEventListener('DOMContentLoaded', function() {
    const text = "Я не придумал, что будет на этом сайте. Так что можете пока послушать музыку.";
    const typewriterText = document.getElementById('typewriter-text');
    
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Скорость печати (в миллисекундах)
        }
    }

    typeWriter();
});
