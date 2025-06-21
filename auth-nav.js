document.addEventListener('DOMContentLoaded', () => {
    const authLinkContainer = document.getElementById('authLinkContainer');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');


    function updateAuthLink() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser && loggedInUser.isLoggedIn) {
    
            authLinkContainer.innerHTML = '<li><a href="perfil.html">Perfil</a></li>';
        } else {
          
            authLinkContainer.innerHTML = '<li><a href="login.html">Fazer Login</a></li>';
        }

        const currentPath = window.location.pathname.split('/').pop(); 
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref && currentPath.includes(linkHref)) {
                link.classList.add('active');
            }
        });
    }


    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    updateAuthLink();

  
    window.addEventListener('storage', (e) => {
        if (e.key === 'loggedInUser') {
            updateAuthLink();
        }
    });
});
