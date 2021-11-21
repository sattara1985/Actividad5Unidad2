
$(document).ready(function(){
    //console.log("HOLA");
    //$('#parrafo').css("font-size","30px");
    //$('.parrafo2').css("background","black").css("color","white");
    //$('li').css("background","salmon").css("text-align", "center");
    $('li').click(function(){
        $(this).addClass('resaltar1');
    });
    $('li').dblclick(function(){
        $(this).addClass('resaltar2');
    })
    /*
    $('.box').mouseover(function(){
        $(this).css("background","pink").css("color","blue");
    })
    $('.box').mouseout(function(){
        $(this).css("background","white").css("color","black");
    })
    */

    function changeIn()
    {   
        $(this).css("background","purple").css("color","yellow");
    }
    function changeOut()
    {   
        $(this).css("background","white").css("color","black");
    }

    $('.box').hover(changeIn,changeOut);

    $('#name').focus(function(){
        $(this).css("border", "5px solid black");

    });

    $('#name').blur(function(){
        $(this).css("border", "0.5px solid black");

    });
    /*$('#name').focus(function(){
        $(this).css("border", "5px solid black");

        */

        function confirmacion() {
            return confirm("Esta seguro que desea ir?");
           
       }
    
        
});

