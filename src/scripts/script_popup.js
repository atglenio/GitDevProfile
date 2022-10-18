//load data by name
//display popup

function displayUserDetails(user){
  let name = checkNull(user.login);
  let avatar = checkNull(user.avatar_url);
  let homepage = checkNull(user.html_url);
  let location = checkNull(user.repos_url);
  let isAdmin = checkNull(user.site_admin);
  let id = checkNull(user.id);
  let type = checkNull(user.type);


  //var html
  var html = '<html lang="en"><head><title>Document</title><link rel="stylesheet" href="./style/liststyle.css"></head>';
  var body = '<body><img class="img_avatar" src="' + avatar + '"></img>';
      body += '<h1>'+ name +'</h1><a target="_blank" href = ' + homepage + '>' + homepage + '</a>';
      body += '<br> <span> Location ' + location +' </span><br> <span>'+ checkIsAdmin(isAdmin)+ '</span> <br>';
      body += '<span> ID : '+ id +'</span><br><span> User type : ' + type +'</span></body> </html>';
  html += body;
  
  //create windows popup 
  var popup = window.open(this.url,name, ' height = 250, width = 600');
  popup.document.write(html);
  popup.document.close();


}