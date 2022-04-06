window.Opencustom_modal = function (element, event) {
	event.preventDefault();
	const custom_modal = document.getElementById(
		element.getAttribute("data-custom_modal")
	);
	const contentType = element.getAttribute("data-content");
	const custom_modal_title = element.getAttribute("data-custom_modal-title");

	document.getElementById("custom_modal-title").innerHTML =
		custom_modal_title;
	if (contentType == "uso-de-pago") {
		let custom_modalContent = document.getElementById(
			"content-custom_modal"
		);
		custom_modalContent.innerHTML = `
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		`;
	} else if ("campania") {
		let custom_modalContent = document.getElementById(
			"content-custom_modal"
		);
		custom_modalContent.innerHTML = `<p>Campaña a Prospecto</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br /><br />`;
	} else {
		let custom_modalContent = document.getElementById(
			"content-custom_modal"
		);
		custom_modalContent.innerHTML = `<p>Facturación</p>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />`;
	}
	custom_modal.classList.add("open");
	const exits = custom_modal.querySelectorAll(".custom_modal-exit");
	exits.forEach(function (exit) {
		exit.addEventListener("click", function (event) {
			event.preventDefault();
			custom_modal.classList.remove("open");
		});
	});
};
