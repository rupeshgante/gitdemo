const posts=[
    {title:'Post 1',body:'This is Post1'},
    {title:'Post 2',body:'This is Post2'},
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}

const createPost=async (post)=>{
    const create=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
        // console.log('after',posts);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        
        },1000);
            });
            return create;
}


const deletePost=async ()=>{
    const del= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
if(posts.length>0){
    resolve()
}
else{
    reject('Error:Array is Empty now');
}
        },3000);
    });
    return del;
}
getPosts();
createPost({title:'post 3',body:'this is post 3'}).then(getPosts);
deletePost().then(getPosts);
