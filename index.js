numberofdrumbutton=document.querySelectorAll(".drum").length
for(i=0;i<numberofdrumbutton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        buttonInnerhtml=this.innerHTML
        makesound(buttonInnerhtml)
        buttonanimation(buttonInnerhtml)
    })
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key)
    buttonanimation(event.key)
})
function makesound(key)
{
    switch (key) {
        case 'w':
            audio=new Audio("sounds/tom-1.mp3")
            audio.play()
            break
        case 'a':
            audio=new Audio("sounds/tom-2.mp3")
            audio.play()
             break
        case 's':
            audio=new Audio("sounds/tom-3.mp3")
            audio.play()
            break
        case 'd':
            audio=new Audio("sounds/tom-4.mp3")
            audio.play()
            break
        case 'j':
            audio=new Audio("sounds/snare.mp3")
            audio.play()
            break
        case 'k':
            audio=new Audio("sounds/crash.mp3")
            audio.play()
            break
        case 'l':
            audio=new Audio("sounds/kick-bass.mp3")
            audio.play()
            break    
        default:
            audio=new Audio("sounds/snare.mp3")
            audio.play()
            break
    }
}
function buttonanimation(currkey)
{
    active = document.querySelector("."+ currkey)
    active.classList.add("pressed")
    setTimeout(function(){
        active.classList.remove("pressed")
    },100)
}