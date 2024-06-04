/*
The explectation for all of these functions is that the inputs are numbers not
strings.  Use Number to make the inputs numbers
*/

function calcImperialBMIFeetAndInches(heightInFeet, heightInInches, weightInPounds)
{
	// protection if I am passed strings make the number so I can apply isNaN
	heightInFeet = Number(heightInFeet);
	heightInInches = Number(heightInInches);
	weightInPounds = Number(weightInPounds);

	if (isNaN(heightInFeet) || isNaN(heightInInches) || isNaN(weightInPounds))  
	{
		console.log("calcImperialBMIFeetAndInches - expects all inputs valid numbers");
		throw "calcImperialBMIFeetAndInches - expects all inputs valid numbers";
	}

	var height = (heightInFeet *12 ) + heightInInches;
	
	return calcImperialBMI(height, weightInPounds);
}
	
function calcImperialBMI(heightInInches, weightInPounds)
{
	// protection if I am passed strings make the number so I can apply isNaN
	heightInInches = Number(heightInInches);
	weightInPounds = Number(weightInPounds);

	if (isNaN(heightInInches) || isNaN(weightInPounds))  
	{
		console.log("calcImperialBMI - expects all inputs valid numbers");
		throw "calcMetricImperialBMI - expects all inputs valid numbers";
	}


	var BMI;
	
	BMI = (weightInPounds * 703)/(heightInInches*heightInInches);
	
	return BMI;
}

function calcMetricBMICMandMM(heightInCentimeters, heightInMillimeters, weightInKilos)
{

	// protection if I am passed strings make the number so I can apply isNaN
	heightInCentimeters = Number(heightInCentimeters);
	heightInMillimeters = Number(heightInMillimeters);
	weightInKilos = Number(weightInKilos);

	if (isNaN(heightInCentimeters) || isNaN(heightInMillimeters) || isNaN(weightInKilos))  
	{
		console.log("calcMetricBMICMandMM - expects all inputs valid numbers");
		throw "calcMetricBMICMandMM - expects all inputs valid numbers";
	}
	
		
	var combinedHeight = (heightInCentimeters)+ (heightInMillimeters/10);
	
	return calcMetricBMI(combinedHeight, weightInKilos);
	
}

function calcMetricBMI(heightInCentimeters, weightInKilos)
{

	// protection if I am passed strings make the number so I can apply isNaN
	heightInCentimeters = Number(heightInCentimeters);
	weightInKilos = Number(weightInKilos);

	if (isNaN(heightInCentimeters) || isNaN(weightInKilos))  
	{
		console.log("calcMetricBMI - expects all inputs valid numbers");
		throw "expects all inputs valid numbers";
	}

	var BMI;
	
	var heightInMeters = heightInCentimeters/100;
	
	BMI = (weightInKilos)/(heightInMeters*heightInMeters);
	
	return BMI;
}