const BOOKS = [
  {
    id: '1',
    title: 'Na Drini Ćuprija',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/na_drini_cuprija.jpg',
    rating: 4.9,
    featured: true
  },
  {
    id: '2',
    title: 'Seobe',
    author: 'Miloš Crnjanski',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/seobe.jpg',
    rating: 4.8,
    featured: true
  },
  {
    id: '3',
    title: 'Derviš i Smrt',
    author: 'Meša Selimović',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/dervis_i_smrt.jpg',
    rating: 4.8,
    featured: true
  },
  {
    id: '4',
    title: 'Travnička Hronika',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/travnicka_hronika.jpg',
    rating: 4.7
  },
  {
    id: '5',
    title: 'Hazarski Rečnik',
    author: 'Milorad Pavić',
    category: 'savremeno',
    available: true,
    image: 'assets/img/books/hazarski_recnik.jpg',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Gorski Vijenac',
    author: 'Petar II Petrović Njegoš',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/gorski_vijenac.jpg',
    rating: 4.9
  },
  {
    id: '7',
    title: 'Pesme',
    author: 'Branko Radičević',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/branko_radicevic.jpg',
    rating: 4.6
  },
  {
    id: '8',
    title: 'Koštana',
    author: 'Borisav Stanković',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/kostana.jpg',
    rating: 4.5
  },
  {
    id: '9',
    title: 'Pokondirena Tikva',
    author: 'Stevan Sremac',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/pokondirena_tikva.jpg',
    rating: 4.4
  },
  {
    id: '10',
    title: 'Prokleta Avlija',
    author: 'Ivo Andrić',
    category: 'klasici',
    available: true,
    image: 'assets/img/books/prokleta_avlija.jpg',
    rating: 4.6
  },
  {
    id: '11',
    title: 'Srpske Narodne Pesme',
    author: 'Vuk Stefanović Karadžić',
    category: 'poezija',
    available: true,
    image: 'assets/img/books/narodne_pesme.jpg',
    rating: 4.9
  },
  {
    id: '12',
    title: 'Kad su Cvetale Tikve',
    author: 'Dragoslav Mihailović',
    category: 'savremeno',
    available: true,
    image: 'assets/img/books/kad_su_cvetale_tikve.jpg',
    rating: 4.2
  }
];

// Inicijalizacija na učitavanje stranice
window.onload = () => {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
    RunUniversalPageCode();
    
    const page = document.body.dataset.page;
    if (!page) {
        console.error('Greška: Nije pronađen data-page atribut u body.');
        return;
    }
    
    const pageHandlers = {
        'home': RunHomePageCode,
        'catalog': RunCatalogPageCode,
        'contact': RunContactPageCode,
        'author': RunAuthorPageCode
    };
    
    if (pageHandlers[page]) {
        pageHandlers[page]();
    } else {
        console.error(`Stranica sa imenom '${page}' ne postoji. Proveriti vrednost data-page atributa.`);
    }
});

// Univerzalni kod za sve stranice
const RunUniversalPageCode = () => {
    updateActiveLinks();
    initializeMobileMenu();
    initializeNavbarScroll();
    initializeScrollToTop();
};

// Inicijalizacija mobilnog menija
const initializeMobileMenu = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbarIcon = document.getElementById('navbarIcon');
    
    if (!navbarToggler || !mobileMenu) return;
    
    navbarToggler.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navbarIcon.className = mobileMenu.classList.contains('active') ? 'bi bi-x' : 'bi bi-list';
    });
    
    // Zatvaranje mobilnog menija
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navbarIcon.className = 'bi bi-list';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navbarToggler.contains(e.target)) {
            mobileMenu.classList.remove('active');
            navbarIcon.className = 'bi bi-list';
        }
    });
};

// Navbar scroll efekat
const initializeNavbarScroll = () => {
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }
};

// Scroll to top dugme
const initializeScrollToTop = () => {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.classList.toggle('visible', window.scrollY > 400);
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

// Ažuriranje aktivnih navigacionih linkova
const updateActiveLinks = () => {
    const currentPage = document.body.getAttribute('data-page');
    const pageMap = { 'home': 'index.html', 'catalog': 'catalog.html', 'author': 'author.html', 'contact': 'contact.html' };
    const currentPageFile = pageMap[currentPage];
    
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => link.classList.remove('active'));
    
    if (currentPageFile) {
        document.querySelectorAll(`a[href="${currentPageFile}"]`).forEach(link => {
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
                link.classList.add('active');
            }
        });
    }
};

// Kod za početnu stranicu
const RunHomePageCode = () => {
    renderFeaturedBooks();
};

// Renderovanje izdvojenih knjiga
const renderFeaturedBooks = () => {
    const container = document.getElementById('featuredBooks');
    if (!container) return;
    
    const featuredBooks = BOOKS.filter(book => book.featured).slice(0, 3);
    container.innerHTML = featuredBooks.map(book => createBookCard(book, false)).join('');
};

