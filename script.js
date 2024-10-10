$("#change").on('click', function(){
    const color1 = $('#color1').val();  
    
    const color2 = $('#color2').val();  
    $('body').css('background',`linear-gradient(90deg, ${color1} 0%,  ${color2} 35%)`)
})