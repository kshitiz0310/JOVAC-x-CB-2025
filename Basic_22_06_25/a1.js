console.log("Start");
async function getproducts(){
    try{
    const res = await fetch('https://dummyjson.com/products/');
    const resData = await res.json();
    console.log(resData);
    }catch(error){
        console.log(error);
    }
}
console.log("End");
getproducts();