$(document).ready(function(){
    let data = new Date();
    alert('Hoje é dia ' + data);
})

$(document).ready(function(){  
    $("#hide").click(function(){  
        $("p").hide();  
        console.log('Hide!!!');
    });  
});

$(document).ready(function(){  
    $("#show").click(function(){  
        $("p").show();  
        console.log('Show!!!');
    });  
});  

$(document).ready(function(){  
    $("#toggle").click(function(){  
        $("p").toggle();  
        console.log('Toggle!!!');
    });  
});  

$(document).ready(function(){  
    $("#fadein").click(function(){  
        console.log('fadein');
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#texto1").fadeIn(500);
    });  
});  

$(document).ready(function(){  
    $("#fadeout").click(function(){  
        console.log('fadeout');
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
        $("#texto1").fadeOut(500);
    });  
});  
