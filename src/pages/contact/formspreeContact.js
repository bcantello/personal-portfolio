import React from "react";
import {useForm, ValidationError} from "@formspree/react";
import "./contact.css";

export default function FormspreeContact() {
	const [state, handleSubmit] = useForm("xrglzznr");
	const form = document.getElementById("my-form");
	const button = document.getElementById("contact-button");
	const status = document.getElementById("my-form-status");

	if (state.succeeded) {
		form.reset();
		button.style = "display: none ";
		status.innerHTML = "Your message has been sent. Thanks!";
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
				<form id="my-form" onSubmit={handleSubmit}>
					<>
						<input
							placeholder="Name"
							type="text"
							name="name"
							className="animation-element slide-right"
							required
						/>
						<ValidationError
							prefix="Name"
							field="Name"
							errors={state.errors}
						/>
					</>
					<>
						<input
							placeholder="Email"
							type="email"
							name="email"
							className="animation-element slide-left"
							required
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</>
					<textarea placeholder="Message" name="message" className="animation-element slide-right"/>
					<button id="contact-button" className="animation-element fade-up">Submit</button>
					<p id="my-form-status"/>
				</form>
			</div>
		</section>
	);
}
