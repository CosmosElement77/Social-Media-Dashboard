// function get_ip()
// {
//     const arl="https://api.ipify.org?format=json";
//     const options={method:"GET"};

// 	try{
// 		const res= fetch(arl,options);
// 		const result=res.text();
// 		console.log(result);
// 	}
// 	catch (error){console.log("error found");}
// }
var here;
async function get_data()
{	
	let username=document.getElementById("searchbar").value;
	const url = `https://instagram28.p.rapidapi.com/user_info?user_name=${username}`;
	const options = {
		method: 'GET',
		headers: {
			// 'X-RapidAPI-Key': 'ef87885f91msh9eb35ef4580f52fp1f6723jsn90a46f556136',/*Jaivardhan*/
			// 'X-RapidAPI-Key':'16709c2453msh7972ec99c11ded8p17b565jsn50dee93c0f00',/*Jashan*/
			'X-RapidAPI-Key':'cb89798197msh1c32806fcf63babp142715jsn148e998a73e2',/*Jasmine*/
			'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
		}
	};

	var response;var result;

	try 
	{   response = await fetch(url, options);
	    result = await response.json();
		console.log(result);
		here=result.data.user.profile_pic_url_hd;
		document.getElementById("profile_pic").src="icons/instagram.png";
		document.getElementById("profile_pic").title="Due to CORS policy ,the original profile picture cannot be embedded here, Click Below to find the org. profile picture in the link";
		document.getElementById("username").innerText=result.data.user.username;
		/*document.getElementById("username").style.color="blue";*/
		document.getElementById("Followers").innerText=result.data.user.edge_followed_by.count;
		document.getElementById("Following").innerText=result.data.user.edge_follow.count;
		document.getElementById("fullname").innerText=result.data.user.full_name;
		document.getElementById("fullname").style.fontWeight=600;
		document.getElementById("bio").innerText=result.data.user.biography;

		if(result.data.user.is_verified ==false)
		{document.getElementById("blue_tick").src="icons/dot-1.jpg";document.getElementById("blue_tick").title="Not Verified";}
		else
		{document.getElementById("blue_tick").src="icons/blue_tick.png";}

		if(result.data.user.is_private == false)
		{	document.getElementById("here").style.display="block";
			document.getElementById("changer").innerHTML="As this is a public profile ,you can view this profile's content on the official instagram website."
			document.getElementById("link").setAttribute("href",`https://instagram.com/${username}/`);}
		else
		{document.getElementById("here").style.display="block";
		document.getElementById("link").setAttribute("href",`https://instagram.com/${username}/`);}
	} 
	catch (error) {
		alert("Error Fetching the API ,check the console to see more...");
		console.log("Error Found");
	}
}
document.getElementById("Click").style.display="block";
function show()
{
    alert("Due to CORS policy ,the original profile picture cannot be embedded here, Click Below to find the org. profile picture in the link" );
    if (window.confirm("Click OK ,if you want to see the image otherwise click Cancel to stop"))
    {window.location.href=here;}
};


////data.user.biography
////Following: data.user.edge_follow.count
////Followers: data.user.edge_followed_by.count
////Full_name: data.user.full_name
////Profile Pic: data.user.profile_pic_url_hd
////If the user is verified or not: data.user.is_verified
