<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-lang="title">TechPlus | Premium Tech Gadgets & Electronics</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖥️</text></svg>">
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    
    <header>
        <nav>
            <div class="logo">
                <a href="index.html" data-lang="logo"><span class="logo-tech">Tech</span><span class="logo-plus">Plus</span><span class="logo-dot">.</span></a>
            </div>
            <div class="nav-links">
                <div class="nav-item">
                    <a href="shop.html" class="nav-link bold" data-lang="shop" aria-haspopup="true">Shop <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown">
                        <a href="shop.html#smartphones" data-lang="smartphones">Smartphones</a>
                        <a href="shop.html#laptops" data-lang="laptops">Laptops</a>
                        <a href="shop.html#tablets" data-lang="tablets">Tablets</a>
                        <a href="shop.html#smart-home" data-lang="smart-home">Smart Home</a>
                        <a href="shop.html#accessories" data-lang="accessories">Accessories</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="shop.html#categories" class="nav-link bold" data-lang="categories" aria-haspopup="true">Categories <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown">
                        <a href="shop.html#new-releases" data-lang="new-releases">New Releases</a>
                        <a href="shop.html#best-sellers" data-lang="best-sellers">Best Sellers</a>
                        <a href="shop.html#deals" data-lang="deals-discounts">Deals & Discounts</a>
                        <a href="shop.html#refurbished" data-lang="refurbished">Refurbished</a>
                    </div>
                </div>
                <a href="support.html" class="nav-link bold" data-lang="support">Support</a>
                <a href="shop.html#deals" class="nav-link bold" data-lang="deals">Deals</a>
            </div>
            <div class="nav-actions">
                <a href="#" class="cart-btn" aria-label="View cart"><i class="fas fa-shopping-bag"></i><span class="cart-count">0</span></a>
                <a href="account.html" class="account-btn" aria-label="Account"><i class="far fa-user"></i></a>
                <div class="theme-toggle" role="button" aria-label="Toggle theme">
                    <i class="fas fa-sun"></i>
                    <i class="fas fa-moon"></i>
                </div>
                <div class="lang-switcher">
                    <div class="lang-icon" role="button" aria-label="Select language">
                        <img src="" alt="Language Flag" id="lang-flag" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2716%27 viewBox=%270 0 24 16%27%3E%3Crect width=%2724%27 height=%2716%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2710%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EEN%3C/text%3E%3C/svg%3E';">
                    </div>
                    <div class="lang-dropdown">
                        <a href="#" data-lang="en">English</a>
                        <a href="#" data-lang="ru">Русский</a>
                        <a href="#" data-lang="hy">Հայերեն</a>
                    </div>
                </div>
                <div class="menu-btn" role="button" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1 class="hero-title" data-lang="hero-title">TechPlus - Innovate Your Life</h1>
            <p class="hero-subtitle" data-lang="hero-subtitle">Explore cutting-edge gadgets and electronics</p>
            <div class="hero-btns">
                <a href="shop.html" class="hero-btn shop-now" data-lang="shop-now">Shop Now</a>
                <a href="shop.html#deals" class="hero-btn secondary" data-lang="latest-deals">Latest Deals</a>
            </div>
        </div>
    </section>

    <div class="layout-container">
        <aside class="sidebar left"></aside>
        <main>
            <section class="about-section">
                <div class="section-header">
                    <h2 data-lang="about-us">About TechPlus</h2>
                </div>
                <div class="about-content">
                    <p data-lang="about-text">Welcome to TechPlus, your premier destination for the latest in technology and electronics. We pride ourselves on offering a curated selection of high-quality gadgets from top brands, ensuring you stay ahead in the tech world. Our mission is to innovate your life with cutting-edge products and exceptional customer service.</p>
                    <a href="shop.html" class="btn explore-now" data-lang="explore-now">Explore Our Products</a>
                </div>
            </section>

            <section class="brands-section">
                <p data-lang="brands-text">Trusted by tech enthusiasts worldwide</p>
                <div class="brands-grid">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%2740%27 viewBox=%270 0 100 40%27%3E%3Crect width=%27100%27 height=%2740%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2714%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EApple%3C/text%3E%3C/svg%3E';">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%2740%27 viewBox=%270 0 100 40%27%3E%3Crect width=%27100%27 height=%2740%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2714%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3ESamsung%3C/text%3E%3C/svg%3E';">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%2740%27 viewBox=%270 0 100 40%27%3E%3Crect width=%27100%27 height=%2740%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2714%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EAmazon%3C/text%3E%3C/svg%3E';">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%2740%27 viewBox=%270 0 100 40%27%3E%3Crect width=%27100%27 height=%2740%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2714%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EMicrosoft%3C/text%3E%3C/svg%3E';">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%2740%27 viewBox=%270 0 100 40%27%3E%3Crect width=%27100%27 height=%2740%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2714%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EIBM%3C/text%3E%3C/svg%3E';">
                </div>
            </section>

            <section class="featured-products">
                <div class="section-header">
                    <h2 data-lang="featured-products">Featured Products</h2>
                    <a href="shop.html" class="view-all" data-lang="view-all">View All <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="products-grid">
                    <div class="product-card" data-category="smartphones">
                        <div class="product-image">
                            <img src="https://www.dxomark.com/wp-content/uploads/medias/post-157467/Apple-iPhone-15-Pro_-natural_featured-image-packshot-review-1024x691.jpg" alt="iPhone 15 Pro" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27250%27 height=%27200%27 viewBox=%270 0 250 200%27%3E%3Crect width=%27250%27 height=%27200%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EiPhone 15 Pro%3C/text%3E%3C/svg%3E';">
                            <div class="product-badge new">New</div>
                            <div class="product-actions">
                                <button class="wishlist-btn" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
                                <button class="quick-view">Quick View</button>
                                <button class="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>iPhone 15 Pro</h3>
                            <p class="designer">by Apple</p>
                            <div class="price-container">
                                <p class="price" data-price-usd="999.00">$999.00</p>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>(428)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-card" data-category="laptops">
                        <div class="product-image">
                            <img src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png" alt="MacBook Pro" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27250%27 height=%27200%27 viewBox=%270 0 250 200%27%3E%3Crect width=%27250%27 height=%27200%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EMacBook Pro%3C/text%3E%3C/svg%3E';">
                            <div class="product-badge bestseller">Bestseller</div>
                            <div class="product-actions">
                                <button class="wishlist-btn" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
                                <button class="quick-view">Quick View</button>
                                <button class="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>MacBook Pro 14"</h3>
                            <p class="designer">by Apple</p>
                            <div class="price-container">
                                <p class="price" data-price-usd="1599.00">$1,599.00</p>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>(892)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-card" data-category="accessories">
                        <div class="product-image">
                            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492498882" alt="AirPods Pro" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27250%27 height=%27200%27 viewBox=%270 0 250 200%27%3E%3Crect width=%27250%27 height=%27200%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EAirPods Pro%3C/text%3E%3C/svg%3E';">
                            <div class="product-badge bestseller">Bestseller</div>
                            <div class="product-actions">
                                <button class="wishlist-btn" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
                                <button class="quick-view">Quick View</button>
                                <button class="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3>AirPods Pro 2</h3>
                            <p class="designer">by Apple</p>
                            <div class="price-container">
                                <p class="price" data-price-usd="249.00">$249.00</p>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>(765)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="gallery-section">
                <div class="section-header">
                    <h2 data-lang="our-gallery">Our Tech World</h2>
                </div>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1504707748692-419802cf939d" alt="Smart Home" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27300%27 height=%27200%27 viewBox=%270 0 300 200%27%3E%3Crect width=%27300%27 height=%27200%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3ESmart Home%3C/text%3E%3C/svg%3E';">
                        <div class="gallery-overlay">
                            <p>Smart Home Solutions</p>
                            <a href="shop.html#smart-home" class="btn">Explore</a>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Gadgets" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27300%27 height=%27200%27 viewBox=%270 0 300 200%27%3E%3Crect width=%27300%27 height=%27200%27 fill=%27gray%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%2720%27 fill=%27white%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3EGadgets%3C/text%3E%3C/svg%3E';">
                        <div class="gallery-overlay">
                            <p>Latest Gadgets</p>
                            <a href="shop.html" class="btn">View All</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newsletter-section">
                <div class="newsletter-content">
                    <h2 data-lang="newsletter-title">Join the TechPlus Community</h2>
                    <p data-lang="newsletter-text">Get exclusive access to new product launches, deals, and tech updates.</p>
                    <form class="newsletter-form">
                        <div class="form-group">
                            <input type="email" placeholder="Your email address" required data-lang-placeholder="email" aria-label="Email address">
                            <button type="submit" data-lang="subscribe">Subscribe <i class="fas fa-arrow-right"></i></button>
                        </div>
                        <div class="form-note">
                            <i class="fas fa-lock"></i> <span data-lang="privacy">We respect your privacy. Unsubscribe at any time.</span>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        <aside class="sidebar right"></aside>
    </div>

    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h3 class="footer-logo" data-lang="logo">TechPlus<span>.</span></h3>
                <p class="footer-about" data-lang="footer-about">Your one-stop shop for the latest in tech gadgets and electronics.</p>
            </div>
            <div class="footer-col">
                <h3 data-lang="shop">Shop</h3>
                <ul>
                    <li><a href="shop.html#smartphones" data-lang="smartphones">Smartphones</a></li>
                    <li><a href="shop.html#laptops" data-lang="laptops">Laptops</a></li>
                    <li><a href="shop.html#tablets" data-lang="tablets">Tablets</a></li>
                    <li><a href="shop.html#smart-home" data-lang="smart-home">Smart Home</a></li>
                    <li><a href="shop.html#accessories" data-lang="accessories">Accessories</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3 data-lang="support">Support</h3>
                <ul>
                    <li><a href="support.html#contact" data-lang="contact-us">Contact Us</a></li>
                    <li><a href="support.html#shipping" data-lang="shipping-returns">Shipping & Returns</a></li>
                    <li><a href="support.html#faq" data-lang="faq">FAQ</a></li>
                    <li><a href="support.html#warranty" data-lang="warranty">Warranty</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3 data-lang="connect">Connect</h3>
                <div class="social-links">
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                </div>
                <div class="contact-info">
                    <p><i class="fas fa-envelope"></i> <a href="/cdn-cgi/l/email-protection#0c7f797c7c637e784c78696f647c60797f226f6361"><span class="__cf_email__" data-cfemail="0477323737283533443322242f372b32346924282a">[email&#160;protected]</span></a></p>
                    <p><i class="fas fa-phone"></i> (800) 555-0200</p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p data-lang="copyright">© 2025 TechPlus. All rights reserved.</p>
            <div class="legal-links">
                <a href="privacy.html" data-lang="privacy-policy">Privacy Policy</a>
                <a href="terms.html" data-lang="terms-service">Terms of Service</a>
                <a href="accessibility.html" data-lang="accessibility">Accessibility</a>
            </div>
        </div>
    </footer>

    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="script.js"></script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'931e46723970ddcd',t:'MTc0NDkxNzU3OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'933b43790e77afb4',t:'MTc0NTIyMTU0My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
