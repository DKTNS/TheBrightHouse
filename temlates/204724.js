$(function () {
    //
    $("#order-a-call-modal").on("shown.bs.modal", function () {
        $("#name-order-a-call-form").focus();
    })
    $("#phone-order-a-call-form").mask("+7 (999) 999-9999");
    $("#phone-order-a-call-form").on( "click", function() {
        if($("#phone-order-a-call-form").val() == '+7 (___) ___-____'){
            $("#phone-order-a-call-form").focus();
        }
    });
    //
    $('#send-btn-order-a-call-form').on( "click", function() {
        var name = $("#name-order-a-call-form").val();
        if(!name){
            $("#name-order-a-call-form").focus();
            return false;
        }
        var phone = $("#phone-order-a-call-form").val();
        if(!phone){
            $("#phone-order-a-call-form").focus();
            return false;
        }
        $("#name-order-a-call-form").val('').attr({'disabled': true});
        $("#phone-order-a-call-form").val('').attr({'disabled': true});
        $('#box-message-order-a-call-form').css({'display':'flex'});
        $.post('?template=callback-order', {
            'property:phone': phone,
            'property:name': name
        }, function(data){
        }, 'html');
    });
});