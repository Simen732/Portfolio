const trigger = document.querySelector('#div1_text')
const div = document.querySelector('.div1')

const trigger2 = document.querySelector('#div2_text')
const div2 = document.querySelector('.div2')

const cssLogo = document.querySelector('#cssLogo')

const trigger3 = document.querySelector('#div3_text')
const div3 = document.querySelector('.div3')



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