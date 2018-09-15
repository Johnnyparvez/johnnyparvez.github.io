        $(document).ready(function(){
            $("#userform").validate({
                rules: {
                username: "required",
                username1: "required",
                userphone: "required",
                userpassword: "required",
                useremail: {
                  required: true,
                  email: true
                }
              },
              messages: {
                username: "Please specify your name",
                username1: "Please specify your name",
                userphone: "Please specify your phone",
                useremail: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                }
              }
            }); 
			            $("#userformm").validate({
                rules: {
                usernamem: "required",
                usernamen: "required",
                userphone: "required",
                userpassword: "required",
                userpasswordd: "required",
                useremail: {
                  required: true,
                  email: true
                },
				useremaill: {
                  required: true,
                  email: true
                }
              },
              messages: {
                usernamem: "Please specify your name",
                usernamen: "Please specify your username",
                userphone: "Please specify your phone",
                useremail: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                },
				 useremaill: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                }
              }
            }); 
			$("#userformc").validate({
                rules: {
                usernamemd: "required",
                subd: "required",
                textaread: "required",
                userpassword: "required",
                userpasswordd: "required",
                useremaild: {
                  required: true,
                  email: true
                },
				
              },
              messages: {
                usernamemd: "Please specify your name.",
                subd: "Please write your subject.",
                textaread: "Please write your short messages",
                useremaild: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                },
              }
            });
			
			
			
			$("#slider").bxSlider({
				auto:true,
				});
        })   