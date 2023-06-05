function validateStudent(e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value.trim();
  const fatherFirstName = document
    .getElementById("father_first_name")
    .value.trim();
  const fatherLastName = document
    .getElementById("father_last_name")
    .value.trim();
  const motherFirstName = document
    .getElementById("mother_first_name")
    .value.trim();
  const motherLastName = document
    .getElementById("mother_last_name")
    .value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const nationality = document.getElementById("nationality").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value;
  const telephoneHome = document.getElementById("telephone_home").value.trim();
  const telephoneMobile = document
    .getElementById("telephone_mobile")
    .value.trim();

  const name_error = document.getElementById("name_error");
  const dob_error = document.getElementById("dob_error");
  const email_error = document.getElementById("email_error");
  const father_name_error = document.getElementById("father_name_error");
  const mother_name_error = document.getElementById("mother_name_error");
  const gender_error = document.getElementById("gender_error");
  const nationality_error = document.getElementById("nationality_error");
  const address_error = document.getElementById("address_error");
  const city_error = document.getElementById("city_error");
  const country_error = document.getElementById("country_error");
  const telephone_home_error = document.getElementById("telephone_home_error");
  const telephone_mobile_error = document.getElementById(
    "telephone_mobile_error"
  );

  let error = false;

  // Name validation
  if (firstName === "" || lastName === "") {
    name_error.innerHTML = "Name is required";
    error = true;
  } else {
    name_error.innerHTML = "";
  }

  // Date of Birth validation
  if (dob === "") {
    dob_error.innerHTML = "Date of Birth is required";
    error = true;
  } else {
    const currentDate = new Date();
    const selectedDate = new Date(dob);

    if (selectedDate > currentDate) {
      dob_error.innerHTML = "Date of Birth cannot be in the future";
      error = true;
    } else {
      const age = calculateAge(selectedDate);
      if (age < 18) {
        dob_error.innerHTML = "You must be at least 18 years old";
        error = true;
      } else {
        dob_error.innerHTML = "";
      }
    }
  }

  function calculateAge(date) {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < date.getDate())
    ) {
      age--;
    }

    return age;
  }

  // Email validation
  //   //  abc123@99xyz.com

  //   //  abc123--personal data--length  upto 64 char--(A-Z) (a-z) (0-9) !#$%*+^-{\}-
  //   //  99xyz-- domain name --253 char
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (email === "") {
    email_error.innerHTML = "Email is required";
    error = true;
  } else if (atpos < 4 || dotpos - atpos < 4 || dotpos > email.length - 3) {
    email_error.innerHTML = "Please enter a valid email format";
    error = true;
  } else {
    email_error.innerHTML = "";
  }

  // Father's name validation
  if (fatherFirstName === "" || fatherLastName === "") {
    father_name_error.innerHTML = "Father's name is required";
    error = true;
  } else {
    father_name_error.innerHTML = "";
  }

  // Mother's name validation
  if (motherFirstName === "" || motherLastName === "") {
    mother_name_error.innerHTML = "Mother's name is required";
    error = true;
  } else {
    mother_name_error.innerHTML = "";
  }

  // Gender validation
  if (!gender) {
    gender_error.innerHTML = "Please select a gender";
    error = true;
  } else {
    gender_error.innerHTML = "";
  }

  // Nationality validation
  if (nationality === "") {
    nationality_error.innerHTML = "Nationality is required";
    error = true;
  } else {
    nationality_error.innerHTML = "";
  }

  // Address validation
  if (address === "") {
    address_error.innerHTML = "Home address is required";
    error = true;
  } else {
    address_error.innerHTML = "";
  }

  // City validation
  if (city === "") {
    city_error.innerHTML = "City is required";
    error = true;
  } else {
    city_error.innerHTML = "";
  }

  if (country === "") {
    country_error.innerHTML = "Please select a country";
    error = true;
  } else {
    country_error.innerHTML = "";
  }

  if (telephoneHome.trim() !== "") {
    if (isNaN(telephoneHome) || telephoneHome.length != 10) {
      telephone_home_error.innerHTML = "Please enter a 10-digit number";
      error = true;
    }
  }

  // Telephone Mobile validation
  if (telephoneMobile === "") {
    telephone_mobile_error.innerHTML = "Phone number is required";
    error = true;
  } else if (isNaN(telephoneMobile) || telephoneMobile.length != 10) {
    telephone_mobile_error.innerHTML = "Please enter a 10-digit number";
    error = true;
  } else {
    telephone_mobile_error.innerHTML = "";
  }

  if (!error) {
    const student = {
      name: {
        first: firstName,
        last: lastName,
      },
      dob,
      email,
      fatherName: {
        first: fatherFirstName,
        last: fatherLastName,
      },
      motherName: {
        first: motherFirstName,
        last: motherLastName,
      },
      gender: gender.value,
      nationality,
      address,
      city,
      country,
      homeTelephone: telephoneHome,
      mobileTelephone: telephoneMobile,
    };

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    // document.getElementById("form").reset();
    window.location.href = "/educationalDetails.html";
  }
}

