class ImageOverlay {
    constructor() {
        this.overlay = null;
        this.currentImageIndex = 0;
        this.images = [];
        this.init();
    }

    init() {
        this.createOverlayElement();
        this.createOverlayStructure();
        this.bindEvents();
    }

    createOverlayElement() {
        // Create a separate overlay for image overlay functionality
        this.overlay = document.createElement('div');
        this.overlay.className = 'image-modal-overlay';
        document.body.appendChild(this.overlay);
    }

    createOverlayStructure() {
        this.overlay.innerHTML = `
            <div class="image-overlay-container">
                <button class="close-btn" aria-label="Close overlay">&times;</button>
                <button class="nav-btn prev-btn" aria-label="Previous image">&#8249;</button>
                <div class="image-wrapper">
                    <img class="overlay-image" src="" alt="" />
                </div>
                <button class="nav-btn next-btn" aria-label="Next image">&#8250;</button>
                <div class="image-counter">
                    <span class="current-index">1</span> / <span class="total-images">1</span>
                </div>
            </div>
        `;

        // Add CSS styles
        this.addStyles();
    }    addStyles() {
        if (!document.querySelector('#image-overlay-styles')) {
            const style = document.createElement('style');
            style.id = 'image-overlay-styles';
            style.textContent = `
                .image-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                    display: none;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .image-modal-overlay.active {
                    display: flex;
                    opacity: 1;
                }                
                
                .image-overlay-container {
                    position: relative;
                    max-width: 95vw;
                    max-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .image-wrapper {
                    position: relative;
                    max-width: 100%;
                    max-height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .overlay-image {
                    max-width: 100%;
                    max-height: 95vh;
                    min-width: 50vw;
                    min-height: 50vh;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    transition: transform 0.3s ease;
                }
                    
                .close-btn {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    font-size: 30px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s ease;
                    z-index: 1001;
                }

                .image-modal-overlay .close-btn:hover {
                    background: rgba(255, 255, 255, 0.4);
                }

                .nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s ease, opacity 0.3s ease;
                    z-index: 1001;
                }

                .nav-btn:hover {
                    background: rgba(255, 255, 255, 0.4);
                }

                .nav-btn:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .prev-btn {
                    left: -70px;
                }

                .next-btn {
                    right: -70px;
                }

                .image-counter {
                    position: absolute;
                    bottom: -50px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: white;
                    background: rgba(0, 0, 0, 0.5);
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                }                
                    
                @media (max-width: 768px) {
                    .image-overlay-container {
                        max-width: 100vw;
                        max-height: 100vh;
                        padding: 0 60px;
                    }

                    .nav-btn {
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }

                    .prev-btn {
                        left: 10px;
                    }

                    .next-btn {
                        right: 10px;
                    }

                    .close-btn {
                        top: 20px;
                        right: 20px;
                        width: 35px;
                        height: 35px;
                        font-size: 24px;
                    }

                    .overlay-image {
                        min-width: auto;
                        min-height: auto;
                        max-height: 80vh;
                    }

                    .image-counter {
                        bottom: 20px;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    bindEvents() {
        // Close overlay events
        this.overlay.querySelector('.close-btn').addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });

        // Navigation events
        this.overlay.querySelector('.prev-btn').addEventListener('click', () => this.prev());
        this.overlay.querySelector('.next-btn').addEventListener('click', () => this.next());

        // Keyboard events
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

        // Bind click events to all images on the page
        this.bindImageClicks();
    }    bindImageClicks() {
        // Listen for clicks on images within card components
        document.addEventListener('click', (e) => {
            // Check if clicked element is an image within a card component (but not the plus icon)
            if (e.target.tagName === 'IMG' && 
                e.target.closest('.card-component') && 
                !e.target.closest('.modal-btn')) {
                e.preventDefault();
                this.openImage(e.target);
            }
        });
    }    openImage(imageElement) {
        // Get all images from the same container or gallery
        const container = imageElement.closest('.post, .gallery, section') || document;
        this.images = Array.from(container.querySelectorAll('img')).filter(img => 
            img.closest('.card-component') && !img.closest('.modal-btn')
        );
        
        this.currentImageIndex = this.images.indexOf(imageElement);
        this.show();
    }

    show() {
        if (this.images.length === 0) return;

        const currentImage = this.images[this.currentImageIndex];
        const overlayImage = this.overlay.querySelector('.overlay-image');
        
        // Set image source and alt text
        overlayImage.src = currentImage.src;
        overlayImage.alt = currentImage.alt || 'Image';

        // Update counter
        this.updateCounter();

        // Update navigation buttons
        this.updateNavigation();

        // Show overlay
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
        
        // Clear image source to free memory
        setTimeout(() => {
            if (!this.overlay.classList.contains('active')) {
                this.overlay.querySelector('.overlay-image').src = '';
            }
        }, 300);
    }

    prev() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.show();
        }
    }

    next() {
        if (this.currentImageIndex < this.images.length - 1) {
            this.currentImageIndex++;
            this.show();
        }
    }

    updateCounter() {
        const currentSpan = this.overlay.querySelector('.current-index');
        const totalSpan = this.overlay.querySelector('.total-images');
        
        currentSpan.textContent = this.currentImageIndex + 1;
        totalSpan.textContent = this.images.length;
    }

    updateNavigation() {
        const prevBtn = this.overlay.querySelector('.prev-btn');
        const nextBtn = this.overlay.querySelector('.next-btn');
        
        prevBtn.disabled = this.currentImageIndex === 0;
        nextBtn.disabled = this.currentImageIndex === this.images.length - 1;

        // Hide navigation if only one image
        if (this.images.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }

    handleKeydown(e) {
        if (!this.overlay.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                this.close();
                break;
            case 'ArrowLeft':
                this.prev();
                break;
            case 'ArrowRight':
                this.next();
                break;
        }
    }
}

// Initialize the image overlay when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageOverlay();
});

// Export for use in other modules
export default ImageOverlay;