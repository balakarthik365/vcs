window.onload = () => {
  document.getElementById("meters").style.display = "none";
  document.getElementById("pds").style.display = "none";
  document.getElementById("clearResults").style.display = "none";
};
let height = 0;
let weight = 0;
heightUnits = () => {
  let heightUnits = document.getElementById("heightUnits").value;
  document.getElementById("feets").style.display =
    heightUnits === "ft" ? "flex" : "none";
  document.getElementById("meters").style.display =
    heightUnits === "m" ? "block" : "none";
  if (heightUnits == "ft") {
    let feet = parseFloat(document.getElementById("ft").value) || 0;
    let inches = parseFloat(document.getElementById("in").value) || 0;
    height = feet * 0.3048 + inches * 0.0254; // total height in meters
  } else if (heightUnits == "m") {
    height = parseFloat(document.getElementById("m").value) || 0;
  }

  return height;
};

weightUnits = () => {
  let weightUnits = document.getElementById("weightUnits").value;
  if (weightUnits == "kgs") {
    document.getElementById("kgs").style.display = "block";
    document.getElementById("pds").style.display = "none";
    weight = document.getElementById("kgs").value;
  } else {
    document.getElementById("pds").style.display = "block";
    document.getElementById("kgs").style.display = "none";
    weight = document.getElementById("pds").value * 2.20462;
  }
  return weight;
};

showHeightMsg = () => {
  const gender = document.querySelector(
    "input[type='radio'][name=gender]:checked"
  );
  if (gender.value == "female" && heightUnits() > 1.6) {
    document.getElementById("showForFemale").classList.remove("hidden");
  } else {
    document.getElementById("showForFemale").classList.add("hidden");
  }
};
checkBMI = () => {
  heightUnits();
  weightUnits();
  if (height != 0 && weight != 0) {
    const BMI = (weightUnits() / (heightUnits() * heightUnits())).toFixed(1);
    document.getElementById("bmi").value = BMI;
    document.getElementById("bmiPrime").value = (BMI / 25).toFixed(2);
    if (BMI < 18.5) {
      document.getElementById(
        "bmiRange"
      ).innerHTML = `You are underweight ${BMI}, you need to gain atleast 5 - 8 kgs.`;
      document.getElementById("bmiRange").classList.add("text-pink-500");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      document.getElementById(
        "bmiRange"
      ).innerHTML = `You are Normal weight ${BMI}.`;
      document.getElementById("bmiRange").classList.add("text-green-500");
    } else if (BMI >= 25 && BMI <= 29.9) {
      document.getElementById(
        "bmiRange"
      ).innerHTML = `You are Overweight weight ${BMI}, you need to lose atlease 5 - 8 kgs.`;
      document.getElementById("bmiRange").classList.add("text-orange-500");
    } else if (BMI >= 30 && BMI <= 35) {
      document.getElementById(
        "bmiRange"
      ).innerHTML = `You have Obesity ${BMI}, you need to lose atlease 5 - 8 kgs.`;
      document.getElementById("bmiRange").classList.add("text-red-500");
    } else if (BMI > 35) {
      document.getElementById(
        "bmiRange"
      ).innerHTML = `You have severe Obesity ${BMI}, you need to lose atlease 12 - 15 kgs.`;
      document.getElementById("bmiRange").classList.add("text-red-800");
    }
  } else {
    document.getElementById(
      "bmiRange"
    ).innerHTML = `Please enter height and weight to continue`;
    document.getElementById("bmiRange").classList.add("text-red-700");
  }
};
