
// var myHeader = XMLHttpRequest.getResponseHeader(name);
// console.log(myHeader);
(function(){
  console.log('iffe fired')

  let oReq = new XMLHttpRequest(); // vanilla
  oReq.addEventListener('load', function(){
    let personObj = JSON.parse(this.responseText);
    document.getElementById('person4Name').innerHTML = personObj.name;
    console.log(personObj.name)
    
    // do another request 
    let homeworldReq = new XMLHttpRequest();
    homeworldReq.addEventListener('load',function(){
      //happens after 2nd request
      let homeworldObj = JSON.parse(this.responseText);
      document.getElementById('person4HomeWorld').innerHTML = homeworldObj.name;
      console.log(homeworldObj)
    });
    homeworldReq.open('GET', personObj.homeworld);
    homeworldReq.send();

  });




// first request 
  oReq.open('GET','https://swapi.co/api/people/4');
  oReq.send();
}());




