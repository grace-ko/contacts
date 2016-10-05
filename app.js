var numberOfContacts=0;
var contactList=[];

$(document).ready(function(){

    $('.result').hide();
    $('.fullList').hide();
    $('.reset').hide();
    $('.resetList').hide();

    $('.contact').submit(function(event){
        event.preventDefault();
        $('.result').show();
        
        var individual={
            firstname:($("input[name='firstname']").val()),
            lastname:($("input[name='lastname']").val()),
            phonenumber:($("input[name='phonenumber']").val()),
            street:($("input[name='street']").val()),
            city:($("input[name='city']").val()),
            state:($("input[name='state']").val()),
            contactOrder: numberOfContacts
        }

        var saveContactList=function(){
            contactList.push(individual);
                
        }

        saveContactList();
        

        $('.resultList').append('<li>'+contactList[numberOfContacts].firstname+" "+
        	contactList[numberOfContacts].lastname+'</li>');
        $("li:last").attr('id',numberOfContacts);
        numberOfContacts++;    
        $('.resetList').show();
        $('.resetList').click(function(){
            location.reload();
        });
        
        $('li').click(function(){
        
	        $('.fullList').show();
	        $('.reset').show();
	        var pullList=$(this).attr('id');

	        $('.fullList').html('<h3>'+'Contact Detail'+'</h3>'+'First Name:'
	        	+' '+contactList[pullList].firstname+'<br>'+'Last Name:'+' '+
	        	contactList[pullList].lastname+'<br>'+"Phone Number:"+' '+
	        	contactList[pullList].phonenumber+'<br>'+'Street:'+' '+
	        	contactList[pullList].street+'<br>'+'State:'+' '+
	        	contactList[pullList].state+'<br><br>');

        });
            $('.reset').click(function(){
                $(this).hide();
                $('.fullList').hide();

            });

    });


});


