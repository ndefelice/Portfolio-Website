//Fade on scroll:
const fade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            //Add new element
            entry.target.classList.add('fade');
        }
    })
})

const fadeElements = document.querySelectorAll('div.desc-container, div.about-title, div.experience-title, div.proj-header, div.about-desc, div.about-desc-final, div.github-desc, div.job');
fadeElements.forEach((element) => fade.observe(element));


//Fade from left to right on scroll:
const fadeLeftToRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            //Add new element
            entry.target.classList.add('fadeLeftToRight');
        }
    })
})

const fadeLRElements = document.querySelectorAll('div.proj-container, div.bio, img.self-portrait');
fadeLRElements.forEach((element) => fadeLeftToRight.observe(element));


//Smooth scroll:
const links = document.querySelectorAll('a[href*="#"]');

// Loop through each link and add a click event listener
links.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default behavior of clicking a link
    e.preventDefault();

    // Get the target ID from the link's href
    const targetId = link.getAttribute('href').slice(1);

    // Find the target element and its position
    const targetEl = document.getElementById(targetId);
    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


