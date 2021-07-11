$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:5,
                maxlength:10
            },
            sname:{             
                required:true,
                minlength:5,
                maxlength:10
            
            },emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:7
            },
            day:{
                required:true
            },
            gender:{
                required:true
            },
            message:{
                fname:{
                    required:"enter your full name"
                    
                },
                gender:{
                    required:"enter your gender"
                }
            }
        }
    })
})