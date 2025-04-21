document.addEventListener('DOMContentLoaded', function() {
    // Language translations with currency symbols
    const translations = {
        en: {
            title: "TechPlus | Premium Tech Gadgets & Electronics",
            logo: "TechPlus",
            shop: "Shop",
            categories: "Categories",
            support: "Support",
            deals: "Deals",
            smartphones: "Smartphones",
            laptops: "Laptops",
            tablets: "Tablets",
            smart_home: "Smart Home",
            accessories: "Accessories",
            new_releases: "New Releases",
            best_sellers: "Best Sellers",
            deals_discounts: "Deals & Discounts",
            refurbished: "Refurbished",
            search: "Search products...",
            announcement: "✨ Free shipping on orders over $100 | New tech arrivals now live!",
            hero_title: "TechPlus - Innovate Your Life",
            hero_subtitle: "Explore cutting-edge gadgets and electronics",
            shop_now: "Shop Now",
            latest_deals: "Latest Deals",
            brands_text: "Trusted by tech enthusiasts worldwide",
            new_arrivals: "New Arrivals",
            all: "All",
            view_all: "View All",
            why_shop: "Why Shop With TechPlus?",
            fast_shipping: "Fast Shipping",
            fast_shipping_text: "Free shipping on orders over $100 and expedited options available.",
            secure_payments: "Secure Payments",
            secure_payments_text: "Shop with confidence using our secure payment gateways.",
            support_24_7: "24/7 Support",
            support_24_7_text: "Our team is here to assist you anytime, anywhere.",
            newsletter_title: "Join the TechPlus Community",
            newsletter_text: "Get exclusive access to new product launches, deals, and tech updates.",
            email: "Your email address",
            subscribe: "Subscribe",
            privacy: "We respect your privacy. Unsubscribe at any time.",
            footer_about: "Your one-stop shop for the latest in tech gadgets and electronics.",
            connect: "Connect",
            contact_us: "Contact Us",
            shipping_returns: "Shipping & Returns",
            faq: "FAQ",
            warranty: "Warranty",
            copyright: "© 2025 TechPlus. All rights reserved.",
            privacy_policy: "Privacy Policy",
            terms_service: "Terms of Service",
            accessibility: "Accessibility",
            currency_symbol: "$",
            cart_empty: "Your cart is empty.",
            checkout_success: "Checkout successful! Thank you for your purchase.",
            checkout: "Checkout",
            subtotal: "Subtotal",
            about_us: "About TechPlus",
            about_text: "Welcome to TechPlus, your premier destination for the latest in technology and electronics. We pride ourselves on offering a curated selection of high-quality gadgets from top brands, ensuring you stay ahead in the tech world. Our mission is to innovate your life with cutting-edge products and exceptional customer service.",
            explore_now: "Explore Our Products",
            featured_products: "Featured Products",
            our_gallery: "Our Tech World"
        },
        ru: {
            title: "TechPlus | Премиум гаджеты и электроника",
            logo: "TechPlus",
            shop: "Магазин",
            categories: "Категории",
            support: "Поддержка",
            deals: "Акции",
            smartphones: "Смартфоны",
            laptops: "Ноутбуки",
            tablets: "Планшеты",
            smart_home: "Умный дом",
            accessories: "Аксессуары",
            new_releases: "Новинки",
            best_sellers: "Бестселлеры",
            deals_discounts: "Акции и скидки",
            refurbished: "Восстановленные",
            search: "Поиск продуктов...",
            announcement: "✨ Бесплатная доставка при заказе от 7000 ₽ | Новые поступления уже в продаже!",
            hero_title: "TechPlus - Инновации в вашей жизни",
            hero_subtitle: "Исследуйте передовые гаджеты и электронику",
            shop_now: "Купить сейчас",
            latest_deals: "Последние акции",
            brands_text: "Доверяют любители технологий по всему миру",
            new_arrivals: "Новые поступления",
            all: "Все",
            view_all: "Посмотреть все",
            why_shop: "Почему выбирают TechPlus?",
            fast_shipping: "Быстрая доставка",
            fast_shipping_text: "Бесплатная доставка при заказе от 7000 ₽ и ускоренные варианты.",
            secure_payments: "Безопасные платежи",
            secure_payments_text: "Покупайте с уверенностью благодаря безопасным платежным системам.",
            support_24_7: "Поддержка 24/7",
            support_24_7_text: "Наша команда готова помочь вам в любое время.",
            newsletter_title: "Присоединяйтесь к сообществу TechPlus",
            newsletter_text: "Получите эксклюзивный доступ к новым продуктам, акциям и новостям.",
            email: "Ваш адрес электронной почты",
            subscribe: "Подписаться",
            privacy: "Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.",
            footer_about: "Ваш универсальный магазин для новейших гаджетов и электроники.",
            connect: "Связаться",
            contact_us: "Связаться с нами",
            shipping_returns: "Доставка и возврат",
            faq: "Часто задаваемые вопросы",
            warranty: "Гарантия",
            copyright: "© 2025 TechPlus. Все права защищены.",
            privacy_policy: "Политика конфиденциальности",
            terms_service: "Условия обслуживания",
            accessibility: "Доступность",
            currency_symbol: "₽",
            cart_empty: "Ваша корзина пуста.",
            checkout_success: "Оформление заказа успешно! Спасибо за покупку.",
            checkout: "Оформить заказ",
            subtotal: "Итого",
            about_us: "О TechPlus",
            about_text: "Добро пожаловать в TechPlus, ваш главный источник новейших технологий и электроники. Мы гордимся тем, что предлагаем тщательно отобранные высококачественные гаджеты от ведущих брендов, чтобы вы всегда были на шаг впереди в мире технологий. Наша миссия — внедрять инновации в вашу жизнь с помощью передовых продуктов и исключительного обслуживания клиентов.",
            explore_now: "Исследуйте наши продукты",
            featured_products: "Рекомендуемые продукты",
            our_gallery: "Наш технологический мир"
        },
        hy: {
            title: "TechPlus | Պրեմիում տեխնոլոգիաներ և էլեկտրոնիկա",
            logo: "TechPlus",
            shop: "Խանութ",
            categories: "Կատեգորիաներ",
            support: "Աջակցություն",
            deals: "Գործարքներ",
            smartphones: "Սմարթֆոններ",
            laptops: "Նոութբուքեր",
            tablets: "Պլանշետներ",
            smart_home: "Խելացի տուն",
            accessories: "Աքսեսուարներ",
            new_releases: "Նորույթներ",
            best_sellers: "Լավագույն վաճառքներ",
            deals_discounts: "Գործարքներ և զեղչեր",
            refurbished: "Վերանորոգված",
            search: "Որոնել ապրանքներ...",
            announcement: "✨ Անվճար առաքում 50,000 դրամից սկսած պատվերների դեպքում | Նոր տեխնոլոգիաներ հիմա վաճառքում!",
            hero_title: "TechPlus - Նորարարություն Ձեր կյանքում",
            hero_subtitle: "Հայտնաբերեք առաջադեմ սարքեր և էլեկտրոնիկա",
            shop_now: "Գնել հիմա",
            latest_deals: "Վերջին գործարքներ",
            brands_text: "Վստահում են տեխնոլոգիաների սիրահարները ամբողջ աշխարհում",
            new_arrivals: "Նոր ժամանումներ",
            all: "Բոլորը",
            view_all: "Դիտել բոլորը",
            why_shop: "Ինչու՞ ընտրել TechPlus-ը",
            fast_shipping: "Արագ առաքում",
            fast_shipping_text: "Անվճար առաքում 50,000 դրամից սկսած պատվերների դեպքում և արագացված տարբերակներ:",
            secure_payments: "Անվտանգ վճարումներ",
            secure_payments_text: "Գնեք վստահորեն՝ օգտագործելով մեր անվտանգ վճարային համակարգերը:",
            support_24_7: "24/7 Աջակցություն",
            support_24_7_text: "Մեր թիմը պատրաստ է օգնել Ձեզ ցանկացած ժամանակ, ցանկացած վայրում:",
            newsletter_title: "Միացեք TechPlus համայնքին",
            newsletter_text: "Ստացեք բացառիկ մուտք դեպի նոր ապրանքներ, գործարքներ և տեխնոլոգիական նորություններ:",
            email: "Ձեր էլ. փոստի հասցեն",
            subscribe: "Բաժանորդագրվել",
            privacy: "Մենք հարգում ենք Ձեր գաղտնիությունը: Կարող եք չեղարկել բաժանորդագրությունը ցանկացած ժամանակ:",
            footer_about: "Ձեր միակ կանգառը վերջին տեխնոլոգիաների և էլեկտրոնիկայի համար:",
            connect: "Կապվել",
            contact_us: "Կապվեք մեզ հետ",
            shipping_returns: "Առաքում և վերադարձ",
            faq: "Հաճախ տրվող հարցեր",
            warranty: "Երաշխիք",
            copyright: "© 2025 TechPlus: Բոլոր իրավունքները պաշտպանված են:",
            privacy_policy: "Գաղտնիության քաղաքականություն",
            terms_service: "Ծառայությունների պայմաններ",
            accessibility: "Հաշմանդամություն",
            currency_symbol: "֏",
            cart_empty: "Ձեր զամբյուղը դատարկ է:",
            checkout_success: "Պատվերը հաջողությամբ կատարվել է: Շնորհակալություն գնումների համար:",
            checkout: "Հաշվարկ",
            subtotal: "Ընդամենը",
            about_us: "TechPlus-ի մասին",
            about_text: "Բարի գալուստ TechPlus՝ Ձեր առաջնային նպատակակետը նորագույն տեխնոլոգիաների և էլեկտրոնիկայի համար: Մենք հպարտանում ենք առաջարկելով բարձրորակ գաջեթների ընտրված տեսականի առաջատար ապրանքանիշերից՝ ապահովելով, որ Դուք միշտ առաջ եք տեխնոլոգիական աշխարհում: Մեր առաքելությունն է նորարարություն բերել Ձեր կյանք՝ առաջարկելով առաջադեմ արտադրանք և բացառիկ հաճախորդների սպասարկում:",
            explore_now: "Հայտնաբերեք մեր արտադրանքը",
            featured_products: "Հատուկ ընտրված արտադրանք",
            our_gallery: "Մեր տեխնոլոգիական աշխարհը"
        }
    };

    // Flag images for languages
    const flagImages = {
        en: "https://flagcdn.com/w40/us.png",
        ru: "https://flagcdn.com/w40/ru.png",
        hy: "https://flagcdn.com/w40/am.png"
    };

    // Currency conversion rates (relative to USD)
    const currencyRates = {
        en: 1,      // USD
        ru: 90,     // RUB
        hy: 400     // AMD
    };

    // Initialize state
    let currentLang = localStorage.getItem('language') || 'en';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // DOM Elements
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    const themeToggle = document.querySelector('.theme-toggle');
    const langSwitcher = document.querySelector('.lang-switcher');
    const langFlag = document.querySelector('#lang-flag');
    const langDropdown = document.querySelector('.lang-dropdown');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const productCards = document.querySelectorAll('.product-card');
    const sortSelect = document.querySelector('#sort-products');
    const productCategories = document.querySelectorAll('.product-categories a');
    const newsletterForm = document.querySelector('.newsletter-form');
    let cartModal = document.querySelector('.cart-modal');
    let modalOverlay = document.querySelector('.modal-overlay');
    const scrollToTop = document.createElement('div');

    // Initialize page
    function initialize() {
        initializeModals();
        updateLanguage(currentLang);
        updateCartCount();
        setupEventListeners();
        showHeader();
        animateHero();
        setupScrollAnimations();
        updateWishlistIcons();
        initializeTheme();
        initializeScrollToTop();
        setupNavigation();
    }

    // Initialize modals
    function initializeModals() {
        if (!cartModal) {
            cartModal = document.createElement('div');
            cartModal.className = 'cart-modal';
            cartModal.setAttribute('tabindex', '-1');
            cartModal.setAttribute('role', 'dialog');
            cartModal.setAttribute('aria-labelledby', 'cart-modal-title');
            cartModal.innerHTML = `
                <div class="cart-header">
                    <h3 id="cart-modal-title">Your Cart</h3>
                    <i class="fas fa-times cart-close" aria-label="Close cart"></i>
                </div>
                <div class="cart-body"></div>
                <div class="cart-footer">
                    <p class="subtotal"><span data-lang="subtotal">Subtotal</span>: <span class="subtotal-amount">0.00</span></p>
                    <button class="checkout-btn" data-lang="checkout">Checkout</button>
                </div>
            `;
            document.body.appendChild(cartModal);
        }

        if (!modalOverlay) {
            modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            document.body.appendChild(modalOverlay);
        }
    }

    // Update language and currency
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        langFlag.src = flagImages[lang];
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                }
            }
        });

        // Update currency
        document.querySelectorAll('.price').forEach(priceElement => {
            const usdPrice = parseFloat(priceElement.getAttribute('data-price-usd'));
            const convertedPrice = (usdPrice * currencyRates[lang]).toFixed(2);
            priceElement.textContent = `${translations[lang].currency_symbol}${convertedPrice}`;
        });

        // Update cart modal title and buttons
        if (cartModal) {
            const cartTitle = cartModal.querySelector('#cart-modal-title');
            cartTitle.textContent = translations[lang].cart_empty;
            if (cart.length > 0) {
                cartTitle.textContent = translations[lang].logo;
            }
            updateCartModal();
        }

        // Update document title
        document.title = translations[lang].title;
    }

    // Update cart count
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Setup event listeners
function setupEventListeners() {
    // Cursor effects
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        setTimeout(() => {
            cursorFollower.style.left = `${e.clientX}px`;
            cursorFollower.style.top = `${e.clientY}px`;
        }, 100);
    });

    // Conditionally apply search functionality only if not on index.html
    if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        // Search toggle
        searchToggle.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            searchInput.focus();
        });

        // Search functionality
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = '';
            if (query) {
                const results = Array.from(productCards).filter(card =>
                    card.querySelector('h3').textContent.toLowerCase().includes(query)
                );
                results.forEach(card => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <img src="${card.querySelector('img').src}" alt="${card.querySelector('h3').textContent}">
                        <p>${card.querySelector('h3').textContent}</p>
                    `;
                    resultItem.addEventListener('click', () => {
                        card.scrollIntoView({ behavior: 'smooth' });
                        searchBar.classList.remove('active');
                        searchInput.value = '';
                        searchResults.innerHTML = '';
                    });
                    searchResults.appendChild(resultItem);
                });
            }
        });

        // Close search on outside click
        document.addEventListener('click', e => {
            if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBar.classList.remove('active');
            }
        });
    }

    // Cart button
    cartBtn.addEventListener('click', () => {
        updateCartModal();
        cartModal.classList.add('active');
        modalOverlay.classList.add('active');
    });

    // Close cart modal
    cartModal.addEventListener('click', e => {
        if (e.target.classList.contains('cart-close')) {
            cartModal.classList.remove('active');
            modalOverlay.classList.remove('active');
        }
    });

    // Modal overlay close
    modalOverlay.addEventListener('click', () => {
        cartModal.classList.remove('active');
        modalOverlay.classList.remove('active');
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        updateThemeIcons();
    });

    // Language switcher
    langSwitcher.addEventListener('click', () => {
        langDropdown.classList.toggle('active');
    });

    langDropdown.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            updateLanguage(lang);
            langDropdown.classList.remove('active');
        }
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Product category filter
    productCategories.forEach(category => {
        category.addEventListener('click', e => {
            e.preventDefault();
            productCategories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            const filter = category.getAttribute('href').substring(1);
            filterProducts(filter);
        });
    });

    // Product sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            sortProducts(sortSelect.value);
        });
    }

    // Add to cart
    productCards.forEach(card => {
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const product = {
                name: card.querySelector('h3').textContent,
                price: parseFloat(card.querySelector('.price').getAttribute('data-price-usd')),
                image: card.querySelector('img').src
            };
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateCartModal();
        });
    });

    // Wishlist toggle
    productCards.forEach(card => {
        const wishlistBtn = card.querySelector('.wishlist-btn');
        wishlistBtn.addEventListener('click', () => {
            const productName = card.querySelector('h3').textContent;
            if (wishlist.includes(productName)) {
                wishlist = wishlist.filter(item => item !== productName);
                wishlistBtn.classList.remove('active');
            } else {
                wishlist.push(productName);
                wishlistBtn.classList.add('active');
            }
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        });
    });

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Subscribed with: ${email}`);
            newsletterForm.reset();
        });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', e => {
        if (!langSwitcher.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });
}

    // Update cart modal
    function updateCartModal() {
        const cartBody = cartModal.querySelector('.cart-body');
        const subtotalAmount = cartModal.querySelector('.subtotal-amount');
        cartBody.innerHTML = '';
        if (cart.length === 0) {
            cartBody.innerHTML = `<p data-lang="cart_empty">${translations[currentLang].cart_empty}</p>`;
            subtotalAmount.textContent = '0.00';
            return;
        }

        let subtotal = 0;
        cart.forEach((item, index) => {
            const convertedPrice = (item.price * currencyRates[currentLang]).toFixed(2);
            subtotal += item.price * currencyRates[currentLang];
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${translations[currentLang].currency_symbol}${convertedPrice}</p>
                </div>
                <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
            `;
            cartBody.appendChild(cartItem);
        });

        subtotalAmount.textContent = `${translations[currentLang].currency_symbol}${subtotal.toFixed(2)}`;

        // Remove item from cart
        cartBody.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                updateCartModal();
            });
        });

        // Checkout button
        const checkoutBtn = cartModal.querySelector('.checkout-btn');
        checkoutBtn.textContent = translations[currentLang].checkout;
        checkoutBtn.addEventListener('click', () => {
            alert(translations[currentLang].checkout_success);
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateCartModal();
            cartModal.classList.remove('active');
            modalOverlay.classList.remove('active');
        });
    }

    // Show header with animation
    function showHeader() {
        setTimeout(() => {
            header.classList.add('active');
        }, 300);
    }

    // Animate hero section
    function animateHero() {
        if (hero) {
            setTimeout(() => {
                hero.classList.add('active');
            }, 500);
        }
    }

    // Setup scroll animations
    function setupScrollAnimations() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.products-section, .why-shop-section, .newsletter-section, .about-section, .brands-section, .featured-products, .gallery-section').forEach(section => {
            observer.observe(section);
        });
    }

    // Update wishlist icons
    function updateWishlistIcons() {
        productCards.forEach(card => {
            const wishlistBtn = card.querySelector('.wishlist-btn');
            const productName = card.querySelector('h3').textContent;
            if (wishlist.includes(productName)) {
                wishlistBtn.classList.add('active');
            }
        });
    }

    // Initialize theme
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
        updateThemeIcons();
    }

    // Update theme icons
    function updateThemeIcons() {
        const sun = themeToggle.querySelector('.fa-sun');
        const moon = themeToggle.querySelector('.fa-moon');
        if (document.body.classList.contains('dark-theme')) {
            sun.style.opacity = '0';
            moon.style.opacity = '1';
        } else {
            sun.style.opacity = '1';
            moon.style.opacity = '0';
        }
    }

    // Initialize scroll to top
    function initializeScrollToTop() {
        scrollToTop.className = 'scroll-to-top';
        scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTop.classList.add('active');
            } else {
                scrollToTop.classList.remove('active');
            }
        });

        scrollToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Filter products
    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sort products
    function sortProducts(criteria) {
        const productsArray = Array.from(productCards);
        productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').getAttribute('data-price-usd'));
            const priceB = parseFloat(b.querySelector('.price').getAttribute('data-price-usd'));
            const ratingA = a.querySelector('.rating span').textContent.replace(/[()]/g, '');
            const ratingB = b.querySelector('.rating span').textContent.replace(/[()]/g, '');

            if (criteria === 'price-asc') {
                return priceA - priceB;
            } else if (criteria === 'price-desc') {
                return priceB - priceA;
            } else if (criteria === 'rating') {
                return ratingB - ratingA;
            }
            return 0;
        });

        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        productsArray.forEach(card => productsGrid.appendChild(card));
    }

    // Setup navigation
    function setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.dropdown').classList.add('active');
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.dropdown').classList.remove('active');
            });
        });
    }

    // Run initialization
    initialize();
});