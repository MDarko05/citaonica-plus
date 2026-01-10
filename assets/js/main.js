const BOOKS = [
  {
    id: '1',
    title: 'Na Drini Ćuprija',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/na_drini_cuprija.jpg',
    description: 'Nobelovac Ivo Andrić u ovom remek-delu priča priču o viševekovnoj istoriji mosta na Drini.',
    rating: 4.9,
    featured: true,
    isbn: '978-86-17-12345-1'
  },
  {
    id: '2',
    title: 'Seobe',
    author: 'Miloš Crnjanski',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/seobe.jpg',
    description: 'Monumentalno delo srpske književnosti o sudbini Srba u 18. veku.',
    rating: 4.8,
    featured: true,
    isbn: '978-86-17-12345-2'
  },
  {
    id: '3',
    title: 'Derviš i Smrt',
    author: 'Meša Selimović',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/dervis_i_smrt.jpg',
    description: 'Filozofski roman o čoveku koji traži istinu u vremenu kada je istina opasna.',
    rating: 4.8,
    featured: true,
    isbn: '978-86-17-12345-3'
  },
  {
    id: '4',
    title: 'Travnička Hronika',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/travnicka_hronika.jpg',
    description: 'Drugi veliki roman Ive Andrića o životu u Travniku tokom napoleonskih ratova.',
    rating: 4.7,
    isbn: '978-86-17-12345-4'
  },
  {
    id: '5',
    title: 'Hazarski Rečnik',
    author: 'Milorad Pavić',
    category: 'savremeno',
    available: true,
    image: 'assets/img/books/hazarski_recnik.jpg',
    description: 'Jedinstveni roman-leksikon o Hazarima u tri verzije: hrišćanskoj, islamskoj i jevrejskoj.',
    rating: 4.6,
    isbn: '978-86-17-12345-5'
  },
  {
    id: '6',
    title: 'Gorski Vijenac',
    author: 'Petar II Petrović Njegoš',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/gorski_vijenac.jpg',
    description: 'Najveće delo crnogorskog vladike i pesnika, ep o borbi protiv Turaka.',
    rating: 4.9,
    isbn: '978-86-17-12345-11'
  },
  {
    id: '7',
    title: 'Pesme',
    author: 'Branko Radičević',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/branko_radicevic.jpg',
    description: 'Zbirka pesama jednog od najznačajnijih srpskih romantičara.',
    rating: 4.6,
    isbn: '978-86-17-12345-7'
  },
  {
    id: '8',
    title: 'Koštana',
    author: 'Borisav Stanković',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/kostana.jpg',
    description: 'Drama o ljubavi i strasti u patrijarhalnom društvu južne Srbije.',
    rating: 4.5,
    isbn: '978-86-17-12345-8'
  },
  {
    id: '9',
    title: 'Pokondirena Tikva',
    author: 'Stevan Sremac',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/pokondirena_tikva.jpg',
    description: 'Humoristična priča o životu u Nišu krajem 19. veka.',
    rating: 4.4,
    isbn: '978-86-17-12345-9'
  },
  {
    id: '10',
    title: 'Prokleta Avlija',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/prokleta_avlija.jpg',
    description: 'Treći veliki roman Ive Andrića o zatvorskoj avliji u Carigradu.',
    rating: 4.6,
    isbn: '978-86-17-12345-10'
  },
  {
    id: '11',
    title: 'Srpske Narodne Pesme',
    author: 'Vuk Stefanović Karadžić',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/narodne_pesme.jpg',
    description: 'Zbirka najlepših srpskih narodnih pesama koje je sakupio Vuk Karadžić.',
    rating: 4.9,
    isbn: '978-86-17-12345-12'
  },
  {
    id: '12',
    title: 'Kad su Cvetale Tikve',
    author: 'Dragoslav Mihailović',
    category: 'savremeno',
    available: true,
    image: 'assets/img/books/kad_su_cvetale_tikve.jpg',
    description: 'Roman o odrastanju i sazrevanju u malograđanskoj sredini.',
    rating: 4.2,
    isbn: '978-86-17-12345-13'
  }
];

// Initialize on page load
window.onload = () => {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
    RunUniversalPageCode();
    
    const body = document.querySelector('body');
    if (!body) {
        console.error('Greška: Nije pronađen body na stranici.');
        return;
    }
    
    const page = body.dataset.page;
    if (!page) {
        console.error('Greška: Nije pronađen data-page atribut u body.');
        return;
    }
    
    if (page === 'home') RunHomePageCode();
    else if (page === 'catalog') RunCatalogPageCode();
    else if (page === 'contact') RunContactPageCode();
    else if (page === 'author') RunAuthorPageCode();
    else console.error(`Stranica sa imenom '${page}' ne postoji. Proveriti vrednost data-page atributa.`);
});

