var vix;
var viy;
var ts;
var tt;
var x;
var y;
var t;
var beginmove;
var g = 9.8;
var xmax;
var ymax;
var posTop;
var points = 0;
function character() {

    var vi = document.getElementById("vi").value;
    g = document.getElementById("planets").value;
    var area = document.getElementById("area");
    var theta = document.getElementById('theta').value
    theta = theta * (Math.PI / 180);
    console.log(theta)

    //vix,viy
    vix = vi * Math.cos(theta).toFixed(3);
    viy = vi * Math.sin(theta).toFixed(3);

    //ts,tt
    ts = (viy / g).toFixed(3);
    tt = (ts * 2).toFixed(3);

    //ymax,xmax
    xmax = (vix * tt).toFixed(3);
    ymax = ((Math.pow(viy, 2) / 2) * g).toFixed(3);


    for (t = 0; t <= tt; t += 0.5) {
        var selectImg = Math.round(Math.random() * 6)
        console.log(selectImg)
        var img = document.createElement('img');
        if (selectImg == 0) {
            img.src = 'https://i.pinimg.com/originals/eb/57/7c/eb577ceb669cfa3161e4c56c80dea9e1.png'
        }
        if (selectImg == 1) {
            img.src = 'https://gifimage.net/wp-content/uploads/2017/09/balon-de-futbol-gif-13.gif'
        }
        if (selectImg == 2) {
            img.src = 'https://www.gifsanimados.org/data/media/604/nave-espacial-imagen-animada-0030.gif'
        }
        if (selectImg == 3) {
            img.src = 'https://img.icons8.com/fluency/512/sedan.png'
        }
        if (selectImg == 4) {
            img.src = 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/external-neptune-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png'
        }
        if (selectImg == 5) {
            img.src = 'https://i.gifer.com/ZOHY.gif'
        }
        if (selectImg == 6) {
            img.src = 'https://recuerdosdepandora.com/wp-content/uploads/2010/07/tierra.gif'
        }
        if (selectImg == 7) {
            img.src = 'https://o.remove.bg/downloads/1a86eee9-85ff-4b0e-b0a2-47d98c760d56/png-transparent-saturn-planet-solar-system-cassini-huygens-metallic-hydrogen-planet-miscellaneous-desktop-wallpaper-orbit-removebg-preview.png'
        }
         x = vix * t;
         y = 400 - (viy * t - (g * Math.pow(t, 2)) / 2);

        var vy = Math.abs(viy - g * t);
        var v = Math.sqrt(Math.pow(vix, 2) + Math.pow(vy, 2));
        img.style.width = 50 + "px";
        img.style.position = "absolute";
        img.style.top = y + "px";
        img.style.left = x + "px";
        img.title = `velx:${vix},vely:${vy},vel:${v}`;
        area.appendChild(img);
    }
    console.log(selectImg)
}
function burst() {
    for (i = 10; i <= 90; i += 10) {
        var vi = document.getElementById("vi").value;
        var theta = document.getElementById("theta").value;
        theta = i
        g = document.getElementById("planets").value;
        var area = document.getElementById("area");
        theta = theta * (Math.PI / 180);

        //vix,viy
         vix = vi * Math.cos(theta).toFixed(3);
         viy = vi * Math.sin(theta).toFixed(3);

        //ts,tt
         ts = (viy / g).toFixed(3);
         tt = (ts * 2).toFixed(3);

        //ymax,xmax
        xmax = (vix * tt).toFixed(3);
         ymax = ((Math.pow(viy, 2) / 2) * g).toFixed(3);

        console.log(vix);
        console.log(viy);
        console.log(ts);
        console.log(tt);
        console.log(xmax);
        console.log(ymax);

        for (t = 0; t <= tt; t += 0.5) {
             x = vix * t;
             y = 400 - (viy * t - (g * Math.pow(t, 2)) / 2);
            var img = document.getElementById('birdsred');
            var birds = document.createElement("img");
            console.log(vy);
            console.log(v);
            var vy = Math.abs(viy - g * t);
            var v = Math.sqrt(Math.pow(vix, 2) + Math.pow(vy, 2));
            birds.src = img.src;
            birds.style.width = 50 + "px";
            birds.style.position = "absolute";
            birds.style.top = y + "px";
            birds.style.left = x + "px";
            birds.title = `velx:${vix},vely:${vy},vel:${v}`;
            area.appendChild(birds);
        }
    }
    img.style.left = xmax + "px";
    img.style.top = "400px";
}
function resolve() {
    var vi = document.getElementById("vi").value;
    var theta = document.getElementById("theta").value;
    g = document.getElementById("planets").value;
    var area = document.getElementById("area");
    theta = theta * (Math.PI / 180);

    //vix,viy
     vix = vi * Math.cos(theta).toFixed(3);
     viy = vi * Math.sin(theta).toFixed(3);

    //ts,tt
     ts = (viy / g).toFixed(3);
     tt = (ts * 2).toFixed(3);

    //ymax,xmax
    xmax = (vix * tt).toFixed(3);
     ymax = ((Math.pow(viy, 2) / 2) * g).toFixed(3);

    console.log(vix);
    console.log(viy);
    console.log(ts);
    console.log(tt);
    console.log(xmax);
    console.log(ymax);

    for (t = 0; t <= tt; t += 0.5) {
         x = vix * t;
         y = 400 - (viy * t - (g * Math.pow(t, 2)) / 2);
        var img = document.getElementById('birdsred');
        var birds = document.createElement("img");
        console.log(vy);
        console.log(v);
        var vy = Math.abs(viy - g * t);
        var v = Math.sqrt(Math.pow(vix, 2) + Math.pow(vy, 2));
        birds.src = img.src;
        birds.style.width = 50 + "px";
        birds.style.position = "absolute";
        birds.style.top = y + "px";
        birds.style.left = x + "px";
        birds.title = `velx:${vix},vely:${vy},vel:${v}`;
        area.appendChild(birds);
    }
    img.style.left = xmax + "px";
    img.style.top = "400px";
}
function startmove() {
    var info = document.getElementById('info')
    var vi = document.getElementById("vi").value;
    var theta = document.getElementById("theta").value;
    g = document.getElementById("planets").value;
    var area = document.getElementById("area");
    theta = theta * (Math.PI / 180);

    //vix,viy
    vix = vi * Math.cos(theta).toFixed(3);
    viy = vi * Math.sin(theta).toFixed(3);

    //ts,tt
    ts = (viy / g).toFixed(3);
    tt = (ts * 2).toFixed(3);
    t=0;
    //ymax,xmax
    xmax = (vix * tt).toFixed(3);
     ymax = ((Math.pow(viy, 2) / 2) * g).toFixed(3);

    beginmove = setInterval(move, 10);
    info.className='card1'
    info.innerHTML=
    `
    Vi = ${vi}<br>
    Theta = ${theta}<br>
    Vix = ${vix}<br>
    Viy = ${viy}<br>
    Ts = ${ts}<br>
    Tt = ${tt}<br>
    Xmax = ${xmax}<br>
    Ymax = ${ymax}<br>
    `
}
function move() {
    var dog = document.getElementById('objetive').style.left
    var birdsred = document.getElementById("birdsred");
    //var r = parseInt(dog - birdsred.style.left)
    var puntos = document.getElementById('puntos')
    
    if (t <= tt) {
        
        x = vix * t;
        y = 400 - (viy * t - (g * Math.pow(t, 2)) / 2);
        birdsred.style.left = x + "px";
        birdsred.style.top = y + "px";
        if ((x > 510 && x < 550) && y >= posTop && y < posTop + 100) {
            alert('You Win')
            clearInterval(beginmove)
            points++
            puntos.innerHTML=points
        }
        
    } else {
        clearInterval(beginmove);
        birdsred.style.left = xmax + "px";
        birdsred.style.top = "400px";
    }   
    t+=0.1;
}
function backgroundchange() {
    var planets = document.getElementById('planets').value;
    if (planets == '9.807') {
        document.body.style.background = `url('https://s1.significados.com/foto/earth-11015-1920-41.jpg')`
    }
    if (planets == '1.62') {
        document.body.style.background = `url('https://www.nationalgeographic.com.es/medio/2022/09/23/imagen-de-la-luna_ae2043e2_1041x1041.jpeg')`
    }
    if (planets == '274') {
        document.body.style.background = `url('https://s03.s3c.es/imag/_v0/770x420/6/9/a/600x400_Imagen-cercana-del-sol-iStock.jpg')`
    }
    if (planets == '3.7') {
        document.body.style.background = `url('https://www.pilaradiario.com/u/fotografias/m/2022/5/9/f608x342-115128_144851_0.jpg')`
    }
    if (planets == '8.87') {
        document.body.style.background = `url('https://www.nationalgeographic.com.es/medio/2019/02/04/venus-atmosfera_82068686_800x800.jpg')`
    }
    if (planets == '3.721') {
        document.body.style.background = `url('https://fotografias.antena3.com/clipping/cmsimages02/2022/07/29/38669575-79EF-43F2-9B79-147A556A18C3/marte_69.jpg?crop=1287,724,x81,y0&width=1280&height=720&optimize=low&format=webply')`
    }
    if (planets == '24.79') {
        document.body.style.background = `url('https://www.nationalgeographic.com.es/medio/2021/09/28/jupiter-junto-a-una-de-sus-lunas-europa_505f4f1d_1663x1375.jpg')`
    }
    if (planets == '10.44') {
        document.body.style.background = `url('https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg')`
    }
    if (planets == '8.870') {
        document.body.style.background = `url('https://okdiario.com/img/2018/04/24/-a-que-huele-realmente-urano-la-respuesta-te-sorprendera-2.jpg')`
    }
    if (planets == '11.15') {
        document.body.style.background = `url('https://starwalk.space/gallery/images/neptune-at-opposition-2021/1920x1080.jpg')`
    }
    if (planets == '0.62') {
        document.body.style.background = `url('https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/09/pluton2-scaled.jpg?fit=2560%2C1707&quality=50&strip=all&ssl=1')`
    }
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
}
function characterchange() {
    var character = document.getElementById('character').value
    var vi = document.getElementById('vi')
    var img = document.getElementById('birdsred')
    if (character == 'ball') {
        img.src = 'https://gifimage.net/wp-content/uploads/2017/09/balon-de-futbol-gif-13.gif'
        vi.value = 70;
    }
    if (character == 'rocket') {
        img.src = 'https://www.gifsanimados.org/data/media/604/nave-espacial-imagen-animada-0030.gif'
        vi.value = 100;
    }
    if (character == 'car') {
        img.src = 'https://img.icons8.com/fluency/512/sedan.png'
        img.style.width = '100px'
        vi.value = 150;
    }
    if (character == 'neptune') {
        img.src = 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/external-neptune-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png'
        vi.value = 180;
    }
    if (character == 'dog') {
        img.src = 'https://i.gifer.com/ZOHY.gif'
        img.style.width = '70px'
        vi.value = 50;
    }
    if (character == 'earth') {
        img.src = 'https://recuerdosdepandora.com/wp-content/uploads/2010/07/tierra.gif'
        vi.value = 185;
    }
    if (character == 'saturn') {
        img.src = 'https://o.remove.bg/downloads/1a86eee9-85ff-4b0e-b0a2-47d98c760d56/png-transparent-saturn-planet-solar-system-cassini-huygens-metallic-hydrogen-planet-miscellaneous-desktop-wallpaper-orbit-removebg-preview.png'
        vi.value = 190;
    }

}
function positiontop() {
    var objetive = document.getElementById('objetive');
    posTop = Math.round(Math.random() * (315))
    if (posTop > 315) {
        posTop = 315
    }
    if (posTop < 50) {
        posTop = 50
    }
    console.log(posTop)
    objetive.style.top = posTop + 'px';
}