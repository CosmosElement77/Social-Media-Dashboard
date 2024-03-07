function get_ip()
{
    const arl="https://api.ipify.org?format=json";
    const options={method:"GET"};

	try{
		const res= fetch(arl,options);
		const result=res.text();
		console.log(result);
	}
	catch (error){console.log("error found");}
}

var response;
var result;
async function get_data()
{	
	let username=document.getElementById("searchbar").value;
	const url = `https://instagram28.p.rapidapi.com/user_info?user_name=${username}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef87885f91msh9eb35ef4580f52fp1f6723jsn90a46f556136',
			'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
		}
	};

	try {
	    response = await fetch(url, options);
	    result = await response.json();
		console.log(result);
		// document.getElementById("profile_pic").src='result.data.user.profile_pic_url_hd';
		document.getElementById("username").innerText=result.data.user.username;
		/*document.getElementById("username").style.color="blue";*/
		document.getElementById("Followers").innerText=result.data.user.edge_followed_by.count;
		document.getElementById("Following").innerText=result.data.user.edge_follow.count;
		document.getElementById("fullname").innerText=result.data.user.full_name;
		document.getElementById("fullname").style.fontWeight=600;
		document.getElementById("bio").innerText=result.data.user.biography;

		if(result.data.user.is_verified ==false)
		{
			document.getElementById("blue_tick").display="none";
		}

	} catch (error) {
		alert("Error Fetching the API ,check the console to see more...");
		console.log("Error Found");
	}
}


////data.user.biography
////Following: data.user.edge_follow.count
////Followers: data.user.edge_followed_by.count
////Full_name: data.user.full_name
////Profile Pic: data.user.profile_pic_url_hd
////If the user is verified or not: data.user.is_verified