// Universal code for all pages
const RunUniversalPageCode = () => {
    // Update active navigation links
    updateActiveLinks();
    
    // Mobile menu toggle
    const navbarToggler = document.getElementById('navbarToggler');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbarIcon = document.getElementById('navbarIcon');
    
    if (navbarToggler && mobileMenu) {
        navbarToggler.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navbarIcon.className = mobileMenu.classList.contains('active') ? 'bi bi-x' : 'bi bi-list';
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navbarIcon.className = 'bi bi-list';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navbarToggler.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navbarIcon.className = 'bi bi-list';
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.classList.toggle('visible', window.scrollY > 400);
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const heroImage = heroSection.querySelector('.hero-bg-image');
        if (heroImage) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                heroImage.style.transform = `scale(1.05) translateY(${parallax}px)`;
            });
        }
    }
};

// Update active navigation links
const updateActiveLinks = () => {
    const currentPage = document.body.getAttribute('data-page');
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    allNavLinks.forEach(link => link.classList.remove('active'));
    
    const pageMap = {
        'home': 'index.html',
        'catalog': 'catalog.html',
        'author': 'author.html',
        'contact': 'contact.html'
    };
    
    const currentPageFile = pageMap[currentPage];
    if (currentPageFile) {
        const activeLinks = document.querySelectorAll(`a[href="${currentPageFile}"]`);
        activeLinks.forEach(link => {
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
                link.classList.add('active');
            }
        });
    }
};

// Home page code
const RunHomePageCode = () => {
    renderFeaturedBooks();
};

// Render featured books
const renderFeaturedBooks = () => {
    const container = document.getElementById('featuredBooks');
    if (!container) return;
    
    const featuredBooks = BOOKS.filter(book => book.featured).slice(0, 3);
    const categoryNames = {
        'klasici': 'SRPSKI KLASICI',
        'savremeno': 'SAVREMENA PROZA',
        'poezija': 'POEZIJA I EPIKA'
    };
    
    container.innerHTML = featuredBooks.map(book => `
        <div class="col-md-4">
            <div class="book-card">
                <div class="book-image-container">
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                    ${book.featured ? '<div class="book-featured-badge">IZDVOJENO</div>' : ''}
                </div>
                <div class="book-content">
                    <div class="book-meta">
                        <span class="book-category">${categoryNames[book.category] || book.category}</span>
                        <div class="book-rating">
                            <i class="bi bi-star-fill"></i>
                            <span class="book-rating-text">${book.rating}</span>
                        </div>
                    </div>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-footer">
                        <span class="book-availability available">
                            ✅ Dostupno
                        </span>
                        <a href="#" class="book-details">DETALJI</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
};

// Catalog page code
const RunCatalogPageCode = () => {
    renderAllBooks();
    initializeReservationSystem();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (availabilityFilter) availabilityFilter.addEventListener('change', applyFilters);
};

// Render all books for catalog
const renderAllBooks = (booksToRender = BOOKS) => {
    const container = document.getElementById('catalogBooks');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    if (booksToRender.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    
    const categoryNames = {
        'klasici': 'SRPSKI KLASICI',
        'savremeno': 'SAVREMENA PROZA',
        'poezija': 'POEZIJA I EPIKA'
    };
    
    container.innerHTML = booksToRender.map(book => `
        <div class="col-md-4">
            <div class="book-card">
                <div class="book-image-container">
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                    ${book.featured ? '<div class="book-featured-badge">IZDVOJENO</div>' : ''}
                </div>
                <div class="book-content">
                    <div class="book-meta">
                        <span class="book-category">${categoryNames[book.category] || book.category}</span>
                        <div class="book-rating">
                            <i class="bi bi-star-fill"></i>
                            <span class="book-rating-text">${book.rating}</span>
                        </div>
                    </div>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-footer">
                        <span class="book-availability available">
                            ✅ Dostupno
                        </span>
                        <button class="reserve-btn" data-book-id="${book.id}">
                            📚 Rezerviši
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to reserve buttons
    const reserveButtons = container.querySelectorAll('.reserve-btn');
    reserveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const bookId = button.getAttribute('data-book-id');
            const book = BOOKS.find(b => b.id === bookId);
            if (book) {
                openReservationModal(book);
            }
        });
    });
};

// Apply filters
const applyFilters = () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    
    let filteredBooks = [...BOOKS];
    
    // Category filter
    if (categoryFilter && categoryFilter.value !== 'svi') {
        filteredBooks = filteredBooks.filter(book => book.category === categoryFilter.value);
    }
    
    // Availability filter
    if (availabilityFilter && availabilityFilter.value !== 'sve') {
        const availability = availabilityFilter.value;
        filteredBooks = filteredBooks.filter(book => {
            switch (availability) {
                case 'dostupne': return book.available === true;
                default: return true;
            }
        });
    }
    
    renderAllBooks(filteredBooks);
};

// Contact page code
const RunContactPageCode = () => {
    initializeContactForm();
    initializeReviewSystem();
};

// Contact form validation
const initializeContactForm = () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Real-time validation
    const formFields = form.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
        if (field.type === 'checkbox' || field.type === 'radio') {
            field.addEventListener('change', () => validateContactField(field));
        } else {
            field.addEventListener('blur', () => validateContactField(field));
            field.addEventListener('input', () => clearContactFieldError(field));
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        formFields.forEach(field => {
            if (!validateContactField(field)) isValid = false;
        });
        
        if (isValid) {
            showNotification('Vaša poruka je uspešno poslata!', 'success');
            form.reset();
        } else {
            showNotification('Molimo ispravite greške u formi.', 'error');
        }
    });
};

// Field validation for contact forms
const validateContactField = (field) => {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ovo polje je obavezno.';
    }
    
    // Agreement checkbox
    if (fieldName === 'agreement' && field.type === 'checkbox' && !field.checked) {
        isValid = false;
        errorMessage = 'Morate se složiti sa uslovima korišćenja.';
    }
    
    // Email validation
    if (value && fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Neispravna email adresa.';
        }
    }
    
    // Name validation
    if (value && (fieldName === 'firstName' || fieldName === 'lastName')) {
        const nameRegex = /^[A-ZŠĐČĆŽa-zšđčćž\s]{2,30}$/;
        if (!nameRegex.test(value)) {
            isValid = false;
            errorMessage = 'Ime može sadržavati samo slova (2-30 karaktera).';
        }
    }
    
    // Phone validation
    if (value && fieldName === 'phone') {
        const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Neispravna format telefona.';
        }
    }
    
    if (isValid) {
        showContactFieldSuccess(field);
    } else {
        showContactFieldError(field, errorMessage);
    }
    
    return isValid;
};

// Show field error for contact forms
const showContactFieldError = (field, message) => {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    
    const container = field.type === 'checkbox' || field.type === 'radio' 
        ? field.closest('.checkbox-item, .radio-item') || field.parentNode
        : field.parentNode;
    
    let errorElement = container.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        container.appendChild(errorElement);
    }
    errorElement.textContent = message;
};

// Show field success for contact forms
const showContactFieldSuccess = (field) => {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
    clearContactFieldError(field);
};

// Clear field error for contact forms
const clearContactFieldError = (field) => {
    field.classList.remove('is-invalid');
    
    const container = field.type === 'checkbox' || field.type === 'radio' 
        ? field.closest('.checkbox-item, .radio-item') || field.parentNode
        : field.parentNode;
    
    const errorElement = container.querySelector('.error-message');
    if (errorElement) errorElement.remove();
};

// Review system
const initializeReviewSystem = () => {
    const reviewForm = document.getElementById('reviewForm');
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const reviewText = document.getElementById('reviewText').value.trim();
        const reviewRating = document.getElementById('reviewRating').value;
        
        if (reviewText && reviewRating) {
            addReview(reviewText, reviewRating);
            reviewForm.reset();
            showNotification('Vaša recenzija je dodana!', 'success');
        } else {
            showNotification('Molimo unesite recenziju i ocenu.', 'error');
        }
    });
};

// Add review
const addReview = (text, rating) => {
    const container = document.getElementById('reviewsList');
    if (!container) return;
    
    const reviewCount = container.children.length + 1;
    const currentDate = new Date().toLocaleDateString('sr-RS');
    
    const reviewHTML = `
        <div class="review-item">
            <div class="review-header">
                <div class="review-rating">
                    ${'★'.repeat(parseInt(rating))}${'☆'.repeat(5 - parseInt(rating))}
                </div>
                <span class="review-number">Recenzija #${reviewCount}</span>
            </div>
            <p class="review-text">${text}</p>
            <span class="review-date">${currentDate}</span>
        </div>
    `;
    
    container.insertAdjacentHTML('afterbegin', reviewHTML);
};