// Kod za katalog stranicu
const RunCatalogPageCode = () => {
    renderAllBooks();
    initializeReservationSystem();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (availabilityFilter) availabilityFilter.addEventListener('change', applyFilters);
};

// Kreiranje HTML koda za knjige
const createBookCard = (book, showReserveBtn = false) => {
    const categories = { 'klasici': 'SRPSKI KLASICI', 'savremeno': 'SAVREMENA PROZA', 'poezija': 'POEZIJA I EPIKA' };
    
    return `
        <div class="col-md-4">
            <div class="book-card">
                <div class="book-image-container">
                    <img src="${book.image}" alt="${book.title}" class="book-image">
                    ${book.featured ? '<div class="book-featured-badge">IZDVOJENO</div>' : ''}
                </div>
                <div class="book-content">
                    <div class="book-meta">
                        <span class="book-category">${categories[book.category] || book.category}</span>
                        <div class="book-rating"><i class="bi bi-star-fill"></i><span class="book-rating-text">${book.rating}</span></div>
                    </div>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <div class="book-footer">
                        <span class="book-availability available">✅ Dostupno</span>
                        ${showReserveBtn ? `<button class="reserve-btn" data-book-id="${book.id}">📚 Rezerviši</button>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
};

// Renderovanje svih knjiga za katalog
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
    container.innerHTML = booksToRender.map(book => createBookCard(book, true)).join('');
    
    // Dodavanje event listenera za dugmad rezervacije
    container.querySelectorAll('.reserve-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const bookId = button.getAttribute('data-book-id');
            const book = BOOKS.find(b => b.id === bookId);
            if (book) openReservationModal(book);
        });
    });
};

// Primena filtera
const applyFilters = () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    
    let filteredBooks = BOOKS.filter(book => {
        const categoryMatch = !categoryFilter || categoryFilter.value === 'svi' || book.category === categoryFilter.value;
        const availabilityMatch = !availabilityFilter || availabilityFilter.value === 'sve' || (availabilityFilter.value === 'dostupne' && book.available);
        return categoryMatch && availabilityMatch;
    });
    
    renderAllBooks(filteredBooks);
};

// Kod za kontakt stranicu
const RunContactPageCode = () => {
    initializeContactForm();
    initializeReviewSystem();
};

// Kod za autor stranicu
const RunAuthorPageCode = () => {
    // Kod specifičan za autor stranicu ako je potreban
};

// Univerzalne validacione funkcije
const validateField = (field, fieldId = null) => {
    const value = field.value.trim();
    const fieldName = fieldId || field.name;
    let error = '';
    
    if (field.hasAttribute('required') && !value) {
        error = 'Ovo polje je obavezno.';
    } else if (fieldName === 'agreement' && field.type === 'checkbox' && !field.checked) {
        error = 'Morate se složiti sa uslovima korišćenja.';
    } else if (value && (fieldName === 'email' || field.type === 'email')) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Neispravna email adresa.';
    } else if (fieldName === 'fullName' && value) {
        const nameRegex = /^[a-zA-ZšđčćžŠĐČĆŽ\s]{3,}$/;
        if (!nameRegex.test(value)) {
            error = 'Ime i prezime moraju imati minimum 3 karaktera i sadržavati samo slova.';
        }
    } else if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
        if (!phoneRegex.test(value)) {
            error = 'Neispravna format telefona.';
        }
    } else if (fieldName === 'reservationDate' && value) {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) error = 'Datum rezervacije ne može biti u prošlosti.';
    }
    
    return error;
};

const showFieldError = (field, message, isReservation = false) => {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    
    if (isReservation) {
        const errorElement = document.getElementById(field.id + 'Error');
        if (errorElement) errorElement.textContent = message;
    } else {
        const container = field.parentNode;
        let errorElement = container.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            container.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
};

const showFieldSuccess = (field, isReservation = false) => {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
    
    if (isReservation) {
        const errorElement = document.getElementById(field.id + 'Error');
        if (errorElement) errorElement.textContent = '';
    } else {
        const container = field.parentNode;
        const errorElement = container.querySelector('.error-message');
        if (errorElement) errorElement.remove();
    }
};

// Validacija kontakt forme
const initializeContactForm = () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Real-time validacija za sva polja
    const formFields = form.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
        // Validacija na blur (kada korisnik napusti polje)
        field.addEventListener('blur', () => {
            const error = validateField(field);
            if (error) {
                showFieldError(field, error);
            } else {
                showFieldSuccess(field);
            }
        });
        
        // Validacija na input (dok korisnik kuca)
        field.addEventListener('input', () => {
            // Samo ako je polje već bilo validirano (ima klase)
            if (field.classList.contains('is-invalid') || field.classList.contains('is-valid')) {
                const error = validateField(field);
                if (error) {
                    showFieldError(field, error);
                } else {
                    showFieldSuccess(field);
                }
            }
        });
        
        // Posebno za checkbox
        if (field.type === 'checkbox') {
            field.addEventListener('change', () => {
                const error = validateField(field);
                if (error) {
                    showFieldError(field, error);
                } else {
                    showFieldSuccess(field);
                }
            });
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        formFields.forEach(field => {
            const error = validateField(field);
            if (error) {
                showFieldError(field, error);
                isValid = false;
            } else {
                showFieldSuccess(field);
            }
        });
        
        if (isValid) {
            showSuccessMessage(form, 'Email je uspešno poslat! Kontaktiraćemo vas u što kraćem roku.');
            form.reset();
            // Ukloni sve validacione klase nakon reset-a
            formFields.forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
                const container = field.parentNode;
                const errorElement = container.querySelector('.error-message');
                if (errorElement) errorElement.remove();
            });
        } else {
            hideSuccessMessage(form);
        }
    });
};

