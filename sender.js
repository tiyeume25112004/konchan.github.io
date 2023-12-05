let snduser = document.getElementById('snd-user')
let rcvuser = document.getElementById('rcv-user')
let textuser = document.getElementById('text-user')

let confirm = false
let xImage = window.screenX;
let yImage = window.screenY;

/**
 * Create drag function and update position image 
 */
function confirmChange(newScreenX,newScreenY){
    let xImage = newScreenX;
    let yImage = newScreenY;
    rcvuser.textContent = xImage;

    let broadcastChannel = new BroadcastChannel('woa')
    broadcastChannel.addEventListener("message",e => {
        textuser.textContent = (e.data)
    })
    broadcastChannel.postMessage("Minh biet minh dep troai ma")
}
/**
 * auto update position Image 
 */
setInterval(function(){
    if(xImage != window.screenX || yImage != window.screenY){
        confirmChange(window.screenX,window.screenY);
    }
},100)
