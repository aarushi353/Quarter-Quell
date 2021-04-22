const text=baffle(".electrothontitle");
var motto=['|MAY THE ODDS|','|BE|','|EVER|','|IN YOUR FAVOUR|','LOREM IPSUM 2020'];
var i=0;
function write(){
    document.getElementById("tagb").innerHTML=motto[i];
    i++;
}
text.set({
    characters: '>░█ ░▓░█░ ░░▒░▓ █░░ <██▓>',
    speed: 100
})
text.start(1000);
text.reveal(1250);

const text2=baffle("#dates");
text2.set({
    characters: '123456789012345678901234567890',
    speed: 500
})
text2.start(2000);
text2.reveal(3000);

write();
setTimeout(write, 4000);

setTimeout(write, 4500);

setTimeout(write, 5000);
setTimeout(write, 5500);