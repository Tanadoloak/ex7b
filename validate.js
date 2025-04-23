function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	// ตรวจสอบความยาวต้องเป็น 10 ตัวอักษร
	if (sid.length !== 10) {
	  return false;
	}
	// ตรวจสอบว่าทุกตัวอักษรเป็นตัวเลขระหว่าง 0 ถึง 9
	for (let i = 0; i < sid.length; i++) {
	  if (isNaN(parseInt(sid[i])) || parseInt(sid[i]) < 0 || parseInt(sid[i]) > 9) {
		return false;
	  }
	}
	return true;
  }
  
  function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
	if (isNaN(candi) || candi < 1) {
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
			alert("Invalid value for Candidate No! It must be a positive number.");
			document.getElementById("candi").focus();
			return false;
		  }else{
			alert("Your input data passes validation!!");
			return true;
		  }
	  }
  }