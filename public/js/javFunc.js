joinbody = $('#joinbody'),
    btnsignup = $('#btnsignup'),
    btnsignin = $('#btnsignin'),
    bodynsignin = $('#bodynsignin');

joinbody.hide();
    
btnsignup.click(() => {
    bodynsignin.hide();
    joinbody.show();
});
btnsignin.click(() => {
    joinbody.hide();
    bodynsignin.show();
})


let serachbox = document.getElementById('serachbox');
function widthLength() {
    serachbox.style.width = '400px';
}
function widthLengthSm() {
    serachbox.style.width = '240px';
    
}

 