// Author page code
const RunAuthorPageCode = () => {
    // Author page specific code if needed
};

// Modal functions
let currentBook = null;

const openReservationModal = (book) => {
    currentBook = book;
    const modal = document.getElementById('reservationModal');
    
    // Set minimum date to today
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    const dateInput = document.getElementById('reservationDate');
    if (dateInput) {
        dateInput.min = todayString;
        dateInput.value = todayString; // Set default to today
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeReservationModal = () => {
    const modal = document.getElementById('reservationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    const form = document.getElementById('reservationForm');
    form.reset();
    clearAllErrors();
    currentBook = null;
};

// Reservation modal field validation functions
const showReservationFieldError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        errorElement.textContent = message;
    }
};

const showReservationFieldSuccess = (fieldId) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
        errorElement.textContent = '';
    }
};

const clearAllErrors = () => {
    const fields = ['fullName', 'memberCard', 'reservationDate', 'email'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(fieldId + 'Error');
        
        if (field && errorElement) {
            field.classList.remove('is-invalid', 'is-valid');
            errorElement.textContent = '';
        }
    });
};

// Reservation modal field validation
const validateReservationField = (fieldId, value) => {
    let error = '';
    
    switch (fieldId) {
        case 'fullName':
            if (!value.trim()) {
                error = 'Ime i prezime su obavezni.';
            } else if (value.trim().length < 3) {
                error = 'Ime i prezime moraju imati minimum 3 karaktera.';
            }
            break;
        case 'memberCard':
            if (!value.trim()) {
                error = 'Broj članske karte je obavezan.';
            }
            break;
        case 'reservationDate':
            if (!value.trim()) {
                error = 'Datum rezervacije je obavezan.';
            } else {
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate < today) {
                    error = 'Datum rezervacije ne može biti u prošlosti.';
                }
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) {
                error = 'Email adresa je obavezna.';
            } else if (!emailRegex.test(value.trim())) {
                error = 'Neispravna email adresa.';
            }
            break;
    }
    
    if (error) {
        showReservationFieldError(fieldId, error);
        return false;
    } else {
        showReservationFieldSuccess(fieldId);
        return true;
    }
};

// Initialize reservation system
const initializeReservationSystem = () => {
    const modal = document.getElementById('reservationModal');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('reservationForm');
    
    if (!modal || !closeBtn || !form) return;
    
    // Close modal events
    closeBtn.addEventListener('click', closeReservationModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeReservationModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeReservationModal();
        }
    });
    
    // Form validation events
    const fields = [
        { id: 'fullName', type: 'input' },
        { id: 'memberCard', type: 'input' },
        { id: 'reservationDate', type: 'input' },
        { id: 'email', type: 'input' }
    ];
    
    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            element.addEventListener('blur', () => {
                validateReservationField(field.id, element.value);
            });
            element.addEventListener('input', () => {
                // Clear error on input
                const errorElement = document.getElementById(field.id + 'Error');
                if (errorElement && errorElement.textContent) {
                    element.classList.remove('is-invalid');
                    errorElement.textContent = '';
                }
            });
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate all fields
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element && !validateReservationField(field.id, element.value)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Success - redirect to success page
            window.location.href = 'success.html';
        } else {
            // Show error notification
            showNotification('Molimo ispravite greške u formi.', 'error');
        }
    });
};

// Notification system
const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    const bgColor = type === 'success' ? '#c5a059' : type === 'error' ? '#dc3545' : '#161d2a';
    const textColor = type === 'success' || type === 'error' ? '#0a0f18' : '#ffffff';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: ${textColor};
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
};

// Add CSS animations for notifications
const addNotificationStyles = () => {
    if (document.getElementById('notification-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100%); }
        }
        
        .review-item {
            background: var(--bg-card);
            padding: 1.5rem;
            margin-bottom: 1rem;
            border: 1px solid var(--border-subtle);
        }
        
        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .review-rating {
            color: var(--primary-color);
            font-size: 1.2rem;
        }
        
        .review-number {
            font-size: 0.8rem;
            color: var(--text-light-gray);
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        
        .review-text {
            color: var(--text-white);
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .review-date {
            font-size: 0.8rem;
            color: var(--text-light-gray);
        }
    `;
    document.head.appendChild(style);
};

// Initialize notification styles
addNotificationStyles();