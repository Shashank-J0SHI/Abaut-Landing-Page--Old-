const sectionone = document.querySelector('#sectionone');
const sectionone_height = parseInt(getComputedStyle(sectionone).height);
const vidmain = document.querySelector('#vidmain');
const threed = document.querySelector('#three-d').classList;
const tumblr1 = document.querySelectorAll(".subtumb")[0];
const tumblr2 = document.querySelectorAll(".subtumb")[1];
const options = document.querySelector('#options').classList;
const input = document.querySelector('.input[type=text]');
const sel = document.querySelector('#sel');
const html = document.querySelector('html').style;

let scroll = window.scrollY;

let winheight = window.innerHeight;
let winheight0_2 = winheight * 0.2;
let winheight0_5 = winheight * 0.5;

let bool_scrolltype = true;
let bool_frame = true;
let bool_cursor = true;
let bool = false;

let interval;


window.onload = () =>
{
    html.scrollBehavior = 'auto';
    window.scrollTo(top);
    html.scrollBehavior = 'smooth';
    verify();
}

sel.onmousedown = () =>
{
    options.toggle('show');
    if(options.contains('show'))
    {
        sel.style.border = 'none';
        window.scrollTo(0, 100000);
    }
    else if (sel.value !== '')
    {
        sel.style.border = 'white 2px solid';
    }
}

sel.onfocus = () =>
{
    sel.style.border = 'none';
    sel.readOnly = true;
    options.add('show');
}

input.onkeydown = (event) =>
{
    if (event.keyCode == 8 && !bool)
    {
        bool = true;
        interval = setInterval(() => {
            input.value = '';
        }, 1500);
    }
}

input.onkeyup = (event) =>
{
    if (event.keyCode == 8)
    {
        bool = false;
        clearInterval(interval);
    }
}

window.onmousedown = (event) =>
{
    if (!event.target.matches('#sel'))
    {
        options.remove('show');
        if (sel.value !== '')
        {
            sel.style.border = 'white 2px solid';
        }
    }

    if (input.value !== '')
    {
        input.style.border = 'white 2px solid';
    }
    else{
        input.style.border = 'none';
    }
}


window.onscroll = () =>
{
    if (bool_frame)
    {
        scroll = window.scrollY;

        tumblr1.scrollTo(((scroll - winheight0_5) / 2), 0);
        tumblr2.scrollTo(((scroll - winheight0_5) / 4), 0);
    
        bool_frame = false;

        setTimeout(() => {
            bool_frame = true;
        }, 12);
    }
}

function verify()
{
    if (winheight !== sectionone_height)
    {
        bool_scrolltype = false;
    }
    else
    {
        bool_scrolltype = true;
    }
}

setInterval(() => {
    if (vidmain.ended)
    {
        threed.add('animate');
    }
}, 1000);