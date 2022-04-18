function isValidEmail(){
    em = $.trim($("input[name = 'email']").val()); 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(em)) {
        return true; 
    }
    else{
        clearResults(); 
        return false; 
    }
}; 


function clearResults() {
    $("#output").empty(); 
    $("#emailErrorMessage").empty(); 
    $("#passwordErrorMessage").empty(); 
    $("input[name='email']").empty(); 
    $("input[name='password1']").empty(); 
    $("input[name='password2']").empty(); 
}; 



function formResults(){
$("#new-account-form").on("submit", function 
    (event){
        event.preventDefault(); 
        clearResults(); 
        var $emailAnswer = $("input[name='email']"); 
        var emailAnswer = $emailAnswer.val(); 
        console.log(emailAnswer); 

        var $firstpassword = $("input[name='password1']");
        var firstpassword = $firstpassword.val(); 
        console.log(firstpassword); 
        

        var $secondpassword = $("input[name='password2']"); 
        var secondpassword = $secondpassword.val(); 
        console.log(secondpassword); 
        if((firstpassword  != "" && secondpassword !="") &&  (secondpassword === firstpassword )) {
            $("#output").append("<br>" + emailAnswer + "<br>" + "passwords match");  
            $("input[name='email']").empty(); 
            $("input[name='password1']").empty(); 
            $("input[name='password2']").empty(); 
        
        }
        else {
            $("#output").append("<br>" + emailAnswer + "<br>" + "passwords blank or do not match");
            $("input[name='email']").empty(); 
            $("input[name='password1']").empty(); 
            $("input[name='password2']").empty(); 
        }
        
}); 
 $("input").focus(function() {
    clearResults();
}); 

}; 




