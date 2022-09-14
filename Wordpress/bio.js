/* MORE LESS buttons for bio */
/* As you know, WordPress sanitizes all html tags except hrefs and strong in bio field, so I made a quick workaround in JS. Styling could be done in CSS, but this this way everything is together.
You need something like this in your template: if ($bio = get_field('description', 'user_'.$post->post_author)) {echo '<div class="post-author-bio">'.$bio.'</div>';}
Most important part is that class "post-author-bio". You can change it to whatever you like, but the same name must be in script.
Your bio should look like this: <strong>This is my bio<strong> and it goes on.</strong><strong>... <strong>(more)</strong></strong></strong>
...aaand there is the code:
*/
document.querySelector(".post-author-bio > strong").style.fontWeight = 500;
document.querySelector(".post-author-bio > strong > strong:nth-of-type(1)").style.display = 'none';
document.querySelector(".post-author-bio > strong > strong:nth-of-type(1)").style.fontWeight = 500;
document.querySelector(".post-author-bio > strong > strong:nth-of-type(2)").style.cursor = 'pointer';
document.querySelector(".post-author-bio > strong > strong:nth-of-type(2)").addEventListener("click", function()
{
	this.parentNode.click();
	if (this.innerHTML == "...&nbsp;<strong>(more)</strong>" || this.innerHTML == "…&nbsp;<strong>(more)</strong>"){this.previousElementSibling.style.display = "inline"; this.innerHTML = "&nbsp;<strong>(less)</strong>";}
	else{this.previousElementSibling.style.display = "none"; this.innerHTML = "...&nbsp;<strong>(more)</strong>";}
});