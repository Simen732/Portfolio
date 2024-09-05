const trigger = document.querySelector('#div1_text')
const div = document.querySelector('.div1')

const trigger2 = document.querySelector('#div2_text')
const div2 = document.querySelector('.div2')

const cssLogo = document.querySelector('#cssLogo')
const linuxLogo = document.querySelector('#linuxLogo')
const nodeLogo = document.querySelector('#nodeLogo')



const trigger3 = document.querySelector('#div3_text')
const div3 = document.querySelector('.div3')

const trigger4 = document.querySelector('#div4_text')
const div4 = document.querySelector('.div4')

const trigger5 = document.querySelector('#div5_text')
const div5 = document.querySelector('.div5')

const trigger6 = document.querySelector('#div6_text')
const div6 = document.querySelector('.div6')

div.addEventListener('mouseover', () => {
    trigger.style.display = 'flex'; // Show the target
});

div.addEventListener('mouseout', () => {
    trigger.style.display = 'none'; // Hide the target
});



div2.addEventListener('mouseover', () => {
    trigger2.style.display = 'flex'; // Show the target
    cssLogo.style.width = '30%';
});

div2.addEventListener('mouseout', () => {
    trigger2.style.display = 'none'; // Hide the target
    cssLogo.style.width = '100%';
});


div3.addEventListener('mouseover', () => {
    trigger3.style.display = 'flex'; // Show the target
});

div3.addEventListener('mouseout', () => {
    trigger3.style.display = 'none'; // Hide the target
});




div4.addEventListener('mouseover', () => {
    trigger4.style.display = 'flex'; // Show the target
    trigger4.style.justifyContent = 'end'; // Show the target
    linuxLogo.style.width = '30%';
    // linuxLogo.style.height = '30%';
    linuxLogo.src = '../img/Linuxhover.png'
    linuxLogo.firstChild.style.display ="flex";
});

div4.addEventListener('mouseout', () => {
    trigger4.style.display = 'none'; // Hide the target
    // linuxLogo.style.width = '100%';
    linuxLogo.style.height = '100%';


});




div5.addEventListener('mouseover', () => {
    trigger5.style.display = 'flex'; // Show the target
        // nodeLogo.style.width = '30%';
    nodeLogo.style.height = '30%';

});

div5.addEventListener('mouseout', () => {
    trigger5.style.display = 'none'; // Hide the target
    // nodeLogo.style.width = '100%';
    nodeLogo.style.height = '100%';

});




div6.addEventListener('mouseover', () => {
    trigger6.style.display = 'flex'; // Show the target


});

div6.addEventListener('mouseout', () => {
    trigger6.style.display = 'none'; // Hide the target


});