function mus1() {
    var reprod = document.getElementById('reprod')
    var título = document.querySelector('h1')
    var cxmus = document.getElementsByClassName('mus')
    reprod.style.display = 'Block'
    título.style.display = 'none' 
    reprod.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZPdk5GaIDjo?si=PMHOCYKiZpmum7Hy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    var c = 0
    while (c<=3) { //Serve para impedir que duas ou mais caixas fiquem marcadas simultaneamente
        cxmus[c].style.backgroundColor = 'rgb(24, 24, 24)' //recebimento da cor original
        c++    
    } 
    cxmus[0].style.backgroundColor = 'rgba(148, 146, 146, 0.137)'

    if (window.innerWidth>=768) {
        reprod.style.backgroundImage = 'url(https://images.pexels.com/photos/774664/pexels-photo-774664.jpeg?auto=compress&cs=tinysrgb&w=600)'
        reprod.style.backgroundSize = 'cover'
        reprod.style.backgroundPosition = 'center bottom'
    }
}

function mus2() {
    var reprod = document.getElementById('reprod')
    var título = document.querySelector('h1')
    var cxmus = document.getElementsByClassName('mus') 
    reprod.style.display = 'Block'
    título.style.display = 'none' 
    reprod.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RvDt_KtOzbc?si=PsN-QjB-Xk3MO9UD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> '
    var c = 0
    while (c<=3) {
        cxmus[c].style.backgroundColor = 'rgb(24, 24, 24)'
        c++    
    }
    cxmus[1].style.backgroundColor = 'rgba(148, 146, 146, 0.137)'
    
    if (window.innerWidth>=768) {
        reprod.style.backgroundImage = 'url(https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        reprod.style.backgroundSize = 'cover'
        reprod.style.backgroundPosition = 'center center'
    }
}

function mus3() {
    var reprod = document.getElementById('reprod')
    var título = document.querySelector('h1')
    var cxmus = document.getElementsByClassName('mus')
    reprod.style.display = 'Block'
    título.style.display = 'none' 
    reprod.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UIdwCrfDNjU?si=0ZdEfLCITjRLnv8G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    var c = 0
    while (c<=3) {
        cxmus[c].style.backgroundColor = 'rgb(24, 24, 24)'
        c++    
    }
    cxmus[2].style.backgroundColor = 'rgba(148, 146, 146, 0.137)'

    if (window.innerWidth>=768) {
        reprod.style.backgroundImage = 'url(https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        reprod.style.backgroundSize = 'cover'
        reprod.style.backgroundPosition = 'center center'
    }
}

function mus4() {
    var reprod = document.getElementById('reprod')
    var título = document.querySelector('h1')
    var cxmus = document.getElementsByClassName('mus')
    reprod.style.display = 'Block'
    título.style.display = 'none' 
    reprod.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/3LiztfE1X7E?si=rGfkhADfe7e9YnG1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    var c = 0
    while (c<=3) {
        cxmus[c].style.backgroundColor = 'rgb(24, 24, 24)'
        c++    
    }
    cxmus[3].style.backgroundColor = 'rgba(148, 146, 146, 0.137)'

    if (window.innerWidth>=768) {
        reprod.style.backgroundImage = 'url(https://images.pexels.com/photos/2099737/pexels-photo-2099737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        reprod.style.backgroundSize = 'cover'
        reprod.style.backgroundPosition = 'center center'
    }
}
