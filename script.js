  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var person in names) { 
  
    if ((names[person][0] == "J") || (names[person][0] == "j")) {
      
      byeSpeaker.speak(names[person])
    } 
    else {
      
      helloSpeaker.speak(names[person])
    }
  }