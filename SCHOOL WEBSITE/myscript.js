      var slideIndex = 0;
      showSlides();
       
      function showSlides()
       {

          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) 
            {

                slides[i].style.display = "none";  
            }
          slideIndex++;
          if (slideIndex > slides.length) 
           {

            slideIndex = 1;

           }

          for (i = 0; i < dots.length; i++) 
           {

             dots[i].className = dots[i].className.replace(" active", "");

           }

         slides[slideIndex-1].style.display = "block";  
         dots[slideIndex-1].className += " active";
         setTimeout(showSlides, 2000); // Change image every 2 seconds

      }


function validation() 
                        {

                      var  a = document.getElementById('name').value;
                      var  b = document.getElementById('username').value;
                      var  c = document.getElementById('password').value;
                      var  d = document.getElementById('conpassword').value;
                      var  e = document.getElementById('mobileno').value;
                      var  f=  document.getElementById('email').value;
  
                     var namecheck = /^[A-Za-z, ]{3,30}$/;
                     var usercheck =  /^(?=.*[0-9])(?=.*[!@=$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
                     var passwordcheck = /^(?=.*[0-9])(?=.*[!@=$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
                     var mobilecheck= /^[789][0-9]{9}$/ ;
                     var emailcheck= /^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;


                     if(namecheck.test(a))
                       {
                     document.getElementById('nameerror').innerHTML = " ";
                       }
                     else
                       {
                    document.getElementById('nameerror').innerHTML = "** Name is invalid";
                    return false;
                       }
         

        
                   if(usercheck.test(b))
                      {
                   document.getElementById('usererror').innerHTML = " ";
                      }
                   else
                      {
                   document.getElementById('usererror').innerHTML = "** Username is invalid";
                   return false;
                     }



                 if(passwordcheck.test(c))
                    {
                 document.getElementById('passworderror').innerHTML = " ";
                    }
                 else
                    {
                 document.getElementById('passworderror').innerHTML = "** Password is invalid";
                 return false;
                    }



                 if(d.match(c))
                    {
                 document.getElementById('cpassworderror').innerHTML = " ";
                    }
                 else
                    {
                document.getElementById('cpassworderror').innerHTML = "** Password is not matcing";
                return false;
                    } 



                 if(mobilecheck.test(e))
                   {
                document.getElementById('mobileerror').innerHTML = " ";
                   }
                else
                  {

               document.getElementById('mobileerror').innerHTML = "** Mobno is invalid";
               return false;
                  }


                if(emailcheck.test(f))
                    {
               document.getElementById('emailerror').innerHTML = " ";
                    }
                else{

              document.getElementById('emailerror').innerHTML = "** Email is invalid";
              return false;
                    }      


           }

           

function login()

{

  var  name = document.getElementById('user').value;
  var  id = document.getElementById('pass').value;


  if(name=='' )
        {
  

          document.getElementById('loginerror').innerHTML = "** please fill the field";
          return false;
         }
         else{

        document.getElementById('loginerror').innerHTML = " ";
        

              }

if(id=='' )
        {
  

          document.getElementById('idderror').innerHTML = "** please fill the field";
          return false;
         }
         else{

        document.getElementById('idderror').innerHTML = " ";
        return false;

              }

}


 
 function myFunction()
                    {

                  var  r = document.getElementById('forget').value;
                  var emailcheck= /^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

                  if(emailcheck.test(r))
                     {
                   document.getElementById('forgeterror').innerHTML = " ";
                     }
                  else
                    {

                   document.getElementById('forgeterror').innerHTML = "** Email is invalid";
                   return false;
                    }

                    var x=document.getElementById("msg");
                    x.className="show";
                    setTimeout(function(){x.className= x.className.replace("show"," ");}, 3000);      

                 }
 


function Reset()
                                  
                {         

                    var  u = document.getElementById('oldpassword').value;
                    var  v = document.getElementById('newpassword').value;
                    var  k= document.getElementById('conpassword').value;

                   var passwordcheck = /^(?=.*[0-9])(?=.*[!@=$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;

                    if(passwordcheck.test(u)) 
                        {
                                document.getElementById('olderror').innerHTML = " ";
          
                        }
                    else
                         {
                               document.getElementById('olderror').innerHTML = " **Please fill the field";
                                return false;
                          }

                    if(passwordcheck.test(v))
                          {
  
                             document.getElementById('newerror').innerHTML = " ";
                               
                           }

                    else{

                               document.getElementById('newerror').innerHTML = " **Please fill the field";
                                return false;
                          }


                    if(k.match(v))
                                   {
                                 document.getElementById('conerror').innerHTML = "";
          
                                   }
                           else{

                            document.getElementById('conerror').innerHTML = " **Password is not matching";
                            return false;
                           }

                      var x=document.getElementById("lucky");
                     x.className="show";
                     setTimeout(function(){x.className= x.className.replace("show"," ");}, 3000);      


                  }
               



 
       function Function()
                          

                          {

                         var  t = document.getElementById('nameee').value;
                         var  s = document.getElementById('passss').value;
                         var u=document.getElementById('messageee').value;
            
              
                        if(t=='' )
                             {
  
                         document.getElementById('nameerror').innerHTML = "** please fill the field";
                         return false;
                            }
                         else{

                         document.getElementById('nameerror').innerHTML = " ";
                             }



                        var emailcheck= /^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
                        if(emailcheck.test(s)) 
                          {
                        document.getElementById('passerror').innerHTML = " ";
                          }
                        else{

                       document.getElementById('passerror').innerHTML = "** Email is invalid";
                       return false;
                            } 

                       if(u=='' )
                           {
                        document.getElementById('messageerror').innerHTML = "** please fill the field";
                        return false;
                            }
                        else
                           {
                       document.getElementById('messageerror').innerHTML = " ";
        
                          }
                     var x=document.getElementById("aliva");
                     x.className="show";
                     setTimeout(function(){x.className= x.className.replace("show"," ");}, 3000);      




                    }



