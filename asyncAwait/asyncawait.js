console.log('person 1: shows ticket');
console.log('person 2: shows ticket');
const movie=async()=>{
    const promiseWifeBringsTickets=new Promise((resolve,reject)=>
        {
          setTimeout(()=>resolve('ticket'))
        });
    const getPopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter= new Promise((resolve,reject)=>resolve(`Butter`));
    const getCooldrink= new Promise((resolve,reject)=>resolve(`cooldrink`));
    let ticket=await promiseWifeBringsTickets;
    let[Popcorn,Butter,Cooldrink]=await Promise.all([getPopcorn,getButter,getCooldrink]);
    console.log(`${Popcorn},${Butter},${Cooldrink}`);
    // console.log(`wife:I have ${ticket}`);
    // console.log('Husband: lets go');
    // console.log('wife: iam hungry');
    // let popcorn=await getPopcorn;
    // console.log(`husband: igot ${popcorn}`);
    // console.log('wife:i need butter');
    // let butter=await getButter;
    // console.log(`husband:got ${butter}`);
    // console.log('wife:i need cooldink');
    // let cooldrink=await getCooldrink;
    // console.log(`husband: got${cooldrink}`);
    // console.log('wife:lets go');
    return ticket;
}
movie().then((t)=>console.log(`person 3: shows ${t}`));
console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
