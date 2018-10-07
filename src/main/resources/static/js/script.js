	// initialize the bot object
	let bot = new RiveScript();
	
	// get ui elements
	const message_container = document.querySelector('.messages');
	const form = document.querySelector('form');
	const input_box = document.querySelector('input');

	// uploading all rive files
    const brains = [
       'RiveFiles/brain.rive'
    // './another-category-sample.rive
    ];

    bot.loadFile(brains).then(loading_done).catch(botNotReady);

    function loading_done(){
    	// upload completed sending hello message 
    	  console.log("Bot has finished loading!");
    	  bot.sortReplies();
	      botReply("Hello");
    }
    	
    // method to catch error
    function botNotReady(err){
    	console.log("An Error has occured: " +err);
    }
    
    // added event in case of error
    form.addEventListener('submit', (e) => {
	    e.preventDefault();
	    selfReply(input_box.value);
	    input_box.value = '';
    });

    //getting replay after going through 
    function botReply(message){
	    message_container.innerHTML += '<div class="bot">'+message+'</div>';
	    location.href = '#edge';
    }

    function selfReply(message){
	     message_container.innerHTML += '<div class="self">'+message+'</div>';
	     location.href = '#edge';
	     bot.reply("local-user", message).then(function(reply) {
	     botReply(reply);
     });
    }
