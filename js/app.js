
// var myHeader = XMLHttpRequest.getResponseHeader(name);
// console.log(myHeader);
(function(){
console.log('iffe fired')

  let oReq = new XMLHttpRequest(); // vanilla
  oReq.addEventListener('load', function(){
    let personObj = JSON.parse(this.responseText);
    document.getElementById('person4Name').innerHTML = personObj.name;
  });
  oReq.open('GET','https://swapi.co/api/people/4');
  oReq.send();


   let homeWorldReq = new XMLHttpRequest(); // vanilla
  homeWorldReq.addEventListener('load', function(){
    let personObj = JSON.parse(this.responseText);
    document.getElementById('person4HomeWorld').innerHTML = homeWorldObj.name;
    console.log(homeWorldObj);
  });
  homeWorldReq.open('GET', personObj.homeWorld);
  homeWorldReq.send();

})();




