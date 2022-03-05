fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/dummy")
	.then((response) =>
	{
		if (response.ok)
		{
			return response.json();
		} else
		{
			throw new Error("NETWORK RESPONSE ERROR");
		}
	})
	.then(data =>
	{
		console.log(data)
		console.log(typeof (data));
		// console.log(data.question);
		appendData(data);
	})
	.catch((error) => console.error("FETCH ERROR:", error));



function appendData(data)
{
	var mainContainer = document.getElementById("myData");
	console.log(data.length);
	for (var i = 0; i < data.length; i++)
	{
		console.log("appending data");
		var div = document.createElement("div");
		var linebreak = document.createElement("p");
		var textBox = document.createElement("input");
		div.innerHTML = '<p>' + data[i]._id + '. ' + data[i].question + '</p>'
		// div.innerHTML += '<div class="form-check mb-2"> <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" /> <label class="form-check-label" for="radioExample3"> Option 3 </label> </div>';
		// textBox.innerHTML += '<input id="${i}" type="text" id="fname" name="fname"><br><br>';
		textBox.id = 'answer' + i;
		linebreak.innerText = '';
		mainContainer.appendChild(div);
		mainContainer.appendChild(textBox);
		mainContainer.appendChild(linebreak);
	}
}

function createQuestionnaire()
{
	// const val = document.querySelector("input").value;
	var cname = document.getElementById("companyName").value;
	var aname = document.getElementById("appName").value;
	var ename = document.getElementById("contact").value;

	var myHeaders = new Headers();

	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({ "companyName": cname, "applicationName": aname, "companyContact": ename, "questionnaire": "" });

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/create", requestOptions)
		.then(response => response.text())
		.then(result => alert(JSON.parse(result).body))
		.catch(error => console.log('error', error));

	// for (var i = 0; i < 12; i++)
	// {
	// 	const val = document.getElementById('answer' + i).value;
	// 	console.log(val);

	// }
}

function sendAnswers()
{
	// const val = document.querySelector("input").value;
	var myHeaders = new Headers();
	var answers = [];

	myHeaders.append("Content-Type", "application/json");


	// const divElem = document.querySelector("nav-section1");
	const divElem = document.getElementById("nav-section1");
	const inputElements = divElem.querySelectorAll("input");
	console.log(inputElements)

	for (index = 0; index < inputElements.length; ++index)
	{
		answers.push(inputElements[index].value);
	}
	console.log(answers)

	var raw = JSON.stringify(answers)

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/sendAnswers", requestOptions)
		.then(response => response.text())
		.then(result => alert(JSON.parse(result).body))
		.catch(error => console.log('error', error));

	// for (var i = 0; i < 12; i++)
	// {
	// 	const val = document.getElementById('answer' + i).value;
	// 	console.log(val);

	// }
	window.location.replace("http://127.0.0.1:5500/result.html");
	getResults();
}

function getResults()
{
	fetch("https://19ba5f330j.execute-api.ap-southeast-1.amazonaws.com/api/calcRes")
		.then((response) =>
		{
			if (response.ok)
			{
				return response.json();
			} else
			{
				throw new Error("NETWORK RESPONSE ERROR");
			}
		})
		.then(data =>
		{
			// console.log(data);
			// console.log(typeof (data));
			// console.log(data.question);
			appendData2(data);
		})
		.catch((error) => console.error("FETCH ERROR:", error));

	// var ctx = $("#chart-line");


};

function appendData2(data)
{
	var ctx = $("#chart-line");

	var databases = [0, 0, 0, 0, 0, 0, 0]
	var zerod = [1, 1, 1, 1, 1, 1, 1]

	// Get DynamoDB data
	for (var i = 0; i < data.length; i++)
	{
		questionArray = data[i];
		qArray = questionArray.weights
		console.log(qArray);
		for (var j = 0; j < qArray.length; j++)
		{
			databases[j] = databases[j] + qArray[j];
			if (qArray[j] == 0)
			{
				console.log("Found a ZERO");
				zerod[j] = 0;
			}
		}
		// console.log(questionArray);
	}
	for (var i = 0; i < zerod.length; i++) {
		if (zerod[i] == 0)
		{
			databases[i] = 0;
		}
	}

	var myLineChart = new Chart(ctx, {
		type: 'radar',
		data: {
			labels: ['DynamoDB', 'RDS', 'DocumentDB', 'ElastiCache', 'QLDB', 'Neptune', 'Redshift'],
			datasets: [{
				// data: [300, 300, 300, 195, 100, 150, 250, 300],
				// data: [100, 20, 30, 40, 50, 20, 70, 80],
				data: databases,
				label: "Application A",
				borderColor: "#458af7",
				backgroundColor: '#458af7',
				fill: true
			}]
		},
		options: {
			title: {
				display: true,
				text: 'Purpose Built Database'
			}
		}
	});
};