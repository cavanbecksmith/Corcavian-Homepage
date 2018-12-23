export let initialPositions = [];

export function Parallax(scrollTop) {
    $$(".parallax").forEach(function (el, index, array) {
        let depth = Number(el.getAttribute('data-depth')) || 0.25;
        let background = el.getAttribute('data-background');
        let x = el.getAttribute('data-x') || 0;
        let offsetY = el.getAttribute('data-offsetY') || 0;
        let startPin = Number(el.getAttribute('data-pin')) || 0;
        // let isRelative = Number(el.getAttribute('data-relative')) || false;
        let translate3d;


        if ( !el.classList.contains('relative') ){
            initialPositions[index] = null;
        }
        else{
            if ( !initialPositions[index] ){
                initialPositions[index] = { elTop: getRelativePosition(el).y, elHeight: el.getBoundingClientRect().height };
            }
        }

        if(el.classList.contains('relative')){

            let p = 0;
            let elTop = initialPositions[index].elTop;
            let pin = elTop + startPin;
            let limit = elTop + initialPositions[index].elHeight + p;
            let t = (scrollTop - elTop) * depth;

            if (scrollTop > pin && scrollTop <= limit) {
                el.style.top = t + "px";
            }
            else if (scrollTop >= limit) {} 
            else {
                el.style.top = 0 + 'px';
            }
            return;
        }
        else{

            let elTop = getPosition(el).y;
            let pin = elTop + startPin;
            let limit = elTop + el.offsetHeight;
            let t = (scrollTop - elTop) * depth;

            if (scrollTop > pin && scrollTop <= limit) {
                if (background) {
                    el.style.backgroundPosition = x + " " + t + "px";
                }
                else {
                    translate3d = 'translate3d(' + x + ', ' + t + "px, 0)";
                    el.style.transform = translate3d;
                }
            } else {
                if (background) {
                    el.style.backgroundPosition = x + " " + startPin + "px";
                }
                else {
                    translate3d = "translate3d(" + x + ",0,0)";
                    el.style.transform = translate3d;
                }
            }
        }
    });
}


/**
* returns the absolute position of an element regardless of position/float issues
* @param {HTMLElement} el - element to return position for 
* @returns {object} { x: num, y: num }
*/
export function getPosition(el) {

    let x = 0,
        y = 0;

    while (el != null && (el.tagName || '').toLowerCase() != 'html') {
        x += el.offsetLeft || 0;
        y += el.offsetTop || 0;
        el = el.parentElement;
    }

    return { x: parseInt(x, 10), y: parseInt(y, 10) };

}

//Query All Helper - Transforms NodeList to array
export function $$(selector, context) {
    context = context || document;
    let elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}


/**
* returns the el position relative to the top
* @param {HTMLElement} el - element to return position for
* @returns {object} { x: num, y: num }
*/
export function getRelativePosition(el){

    let elem = el.getBoundingClientRect();
    let win = el.ownerDocument.defaultView;

    return{
        y: elem.top + win.pageYOffset,
        x: elem.top + win.pageXOffset
    }

}


export const isInView = (el, offset, scrollTop) => {
    el = document.querySelector(el);
    let elPos = getRelativePosition(el).y;
    let elHeight = el.getBoundingClientRect().height;
    let limit =  elPos + elHeight;
    if (scrollTop > (elPos - offset) && scrollTop <= (limit)) {
        console.log('Element is in view');
    }
}

export const percentageScrolled =  (scrollTop) =>{

    let pageHeight = scrollDetails().pageHeight ;
    const percScrolled = (scrollTop / pageHeight) * 100;

    return percScrolled;
    // e.g 300 / 6000 = 0.05
};


export const scrollDetails = () => {
    return { // w/o taking the innerH off the percentage wouldn't be correct
        pageHeight: document.querySelector('html').offsetHeight - window.innerHeight,
        pageWidth: document.querySelector('html').offsetWidth - window.innerWidth
    }
};