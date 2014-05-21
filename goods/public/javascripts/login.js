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
                alert('用户名或密码错误')                
            }
        })
        event.preventDefault()
    })
})    