                                                // Here you don't need to type "img[data-scr]", just [data-scr] is enough.
const imagesToLoad = document.querySelectorAll('[data-src]')

function preLoad(img) {
    // here we get the src from the data-src from the img.
    const src = img.getAttribute("data-src");
    // if there isn't a data-src, it will return nothing.
    if(!src) {
        return; 
    }
    // Here "img" has a src which now is the image from the "data-src" from up there.
    img.src = src;
    // After it loads...
    img.onload = () => {
        // it will delete the "data-src" attribute.
        img.removeAttribute('data-src');
    };
};

// Here is the options for the image to load...
const options = {
    threshold: 0,
    // In this case, I set the rootMargin to -300px, so that I can see the changes of images.
    rootMargin: '0px 0px -300px 0px'
};


// You shouldn't use the following code.
// that's because you don't have access to the src of the image.
// Instead use it after the "img" from the preLoad function, up there.

//const loadImages = (image) => {
//    image.setAttribute('src', image.getAttribute('data-src'));
//    image.onload = () => {
//        image.removeAttribute('data-src');
//    };
//};

// The if statement for ('IntersectionObserver' in window) is not necessary, why? I don't know why...
const observer = new IntersectionObserver((items, observer) => {
    // Here I removed some bracts... I think I typed it right.
    // the forEach loop down there is saying now that, for each item, run the following function.
    // items.forEach(item => {what the function will do}
    // Before you were saying something like, forEach function.
    //  items.forEach((item) => {}, since the whole function is inside the bracts.
    items.forEach(item => {
        if (item.isIntersecting) {
            // I also used the preLoad function, before the loadImages.
            preLoad(item.target);
            // As I said up there, loadImages function is not necessary.
            //loadImages(item.target);
            observer.unobserve(item.target);
        }
    })
}, options);
//Because the if statement is not necessary, all the rest of the code that came after the "options" are also unnecessary.


imagesToLoad.forEach((img) => {
    // Here you shouldn't use loadImages, you should acctually have used the observer.observer.
    // That's because what is going to get the images, is the new IntersectionObserver((items, observer), which needs a "item", which in this case is the image. 
    observer.observe(img);
    //After that, what is going to call the other functions, would be what's inside the observer function.
});