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
    for ( datum of data){
        let div =document.createElement('div')
        div.classList.add('quote')
        div.innerHTML=datum.content.rendered
        document.querySelector('.quotes-display').append(div)
    }

    let quotes=document.querySelectorAll('.quote')
    // console.log(quotes)
    quotes.forEach(elem=>{
        console.log(elem)
        
        elem.addEventListener('click',()=>{        
        speak(elem.innerText)})
    
    
    })


})


function speak( text ){

    let say = new SpeechSynthesisUtterance(text);
    say.pitch = 3;               // Set Pitch 
    say.rate = 2;                // Set Rate (speed)
    say.lang = "en-US";          // Set Language
    speechSynthesis.speak(say);  // Speak
  
  }
  speak()

})