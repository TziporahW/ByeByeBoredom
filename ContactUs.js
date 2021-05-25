// eslint-disable-next-line no-undef
$(document).ready(function () {
	// move focus to first text box
	$("#first_name").focus();

	// the handler for the click event of a submit button
	$("#sub").click(
		function (event) {
			var isValid = true;

			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email_1").val().trim();
			if (email == "") {
				$("#email_1").next().text("This field is required.");
				isValid = false;
			} else if (!emailPattern.test(email)) {
				$("#email_1").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email_1").next().text("");
			}
			$("#email_1").val(email);

			// validate the second email entry
			var email2 = $("#email_2").val().trim();
			if (email2 == "") {
				$("#email_2").next().text("This field is required.");
				isValid = false;
			} else if (email !== email2) {
				$("#email_2").next().text("Must equal first email entry.");
				isValid = false;
			} else {
				$("#email_2").next().text("");
			}
			$("#email_2").val(email2);

			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if (firstName == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#first_name").next().text("");
			}
			$("#first_name").val(firstName);

			// validate the last name entry
			var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#last_name").next().text("");
			}
			$("#last_name").val(lastName);

			// validate the phone number entry
			var phonepattern = /^\d{10}$/;
			var phone = $("#phone").val().trim();
			if (phone == "") {
				$("#phone").next().text("This field is required.");
				isValid = false;
			} else if (!phonepattern.test(phone)) {
				$("#phone").next().text("Please enter a valid phone number.");
				isValid = false;
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);


			//submits the form if all entries are correct
			if (isValid == true) {
				$("#email_form").submit();
				alert("Your submission was successful!");
            }
		} // end function
	);	// end click
}); // end ready