var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]
var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name:"Bob",
    damage:2,
    health:10  
  },
  {
    name:"Mavis",
    damage:2,
    health:10
  },
  {
    name:"Morty",
    damage:4,
    health:10
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleDamage = document.createElement("h3");
  var eleHealth = document.createElement("h3");
  
  if(list[i].name==="Mavis"){
    ele.style.color="red";
  }
  
  eleName.innerHTML="Name: "+list[i].name
  eleDamage.innerHTML="Damage: "+list[i].damage;
  eleHealth.innerHTML="Health: "+list[i].health;
  ele.appendChild(eleName);
  ele.appendChild(eleDamage);
  ele.appendChild(eleHealth);
  wrap.appendChild(ele);
}