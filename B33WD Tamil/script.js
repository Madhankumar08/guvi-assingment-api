var request=new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    let res=data.filter((element)=>element.region==="Asia");
    console.log(res);

    let toy=data.filter((element)=>element.population<200000);
    console.log(toy);
        
    
    


}
