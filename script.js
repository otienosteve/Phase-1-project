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


fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand').then(res=>res.json())
.then(data=>{

document.querySelector('.quotes-display').innerHTML=data[0].content.rendered



})



})