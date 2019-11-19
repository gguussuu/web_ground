$(document).ready(function(){
    var s_chk=0;
    $(".slider01 .txt").click(function(){
        if(s_chk==0){
             $(".slider01 img").addClass("on");
            s_chk++;
        }else{
             $(".slider01 img").removeClass("on");
            s_chk=0;
        }
    });
    var sw_chk=0;
       $(".swing .txt").click(function(){
        if(sw_chk==0){
             $(".swing img").addClass("on");
            sw_chk++;
        }else{
             $(".swing img").removeClass("on");
            sw_chk=0;
        }
    });
        var b_chk=0;
       $(".bar .txt").click(function(){
        if(b_chk==0){
             $(".bar img").addClass("on");
            b_chk++;
        }else{
             $(".bar img").removeClass("on");
            b_chk=0;
        }
    });
    
});