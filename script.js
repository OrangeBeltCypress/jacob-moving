
const objImage=document.querySelector(".char")
const speed=15
window.addEventListener('load',(e)=>{
    objImage.style.position='absolute'
    objImage.style.left=0
    objImage.style.top=0
})

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'a':
            objImage.style.left= parseInt(objImage.style.left)-speed+"px"
            break
        case 'd':
            objImage.style.left= parseInt(objImage.style.left)+speed+"px"
            break
        case 'w':
            objImage.style.top= parseInt(objImage.style.top)-speed+"px"
            break
        case 's':
            objImage.style.top= parseInt(objImage.style.top)+speed+"px"
            break
            case 'ArrowLeft':
            objImage.style.left= parseInt(objImage.style.left)-speed+"px"
            break
        case 'ArrowRight':
            objImage.style.left= parseInt(objImage.style.left)+speed+"px"
            break
        case 'ArrowTop':
            objImage.style.top= parseInt(objImage.style.top)-speed+"px"
            break
        case 'ArrowDown':
            objImage.style.top= parseInt(objImage.style.top)+speed+"px"
            break
    }
})


