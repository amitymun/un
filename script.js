document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Modal functionality
const teamMembers = {
    alexandra: {
        name: "Alexandra Palcic",
        role: "Director of Logistics",
        bio: "Alexandra is a current Amity sophomore and has been a part of Model UN since her first year in high school. She hopes to go into public service after college, and has a particular interest in international socioeconomic cooperation. Outside of politics, she enjoys reading, knitting, Dungeons & Dragons, and general nerdy stuff.",
        image: "alexandra-palcic.jpg"
    },
    srestha: {
        name: "Srestha Kompalli",
        role: "Director of Outreach",
        bio: "Srestha Kompalli is a sophomore at Amity Regional High School and has been a member of Amity's Model UN team for 2 years now. Club treasurer in her freshman year and secretary in her sophomore, Srestha is committed and passionate about Model UN. She also plans on pursuing a career in law. Outside of academic pursuits, Srestha enjoys reading, playing tennis, and listening to music. Srestha's enthusiasm for public speaking and civic engagement fuel her passion for hosting Amity's first model UN conference.",
        image: "srestha-kompalli.jpg"
    },
    luca: {
        name: "Luca DiSorbo",
        role: "Director of Committees",
        bio: "Director of Committees Luca DiSorbo is a sophomore at Amity who joined Model UN during his freshman year and serves as the club's Treasurer. With a passion for history, committee work, and diplomacy, Luca brings both dedication and experience to this conference. Outside of MUN, he enjoys reading, writing, and competing on the track team.",
        image: "luca-disorbo.jpg"
    },
    emma: {
        name: "Emma Mathew",
        role: "Director of Marketing/Design",
        bio: "Emma is a sophomore in high school and has participated in Amity's Model United Nations club for two years. Outside of academics she enjoys painting, playing the piano, and competing in mock trial. She hope to pursue a future in law or economics.",
        image: "emma-mathew.jpg"
    },
    "emma-imanov": {
        name: "Emma Imanov",
        role: "President/Co-President",
        bio: "Co-President Emma Imanov, a junior at Amity High School, has proudly led the club for the past two years. She has been actively involved in Model UN since joining as a freshman, serving as the club's Social Media Manager. Emma is passionate about diplomacy, global affairs, and public speaking, and she hopes to pursue a future career in law. She looks forward to welcoming delegates and helping facilitate engaging, well-organized committee sessions. Having attended numerous conferences herself, she is committed to creating an experience that is both challenging and memorable for all participants.",
        image: "emma-imanov.jpg"
    },
    theodore: {
        name: "Theodore Anderson",
        role: "Director of Photography and Social Media",
        bio: "Director of Photography and Social Media, Theodore Anderson, is a junior at ARHS in his first year of Model UN. He hopes to pursue a career in emergency medicine, but is separately interested in politics and social activism. Some of his hobbies include photography, classical guitar, and writing and editing for Wikipedia. His work can be found on Instagram @theodore_photo.",
        image: "theodore-anderson.jpg"
    }
};

function openModal(memberId) {
    const member = teamMembers[memberId];
    if (member) {
        document.getElementById('modalImage').src = member.image;
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalRole').textContent = member.role;
        document.getElementById('modalBio').textContent = member.bio;
        document.getElementById('memberModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle bio visibility with blur animation
function toggleBio(memberId) {
    const bioElement = document.getElementById(memberId + '-bio');
    const cardElement = bioElement.closest('.card');
    
    if (bioElement) {
        if (bioElement.style.display === 'none' || bioElement.style.display === '') {
            // Show bio - blur image and reveal text
            if (cardElement) {
                cardElement.classList.add('bio-active');
            }
            bioElement.style.display = 'block';
            setTimeout(() => {
                bioElement.classList.add('show');
            }, 50);
        } else {
            // Hide bio - restore image and hide text
            if (cardElement) {
                cardElement.classList.remove('bio-active');
            }
            bioElement.classList.remove('show');
            setTimeout(() => {
                bioElement.style.display = 'none';
            }, 300);
        }
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('memberModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