document.getElementById("form").addEventListener("submit", validateStudent);

function validateDetails(e) {
  e.preventDefault();

  const hscInstitution = document
    .getElementById("hsc_institution")
    .value.trim();
  const hscBoard = document.getElementById("hsc_board").value;
  const hscScore = document.getElementById("hsc_score").value.trim();
  const sscInstitution = document
    .getElementById("ssc_institution")
    .value.trim();
  const sscBoard = document.getElementById("ssc_board").value;
  const sscScore = document.getElementById("ssc_score").value.trim();
  const currentlyPursuing = document
    .getElementById("currently_pursuing")
    .value.trim();
  const currentInstitution = document
    .getElementById("current_institution")
    .value.trim();
  const overallPercentage = document
    .getElementById("overall_percentage")
    .value.trim();
  const currentBacklogs = document
    .getElementById("current_backlogs")
    .value.trim();

  console.log(
    hscInstitution,
    hscBoard,
    hscScore,
    sscInstitution,
    sscBoard,
    sscScore,
    currentlyPursuing,
    currentInstitution,
    overallPercentage,
    currentBacklogs
  );

  const hsc_Institution_Error = document.getElementById(
    "hsc_institution_error"
  );
  const hsc_Board_Error = document.getElementById("hsc_board_error");
  const hsc_Score_Error = document.getElementById("hsc_score_error");
  const ssc_Institution_Error = document.getElementById(
    "ssc_institution_error"
  );
  const ssc_Board_Error = document.getElementById("ssc_board_error");
  const ssc_Score_Error = document.getElementById("ssc_score_error");
  const currently_Pursuing_Error = document.getElementById(
    "currently_pursuing_error"
  );
  const current_Institution_Error = document.getElementById(
    "current_institution_error"
  );
  const overall_Percentage_Error = document.getElementById(
    "overall_percentage_error"
  );
  const current_Backlogs_Error = document.getElementById(
    "current_backlogs_error"
  );

  let error = false;

  // validate HSC Institution Name
  if (hscInstitution === "") {
    hsc_Institution_Error.innerHTML = "HSC Institution Name is required";
    error = true;
  } else {
    hsc_Institution_Error.innerHTML = "";
  }

  // Validate HSC Board
  if (hscBoard === "") {
    hsc_Board_Error.innerHTML = "Please select HSC Board";
    error = true;
  } else {
    hsc_Board_Error.innerHTML = "";
  }

  // Validate Score in HSC
  if (hscScore === "") {
    hsc_Score_Error.innerHTML = "Score in HSC (%) is required";
    error = true;
  } else if (isNaN(hscScore) || hscScore < 0 || hscScore > 100) {
    hsc_Score_Error.innerHTML = "Please enter a valid score between 0 and 100";
    error = true;
  } else {
    hsc_Score_Error.innerHTML = "";
  }

  // Validate SSC Institution Name
  if (sscInstitution === "") {
    ssc_Institution_Error.innerHTML = "SSC Institution Name is required";
    error = true;
  } else {
    ssc_Institution_Error.innerHTML = "";
  }

  // Validate SSC Board
  if (sscBoard === "") {
    ssc_Board_Error.innerHTML = "Please select SSC Board";
    error = true;
  } else {
    ssc_Board_Error.innerHTML = "";
  }

  // Validate Score in SSC
  if (sscScore === "") {
    ssc_Score_Error.innerHTML = "Score in SSC (%) is required";
    error = true;
  } else if (isNaN(sscScore) || sscScore < 0 || sscScore > 100) {
    ssc_Score_Error.innerHTML = "Please enter a valid score between 0 and 100";
    error = true;
  } else {
    ssc_Score_Error.innerHTML = "";
  }

  // validate currently Pursuing

  if (currentlyPursuing === "") {
    currently_Pursuing_Error.innerHTML = "Currently Pursuing field is required";
    error = true;
  } else {
    currently_Pursuing_Error.innerHTML = "";
  }

  // validate Current Educational Institution Name
  if (currentInstitution === "") {
    current_Institution_Error.innerHTML =
      "Current Institution Name is required";
    error = true;
  } else {
    current_Institution_Error.innerHTML = "";
  }

  // validate Overall Percentage
  if (overallPercentage === "") {
    overall_Percentage_Error.innerHTML = "Overall Percentage is required";
    error = true;
  } else if (
    isNaN(overallPercentage) ||
    overallPercentage < 0 ||
    overallPercentage > 100
  ) {
    overall_Percentage_Error.innerHTML =
      "Please enter a valid percentage between 0 and 100";
    error = true;
  } else {
    overall_Percentage_Error.innerHTML = "";
  }

  // validate current Backlogs
  if (currentBacklogs === "") {
    current_Backlogs_Error.innerHTML = "";
  } else if (
    isNaN(currentBacklogs) ||
    currentBacklogs < 0 ||
    currentBacklogs >= 8
  ) {
    current_Backlogs_Error.innerHTML =
      "Please enter your current backlogs number if you have (0-8)";
    error = true;
  } else {
    current_Backlogs_Error.innerHTML = "";
  }

  if (!error) {
    const educationData = {
      hscInstitution: hscInstitution,
      hscBoard: hscBoard,
      hscScore: hscScore,
      sscInstitution: sscInstitution,
      sscBoard: sscBoard,
      sscScore: sscScore,
      currentlyPursuing: currentlyPursuing,
      currentInstitution: currentInstitution,
      overallPercentage: overallPercentage,
      currentBacklogs: currentBacklogs,
    };

    const educationinfo =
      JSON.parse(localStorage.getItem("educationinfo")) || [];
    educationinfo.push(educationData);
    localStorage.setItem("educationinfo", JSON.stringify(educationinfo));

    window.location.href = "/documentUpload.html";
  }
}

