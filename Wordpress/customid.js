var timeID = new Date().getTime(); // get ID from unix time

/* Contact Form 7 */
/* Remember to add class "form_id" to your hidden ID field. */
for (i=0;i<document.querySelectorAll(".form_id").length;i++)
{
	let form_id = document.getElementsByClassName("form_id");
	if (form_id[i].value == ""){form_id[i].value = timeID;}
}

/* Gravity Forms */
/* Remember to add class "gform_id" to your hidden ID field. As you can see, it's quite similar to CF7 script, but GF got a bit different structure, so you need to check input field. */
for (i=0;i<document.querySelectorAll(".gform_id input").length;i++)
{
	let gform_id = document.querySelectorAll(".gform_id input");
	if (gform_id[i].value == ""){gform_id[i].value = timeID;}
}