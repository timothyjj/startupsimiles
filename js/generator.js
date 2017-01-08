    $(document).ready (bizTagline =function(){
        $(document).ready( bizName = function() {
            $('#tips').children('.tip').hide();
            var length = $("#tips .tip").length;    
            var ran = Math.floor((Math.random()*length));
            $('#tips > .tip:eq('+ran+')').show();
        });
        $(document).ready( compareTo = function() {
            $('#tips').children('.tip2').hide();
            var length = $("#tips .tip2").length;    
            var ran = Math.floor((Math.random()*length));
            $('#tips > .tip2:eq('+ran+')').show();
        });
    });
    document.getElementById("startupButton").onclick = bizTagline;