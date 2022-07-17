// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
//my solution

function bmi(weight, height) {
	let Bmi= (weight/(height**2))
	//conditionals
	if(Bmi<=18.5){
	  return "Underweight"
	}else if(Bmi<=25.0){
	  return "Normal"
	}else if(Bmi<=30.0){
	  return "Overweight"
	}else if(Bmi>30){
	  return "Obese"
	}
  }