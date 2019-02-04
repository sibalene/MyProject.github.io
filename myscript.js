function validate()
{
   alert("Hello");
   if(document.myform.Name.value=="")
   {
    alert("Please Provide your name");
    document.myform.Name.focus();
    return false;
    }
    if(document.myform.Email.value=="")
   {
    alert("Please Provide your Email");
    document.myform.Email.focus();
    return false;
    }
    if(document.myform.Zip.value==""||
    isNaN(document.myform.Zip.value)||
    document.myform.Zip.value.length!=7)
   {
    alert("Please Provide a zip in the format #######");
    document.myform.Zip.focus();
    return false;
    }
    if(document.myform.Country.value=="-1")
    {
     alert("Please Provide Your Country");
     return false;
     }
     return (true);
}