export let initialPositions = [];

export function Parallax(scrollTop) {
    $$(".parallax").forEach(function (el, index, array) {
        var depth = Number(el.getAttribute('data-depth')) || 0.25;
        var background = el.getAttribute('data-background');
        var x = el.getAttribute('data-x') || 0;
        var offsetY = el.getAttribute('data-offsetY') || 0;
        var startPin = Number(el.getAttribute('data-pin')) || 0;
        // var isRelative = Number(el.getAttribute('data-relative')) || false;
        var translate3d;


        if ( !el.classList.contains('relative') ){
            initialPositions[index] = null;
        }
        else{
            if ( !initialPositions[index] ){
                initialPositions[index] = { elTop: getRelativePosition(el).y, elHeight: el.getBoundingClientRect().height };
            }
        }

        // console.log(initialPositions);

        if(el.classList.contains('relative')){

            var p = 0;
            var elTop = initialPositions[index].elTop;
            var pin = elTop + startPin;
            var limit = elTop + initialPositions[index].elHeight + p;
            var t = (scrollTop - elTop) * depth;

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

            var elTop = getPosition(el).y;
            var pin = elTop + startPin;
            var limit = elTop + el.offsetHeight;
            var t = (scrollTop - elTop) * depth;

            // console.log(elTop);

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

    var x = 0,
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
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}


/**
* returns the relative position of an element regardless of position/float issues
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
