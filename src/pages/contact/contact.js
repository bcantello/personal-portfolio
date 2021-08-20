import React from "react";
import "./contact.css"

export default function Contact() {
	//Formspree form submission
	window.addEventListener("DOMContentLoaded", function() {
		const form = document.getElementById("my-form");
		const button = document.getElementById("contact-button");
		const status = document.getElementById("my-form-status");

		function success() {
			form.reset();
			button.style = "display: none ";
			status.innerHTML = "Your message has been sent. Thanks!";
		}
		function error() {
			status.innerHTML = "Oops! There was a problem.";
		}
		form.addEventListener("submit", function(ev) {
			ev.preventDefault();
			let data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
	});

	function ajax(method, url, data, success, error) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}

	return (
		<section id="contact">
			<div id="contact-wrapper">
				<div id="contact-angled-feature"/>
				<div id="contact-header" className="header flex animation-element fade-up">
					CONTACT
				</div>
				<div className="header-bar animation-element fade-up" id="contact-header-bar"/>
				<div id="contact-one-liner" className="animation-element fade-up">
					Want to reach out about a collaboration,<br/>or perhaps just to say hi?
				</div>
				<form id="my-form" action="https://formspree.io/xrglzznr" method="POST">
					<input placeholder="Name" type="text" name="name" className="animation-element slide-right"
					       required/>
					<input placeholder="Email" type="email" name="email" className="animation-element slide-left"
					       required/>
					<textarea placeholder="Message" name="message" className="animation-element slide-right"/>
					<button id="contact-button" className="animation-element fade-up">Submit</button>
					<p id="my-form-status"/>
				</form>
			</div>
		</section>
	);
};