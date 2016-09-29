export function login(username, password){
	console.log("let's try this")
	if( username != "admin" || password !== "radical" ){
		console.log("incorrect login");
	}
}

//login("admin", "wrong");
