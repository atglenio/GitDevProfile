function handleSearch(){
  var value = document.getElementById('search_user').value;
  console.log("val",value);
  getItems('https://api.github.com/users/' + value, (err,data) =>{
    console.log('requesting data');
    console.log(err,data);
    if(err){
      console.log(err);
      console.log('user not found');
    }else{
      displayUserDetails(data);
    }
  });
}
