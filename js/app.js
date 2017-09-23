
// var myHeader = XMLHttpRequest.getResponseHeader(name);
// console.log(myHeader);
(function(){
  console.log('iffe fired')

  let person4Req = new XMLHttpRequest(); // vanilla
  person4Req.addEventListener('load', function(){
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

  let person14Req = new XMLHttpRequest();
  person14Req.addEventListener('load', function() {
    let person14Obj = JSON.parse(this.responseText);
    document.getElementById('person14Name').innerHTML=person14Obj.name;
    console.log(person14Obj.species);

    //star species request
    let speciesReq = new XMLHttpRequest();
    speciesReq.addEventListener('load', function(){
      let speciesObj = JSON.parse(this.responseText);
      document.getElementById('person14Species').innerHTML=speciesObj.name
    })
    speciesReq.open('GET',  "https://swapi.co/api/species/1/");
    speciesReq.send();
  })
  person14Req.open('GET', 'https://swapi.co/api/people/14');
  person14Req.send();




// first request 
  person4Req.open('GET','https://swapi.co/api/people/4');
  person4Req.send();
}());




