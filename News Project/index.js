async function fetchedData(){
try{
 const data = await fetch("https://flipboard.com/@thenewsdesk/the-latest-on-covid-19-t82no8kmz");
 const changeUrl = await data.json();  
 return changeUrl;
}catch(err){
    return "Err"
}
}

// function CreatCrousel{

// }

// function CreatAccordin{

// }





