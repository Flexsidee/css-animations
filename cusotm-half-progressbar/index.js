let css = document.getElementById('max');
css.oninput =  () =>{
    let y= css.value - 135 ;
    let z = y/1.8;
    document.querySelector('span').style.transform = `rotate(${css.value}deg)`;
    document.querySelector('small').innerText= z.toFixed(2) + '%';
}

let svg = document.getElementById('han');
svg.oninput =  () =>{
    let a= svg.value - 393 ;
    let b = a/3.93;
    document.getElementById('circle').style.strokeDasharray= svg.value;
    document.querySelector('text').innerHTML= b.toFixed(2) + '%';
}