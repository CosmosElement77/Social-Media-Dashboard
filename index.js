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
		var response =  fetch(url, options);
		var result =  response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}


////data.user.biography
////Following: data.user.edge_follow.count
////Followers: data.user.edge_followed_by.count
////Full_name: data.user.full_name
////Profile Pic: data.user.profile_pic_url_hd
////If the user is verified or not: data.user.is_verified