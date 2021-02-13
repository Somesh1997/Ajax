
$('#btn').click(fetchRandomDogImage);

function fetchRandomDogImage()
{

    // var xhrRequest=new XMLHttpRequest();

    // xhrRequest.onload=function()
    // {
    //     console.log(xhrRequest.response);
    //     var completeURL=JSON.parse(xhrRequest.response);
    //     var imgURL=completeURL.message;
    //     $("#dog-img").attr('src',imgURL);
    // }

    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);

    // // True means whether you want your request ashynchronous or shynchronous 
    
    // xhrRequest.send();


     //Ajax Implementaion

    //  $.ajax({
    //      url:"https://dog.ceo/api/breeds/image/random",
    //      method:"GET",
    //      success:function(data)
    //      {{
    //         var imgURL=data.message;
    //         $("#dog-img").attr('src',imgURL);
    //      }}
    //  });
     

    $.get('https://codingninjas.in/api/v3/courses',function(data){
                
     var cour=data.data.courses;
     
     for(let i=0;i<cour.length;i++)
     {
         console.log(cour[i]);
     }


       //  console.log(data.data.courses[0]);
                
    }).fail(function(xhr,textStatus,erroThrown){
        console.log("Request Failed ");
        console.log(xhr.responseText);
        console.log(textStatus);
        console.log(erroThrown);

    });


}

