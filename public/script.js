function toggleCard(button) {
    const content = button.nextElementSibling;

    content.classList.toggle("active");

    if (content.classList.contains("active")) {
        button.innerHTML = "Yig'ish ▲";
    } else {
        button.innerHTML = "Ko'rish ▼";
    }
}