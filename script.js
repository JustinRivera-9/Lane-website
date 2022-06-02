let seeMore = document.getElementByClassName("see-more");
let more = document.getElementByClassName("more");

let open = function () {
    more.style.display = 'block';
};

seeMore.onclick = open;