// Sistem recenzija
const initializeReviewSystem = () => {
    const reviewForm = document.getElementById('reviewForm');
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const reviewText = document.getElementById('reviewText').value.trim();
        const reviewRating = document.getElementById('reviewRating').value;
        
        if (reviewText && reviewRating) {
            const container = document.getElementById('reviewsList');
            if (container) {
                const reviewCount = container.children.length + 1;
                const currentDate = new Date().toLocaleDateString('sr-RS');
                
                container.insertAdjacentHTML('afterbegin', `
                    <div class="review-item">
                        <div class="review-header">
                            <div class="review-rating">${'★'.repeat(parseInt(reviewRating))}${'☆'.repeat(5 - parseInt(reviewRating))}</div>
                            <span class="review-number">Recenzija #${reviewCount}</span>
                        </div>
                        <p class="review-text">${reviewText}</p>
                        <span class="review-date">${currentDate}</span>
                    </div>
                `);
            }
            reviewForm.reset();
        }
    });
};


// Modal funkcije
let currentBook = null;

const openReservationModal = (book) => {
    currentBook = book;
    const modal = document.getElementById('reservationModal');
    const dateInput = document.getElementById('reservationDate');
    
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeReservationModal = () => {
    const modal = document.getElementById('reservationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    document.getElementById('reservationForm').reset();
    clearAllErrors();
    currentBook = null;
};

// Validacija polja rezervacionog modala
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

// Inicijalizacija rezervacionog sistema
const initializeReservationSystem = () => {
    const modal = document.getElementById('reservationModal');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('reservationForm');
    
    if (!modal || !closeBtn || !form) return;
    
    // Real-time validacija za rezervacioni modal
    const fields = ['fullName', 'memberCard', 'reservationDate', 'email'];
    fields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            // Validacija na blur
            element.addEventListener('blur', () => {
                const error = validateField(element, fieldId);
                if (error) {
                    showFieldError(element, error, true);
                } else {
                    showFieldSuccess(element, true);
                }
            });
            
            // Validacija na input (dok korisnik kuca)
            element.addEventListener('input', () => {
                // Samo ako je polje već bilo validirano
                if (element.classList.contains('is-invalid') || element.classList.contains('is-valid')) {
                    const error = validateField(element, fieldId);
                    if (error) {
                        showFieldError(element, error, true);
                    } else {
                        showFieldSuccess(element, true);
                    }
                }
            });
        }
    });
    
    // Zatvaranje modala
    closeBtn.addEventListener('click', closeReservationModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeReservationModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeReservationModal();
        }
    });
    
    // Slanje forme
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        fields.forEach(fieldId => {
            const element = document.getElementById(fieldId);
            if (element) {
                const error = validateField(element, fieldId);
                if (error) {
                    showFieldError(element, error, true);
                    isValid = false;
                } else {
                    showFieldSuccess(element, true);
                }
            }
        });
        
        if (isValid) {
            window.location.href = 'success.html';
        } else {
            hideSuccessMessage(form);
        }
    });
};

// Sistem poruka o uspešnosti
const showSuccessMessage = (form, message) => {
    const existingMessage = form.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = 'background-color: var(--success); color: var(--text-white); padding: 1rem; margin-top: 1rem; border-radius: 4px; text-align: center; font-weight: 500;';
    successDiv.textContent = message;
    form.appendChild(successDiv);
};

const hideSuccessMessage = (form) => {
    const existingMessage = form.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
};

// Dodavanje stilova za recenzije
const addReviewStyles = () => {
    if (document.getElementById('review-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'review-styles';
    style.textContent = `
        .review-item { background: var(--bg-card); padding: 1.5rem; margin-bottom: 1rem; border: 1px solid var(--border-subtle); }
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .review-rating { color: var(--primary-color); font-size: 1.2rem; }
        .review-number { font-size: 0.8rem; color: var(--text-light-gray); text-transform: uppercase; letter-spacing: 0.1em; }
        .review-text { color: var(--text-white); margin-bottom: 1rem; line-height: 1.6; }
        .review-date { font-size: 0.8rem; color: var(--text-light-gray); }
    `;
    document.head.appendChild(style);
};

addReviewStyles();