document.getElementById("edu").addEventListener("submit", validateDetails);

function validateUpload(e) {
  e.preventDefault();

  const passportPhoto = document.getElementById("passport_photo").value;
  const hscMarksheet = document.getElementById("hsc_marksheet").value;
  const sscMarksheet = document.getElementById("ssc_marksheet").value;
  const allSemestersMarksheet = document.getElementById(
    "all_semesters_marksheet"
  ).value;

  console.log(passportPhoto, hscMarksheet, sscMarksheet, allSemestersMarksheet);

  const passportPhotoError = document.getElementById("passport_photo_error");
  const hscMarksheetError = document.getElementById("hsc_marksheet_error");
  const sscMarksheetError = document.getElementById("ssc_marksheet_error");
  const allSemestersMarksheetError = document.getElementById(
    "all_semesters_marksheet_error"
  );

  let error = false;

  // Validate Recent passport size photograph

  if (passportPhoto === "") {
    passportPhotoError.innerHTML = "Passport size photograph is required";
    error = true;
  } else {
    passportPhotoError.innerHTML = "";
  }

  const passportPhotoInput = document.getElementById("passport_photo");
  const hscMarksheetInput = document.getElementById("hsc_marksheet");
  const sscMarksheetInput = document.getElementById("ssc_marksheet");
  const allSemestersMarksheetInput = document.getElementById(
    "all_semesters_marksheet"
  );

  if (passportPhotoInput.files.length > 0) {
    const fileSize = passportPhotoInput.files[0].size;
    const fileSizeInMB = fileSize / (1024 * 1024);
    const maxFileSize = 4;

    if (fileSizeInMB > maxFileSize) {
      passportPhotoError.innerHTML = "Image size should be less than 4MB";
      error = true;
    } else {
      passportPhotoError.innerHTML = "";
    }
  }

  // Validate HSC mark sheet

  if (hscMarksheet === "") {
    hscMarksheetError.innerHTML = "HSC mark sheet is required";
    error = true;
  } else {
    hscMarksheetError.innerHTML = "";

    const hscMarksheetInput = document.getElementById("hsc_marksheet");
    if (hscMarksheetInput.files.length > 0) {
      const allowedFileTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const fileSize = hscMarksheetInput.files[0].size;
      const fileSizeInMB = fileSize / (1024 * 1024);
      const maxFileSize = 4;

      if (!allowedFileTypes.includes(hscMarksheetInput.files[0].type)) {
        hscMarksheetError.innerHTML =
          "Invalid file format. Only image, PDF, or document files are allowed";
        error = true;
      } else if (fileSizeInMB > maxFileSize) {
        hscMarksheetError.innerHTML = "File size should be less than 4MB";
        error = true;
      } else {
        hscMarksheetError.innerHTML = "";
      }
    }
  }

  // Validate SSC mark sheet

  if (sscMarksheet === "") {
    sscMarksheetError.innerHTML = "SSC mark sheet is required";
    error = true;
  } else {
    sscMarksheetError.innerHTML = "";

    const sscMarksheetInput = document.getElementById("ssc_marksheet");
    if (sscMarksheetInput.files.length > 0) {
      const allowedFileTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const fileSize = sscMarksheetInput.files[0].size;
      const fileSizeInMB = fileSize / (1024 * 1024); // Convert bytes to MB
      const maxFileSize = 4; // Maximum file size in MB

      if (!allowedFileTypes.includes(sscMarksheetInput.files[0].type)) {
        sscMarksheetError.innerHTML =
          "Invalid file format. Only image, PDF, or document files are allowed";
        error = true;
      } else if (fileSizeInMB > maxFileSize) {
        sscMarksheetError.innerHTML = "File size should be less than 4MB";
        error = true;
      } else {
        sscMarksheetError.innerHTML = "";
      }
    }
  }

  // Validate all semesters mark sheet

  if (allSemestersMarksheet === "") {
    allSemestersMarksheetError.innerHTML =
      "All semesters mark sheet is required";
    error = true;
  } else {
    allSemestersMarksheetError.innerHTML = "";

    const allSemestersMarksheetInput = document.getElementById(
      "all_semesters_marksheet"
    );
    if (allSemestersMarksheetInput.files.length > 0) {
      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const fileSize = allSemestersMarksheetInput.files[0].size;
      const fileSizeInMB = fileSize / (1024 * 1024);
      const maxFileSize = 10;
      if (
        !allowedFileTypes.includes(allSemestersMarksheetInput.files[0].type)
      ) {
        allSemestersMarksheetError.innerHTML =
          "Invalid file format. Only PDF or document files are allowed";
        error = true;
      } else if (fileSizeInMB > maxFileSize) {
        allSemestersMarksheetError.innerHTML =
          "File size should be less than 10MB";
        error = true;
      } else {
        allSemestersMarksheetError.innerHTML = "";
      }
    }
  }

  if (!error) {
    var documents = {
      passportPhoto: passportPhotoInput.files[0].name,
      hscMarksheet: hscMarksheetInput.files[0].name,
      sscMarksheet: sscMarksheetInput.files[0].name,
      allSemestersMarksheet: allSemestersMarksheetInput.files[0].name,
    };

    var uploadedDocuments =
      JSON.parse(localStorage.getItem("uploadedDocuments")) || [];

    if (!Array.isArray(uploadedDocuments)) {
      uploadedDocuments = [];
    }

    uploadedDocuments.push(documents);
    localStorage.setItem(
      "uploadedDocuments",
      JSON.stringify(uploadedDocuments)
    );

    var successMessage = document.getElementById("successMessage");

    successMessage.innerHTML = "Student details submitted successfully!";
    document.getElementById("validForm").reset();

    setTimeout(() => {
      window.location.href = "/registratiion.html";
    }, 6000);
  }
}

document.getElementById("validForm").addEventListener("submit", validateUpload);
