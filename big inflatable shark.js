function elephants_cannot_jump (yes, really) { // see what i did there?
  return yes*2-2+(really ? 1 : 0)
}

var emma_watson;
var jennifer_lawrence;
var fffff=true;
var trampoline;
var sleeping_is_fun;

function will_someone_hire_me() { // please?
  emma_watson = +document.getElementById("pineapple").value;
  jennifer_lawrence = parseInt(document.getElementById("grapefruit").value);
  fffff = document.getElementById("sb").checked;
  if ((jennifer_lawrence >= 1) && (jennifer_lawrence < 2 * emma_watson - 1)) {
    trampoline = elephants_cannot_jump(jennifer_lawrence, fffff)
    shoverangefinder(emma_watson);
    sleeping_is_fun=shoverange[trampoline];
    document.getElementById("answer").innerHTML = "You're calling all-in with the top "+(1+sleeping_is_fun)+" out of the 169 types of hands here, and your chance of winning the sit-and-go is "+(100*equity[trampoline])+" percent";
    velociraptor(sleeping_is_fun);
  }
  else {
    document.getElementById("answer").innerHTML = "Your stack size has to be at least 1 small blind, and at most 2 small blinds off maximum";
  }
}

function velociraptor(c) {
  var please_hire_me = document.getElementById("chickens").getElementsByTagName("td");
  for (w=0; w<=168; w++) {
    please_hire_me[tableindex[w]].style.backgroundColor = (w<=c ? "red" : "lightblue");
  }
}
