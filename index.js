// function get_data()
// {
//     const arl="https://api.ipify.org?format=json";
//     fetch(arl ,{method:"GET"});

// 	try{
// 		const res= fetch(arl);
// 		const result=res.text();
// 		console.log(result);
// 	}
// 	catch (error){console.log("error found");}
// }


async function  get_media()
{

const url = 'https://instagram28.p.rapidapi.com/medias?user_id=25025320&batch_size=20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef87885f91msh9eb35ef4580f52fp1f6723jsn90a46f556136',
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
let ele=document.getElementById("searchbar");
let username=localStorage.setItem("ele");

const url = `https://instagram28.p.rapidapi.com/search?search=+${username}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef87885f91msh9eb35ef4580f52fp1f6723jsn90a46f556136',
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// const url = "http://api.football-data.org/v2/matches";
// fetch(url, {
//   method: "GET",
//   withCredentials: true,
//   headers: {
//     "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e",
//     "Content-Type": "application/json"
//   }
// })
//   .then(resp => resp.json())
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });