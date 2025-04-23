function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	if (sid.length !== 10) {
	  return false;
	}
	for (let i = 0; i < sid.length; i++) {
	  if (isNaN(parseInt(sid[i])) || parseInt(sid[i]) < 0 || parseInt(sid[i]) > 9) {
		return false;
	  }
	}
	return true;
  }
  
  function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
	// ตรวจสอบว่าเป็นตัวเลข และมีค่าตั้งแต่ 1 ถึง 10
	if (isNaN(candi) || parseInt(candi) < 1 || parseInt(candi) > 10) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm(){
	  if(!checkSID()){
		alert("Invalid value for Student ID! It must be 10 digits.");
		document.getElementById("sid").focus();
		return false;
	  }else{
		  if(!checkCandiNo()){
			alert("Invalid value for Candidate No! It must be a number between 1 and 10.");
			document.getElementById("candi").focus();
			return false;
		  }else{
			alert("Your input data passes validation!!");
			return true;
		  }
	  }
  }