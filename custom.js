$(function(){

	var $orders = $('#ord');
	$.ajax({

		type: 'GET',
		url:"https://learnwebcode.github.io/json-example/pets-data.json",
		success: function(data){

			console.log(data);
			console.log(data.pets[ 0 ].name)

			$.each(data, function(i,ord){

				console.log(i);
				console.log(ord);	
				console.log(ord[0].name);

				for (i = 0; i < data.pets.length; i++)
				{
					console.log(ord[i].name);
					if (ord[i].favFoods)
					{
						console.log(ord[i].favFoods);
					}
				}

			})
		},

		error: function() {
			alert("didn't work");
		}

		
	});


});


// $(function(){

// 	var $orders = $('#ord');
// 	// $.ajax({


// 		type: "GET",
// 		url: "https://learnwebcode.github.io/json-example/pets-data.json",
// 		success: function(data) {
// 			console.log(data);
// 			$.each(data,function(i,pets){
// 				console.log('i:' +i);
// 				// console.log('pets:' +pets);	
// 				console.log(pets);	
// 				console.log(pets[name]);	
// 			})
// 		}

// 		// failure: alert('failed to fetch');
// 	});

// 	// $.getJSON('https://learnwebcode.github.io/json-example/pets-data.json', function(jd){

// 	// 	for (i=0; i<jd.length;i++)
// 	// 	{
// 	// 		for (var name in jd[i])
// 	// 		{
// 	// 			console.log(name);
// 	// 		}
// 	// 	}
// 	// 	$orders.append('<li>'+jd.name+'</li>');
// 	// 	console.log(jd);
// 	// })
// // });