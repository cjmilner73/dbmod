var callAPIAnswer = (answer) =>
{

	// instantiate a headers object

	var myHeaders = new Headers();

	// add content type header to object

	myHeaders.append("Content-Type", "application/json");

	// using built in JSON utility package turn object to string and store in a variable

	var raw = JSON.stringify({ "Answer": answer});

	// create a JSON object with parameters for API call and store in a variable

	var requestOptions = {

		method: 'POST',

		headers: myHeaders,

		body: raw,

		redirect: 'follow'

	};

	// make API call with parameters and use promises to get response

	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/answer", requestOptions)
		// fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

		.then(response => response.text())

		.then(result => alert(JSON.parse(result).body))

		.catch(error => console.log('error', error));
	// fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/connect", requestOptions)
	// // fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

	// 	.then(response => response.text())

	// 	.then(result => alert(JSON.parse(result).body))

	// 	.catch(error => console.log('error', error));

}
var callAPI = (firstName, lastName) =>
{

	// instantiate a headers object

	var myHeaders = new Headers();

	// add content type header to object

	myHeaders.append("Content-Type", "application/json");

	// using built in JSON utility package turn object to string and store in a variable

	var raw = JSON.stringify({ "firstName": firstName, "lastName": lastName });

	// create a JSON object with parameters for API call and store in a variable

	var requestOptions = {

		method: 'POST',

		headers: myHeaders,

		body: raw,

		redirect: 'follow'

	};

	// make API call with parameters and use promises to get response

	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/connect", requestOptions)
		// fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

		.then(response => response.text())

		.then(result => alert(JSON.parse(result).body))

		.catch(error => console.log('error', error));
	// fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/connect", requestOptions)
	// // fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

	// 	.then(response => response.text())

	// 	.then(result => alert(JSON.parse(result).body))

	// 	.catch(error => console.log('error', error));

}

var getData = () =>
{

	// instantiate a headers object

	var myHeaders = new Headers();

	// add content type header to object

	myHeaders.append("Content-Type", "application/json");

	// using built in JSON utility package turn object to string and store in a variable

	var raw = JSON.stringify({ "firstName": firstName, "lastName": lastName });

	// create a JSON object with parameters for API call and store in a variable

	var requestOptions = {

		method: 'POST',

		headers: myHeaders,

		body: raw,

		redirect: 'follow'

	};

	// make API call with parameters and use promises to get response

	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/connect", requestOptions)
		// fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

		.then(response => response.text())

		.then(result => alert(JSON.parse(result).body))

		.catch(error => console.log('error', error));
	// fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/connect", requestOptions)
	// // fetch("https://b84enp6ke8.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)

	// 	.then(response => response.text())

	// 	.then(result => alert(JSON.parse(result).body))

	// 	.catch(error => console.log('error', error));

}