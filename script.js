console.log("return rushi.....")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamberger').addEventListener("click",()=>
{
    document.querySelector('.slidebar').classList.toggle('slidebargo');
    if(document.querySelector('.slidebar').classList.contains('slidebargo'))
    {
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else
    {
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
        }, 400);
    }
})