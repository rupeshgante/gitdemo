const posts=[
    {title:'Post 1',body:'This is Post1',created:new Date().getTime()},
    {title:'Post 2',body:'This is Post2',created:new Date().getTime()},
];
let interval=0;
 function getPosts(){
     clearInterval(interval);

     interval=setInterval(()=>{
let output='';
posts.forEach((post)=>{
output +=`<li>${post.title}created${(post.created-new Date().getTime())/1000} seconds ago </li>`
});
document.body.innerHTML=output;
},1000);}
 getPosts();

 function createPost(post,callback){
     setTimeout(()=>{
      
posts.push({...post,created:new Date().getTime()});
callback();

     },2000);
 }
 createPost({title:'Post 3',body:'This is Post3'},getPosts);
 function post4(post,callback){
     setTimeout(()=>{
posts.push({...post,created:new Date().getTime()});
callback();
 },4000);
};
post4({title:'Post 4',body:'This is Post4'},getPosts);