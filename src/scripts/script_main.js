//Get User list
getItems('https://api.github.com/users', (err,data) =>{
  console.log('requesting data');
  console.log(err,data);
  if(err){
    console.log(err);
  }else{ // if succesful call displayUserList
    console.log('data retrieved');
    displayUserList(data);
    setInterval(()=>{
      const userList = document.getElementById("users_list"); 
      userList.innerHTML = '';
      displayUserList(data);
    }, 30000);
  }
})

function displayUserList(data){
  var randomnumbers = generateRandomNumbers();
  for(let i = 0; i < 8; i++){
    let index = randomnumbers[i];
    console.log(data[index].url);
    getItems(data[index].url, (err,data) =>{
      console.log('requesting data url');
      console.log(err,data);
      if(err){
        console.log(err);
      }else{
        console.log('data retrieved');
        displayUser(data);
      }
    });
    
  }
}

function displayUser(user){
  let name = checkNull(user.login);
  let avatar = checkNull(user.avatar_url);
  let homepage = checkNull(user.html_url);
  let location = checkNull(user.location);
  let isAdmin = checkNull(user.site_admin);

  //get output div
  const userList = document.getElementById("users_list");

  //create a new div element
  const newDiv = document.createElement("div"); 
  newDiv.classList.add("user_details");
  //add content to newDiv

  //create avatar <img>
  var avatarImg = createImg(avatar);
 
  //list__wrapper1 content 
  var wrapper1 = document.createElement("div");
  wrapper1.classList.add("list__wrapper1");
 
  //create user name <span>
  var name_span = document.createElement("span");
  name_span.append(name);

  name_span.addEventListener('click', ()=>{displayUserDetails(user)});//name
 
  //create homepage url <span>
  var homepage_link = document.createElement("a");
  homepage_link.href = homepage;
  homepage_link.append(homepage);
  
  wrapper1.append(name_span);
  wrapper1.append(homepage_link);

  //list__wrapper2 content
  var wrapper2 = document.createElement("div");
  wrapper2.classList.add("list__wrapper2");

  //create isAdimin <span>
  var isAdmin_span = document.createElement("span");
  isAdmin_span.append(checkIsAdmin(isAdmin));
 
  //create location <span>
  var location_span = document.createElement("span");
  location_span.append(location);

  wrapper2.append(isAdmin_span);
  wrapper2.append(location_span);

  newDiv.append(avatarImg); 
  newDiv.append(wrapper1);
  newDiv.append(wrapper2);

  //append to output div
  userList.append(newDiv);
}

function createImg(src){
  var img = document.createElement("img");
  img.src = src;
  img.classList.add("img_avatar");
  return img;
}

function checkIsAdmin(isAdmin){
  if(isAdmin){
    return "is admin";
  }else if(!isAdmin){
    return "not an admin"
  }
  return "";
}

function generateRandomNumbers(){
  const numbers = Array(30).fill().map((_, index) => index );
  numbers.sort(() => Math.random() - 0.5);
  return numbers;
}

function checkNull(value){
  if(value === ''){
    return 'NULL';
  }else{
    return value;
  }
}  
