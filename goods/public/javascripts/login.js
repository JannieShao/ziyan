$(document).ready(function() {
    
    $("#do_login").submit(function(event) {
        $self = $(this);
        $.ajax({
            type : $self.attr('method'),
            url  : $self.attr('action'),
            data : $self.serialize(),
        }).done(function(data) {
            if (data.login_ok === 1) {
                setTimeout(function() {
                    location.href = "/index"
                }, 500)                
            } else {
                if(data.login_ok === 2) {
                    alert('该账户已被禁用，请联系管理员')
                } else {
                    alert('用户名或密码错误') 
                }                              
            }
        })
        event.preventDefault()
    })
})    