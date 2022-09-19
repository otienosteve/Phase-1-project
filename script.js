document.addEventListener('DOMContentLoaded',()=>{

getColor()
function getColor(){
    fetch('https://x-colors.herokuapp.com/api/random').then(res=>res.json())
    .then(color=>{
        document.body.style.backgroundColor=color.hex
    
    })
}

colorBtn=document.getElementById('color-btn')
colorBtn.addEventListener('click',()=>{
    getColor()
})







})