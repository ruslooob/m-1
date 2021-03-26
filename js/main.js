
// const anchors = document.getElementsByClassName('titles__link');
// if (anchors.length > 0) {
//     for (let anchor of anchors) {
//         anchor.addEventListener('click', linkClick);
//     }
// }

// function linkClick(e) {
//     const link = e.target;
//     let goto = link.getAttribute('href').slice(1);
//     if (goto) {
//         const gotoBlock = document.getElementsByName(goto)[0];
//         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
//         console.log(gotoBlockValue);
//         window.scrollTo({
//             top: gotoBlockValue,
//             behavior: "smooth"
//         });
//         // gotoBlock.scrollIntoView({block: "center", behavior: "smooth"});
//         // e.preventDefault();
//     }
    
// }

/* для смены стрелочки */
function spoiler(obj) {
    obj.className == 'spoiler' ?
        obj.className = 'spoiler revealed' :
        obj.className = 'spoiler';
}