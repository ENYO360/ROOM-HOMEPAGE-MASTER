const toggleOpen = document.getElementById('hamburger');
const toggleClose = document.getElementById('toggle-close')
const navBar = document.getElementById('nav-bar');
const slideLeft = document.getElementById('icon-left')
const slideRight = document.getElementById('icon-right')
const siteHeader = document.getElementById('header');
const section1Container = document.getElementsByClassName('slide-container')
const textSlide = document.getElementById('text-slide')
const slidePg = document.getElementById('slide-paragraph')

toggleOpen.addEventListener('click', openNavBar);
toggleClose.addEventListener('click', closeNavBar);
//slideRight.addEventListener('click', forwardSlide);
//slideLeft.addEventListener('click', backwardSlide)

function openNavBar() {
    toggleClose.style.setProperty('display', 'block');
    toggleOpen.style.setProperty('display', 'none');
    navBar.style.setProperty('display', 'block');
}

function closeNavBar() {
    toggleClose.style.setProperty('display', 'none');
    toggleOpen.style.setProperty('display', 'block');
    navBar.style.setProperty('display', 'none');
}

let headerBg = 0;
let h2Count = 0;
let pCount = 0;

const bgArray = ["url('images/desktop-image-hero-1.jpg')","url('images/desktop-image-hero-2.jpg')", "url('images/desktop-image-hero-3.jpg')"];
const h2Array = ['Discover innovative ways to decorate',
                 'We are available all across the globe',
                'Manufactured with the best materials']
const pArray = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
                "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
                "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
                ]

/* function forwardSlide() {
        siteHeader.style.backgroundImage = bgArray[headerBg];

        headerBg++;
    
}

function backwardSlide() {
    if (headerBg = 1) {
        siteHeader.style.backgroundImage = bgArray[0];
    } else  if (headerBg >= bgArray) {
        siteHeader.style.backgroundImage = bgArray[1];
    }
}

forwardSlide() */

function navigate(direction) {
    if (direction === 'forward') {
        headerBg++;
        if (headerBg >= bgArray.length) {
            headerBg = 0;
        }
    } else if (direction === 'backward') {
        headerBg--;
        if (headerBg < 0) {
            headerBg = bgArray.length - 1;
        }
    }

    if (direction === 'forward') {
        h2Count++;
        if (h2Count >= h2Array.length) {
            h2Count = 0;
        }
    } else if (direction === 'backward') {
        h2Count--;
        if (h2Count < 0) {
            h2Count = h2Array.length - 1;
        }
    }

    if (direction === 'forward') {
        pCount++;
        if (pCount >= pArray.length) {
            pCount = 0;
        }
    } else if (direction === 'backward') {
        pCount--;
        if (pCount < 0) {
            pCount = pArray.length - 1;
        }
    }

    // Display the current item
    siteHeader.style.backgroundImage = bgArray[headerBg];
    textSlide.textContent = h2Array[h2Count];
    slidePg.textContent = pArray[pCount];
}

// setting up section 1 slide
for (i = 0; i < section1Container.length; i++) {
    if (headerBg === 1) {

    }
}


