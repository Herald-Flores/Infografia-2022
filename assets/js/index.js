window.Opencustom_modal = function (element, event) {
	event.preventDefault();
	const custom_modal = document.getElementById(
		element.getAttribute("data-custom_modal")
	);
	const contentType = element.getAttribute("data-content-type");
	const custom_modal_title = element.getAttribute("data-custom_modal-title");
	const custom_modal_subtitle = element.getAttribute("data-content-title");
	let custom_modalContent = document.getElementById("content-custom_modal");
	document.getElementById("custom_modal-title").innerHTML =
		custom_modal_title;

	custom_modalContent.innerHTML = "";
	custom_modalContent.innerHTML = `<h5 class="px-3 mt-4">${custom_modal_subtitle}</h5>`;

	if (contentType == "uso-de-pago") {
		custom_modalContent.innerHTML += `
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		`;
	} else if ("campania") {
		let custom_modalContent = document.getElementById(
			"content-custom_modal"
		);
		custom_modalContent.innerHTML += `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br /><br />`;
	} else {
		let custom_modalContent = document.getElementById(
			"content-custom_modal"
		);
		custom_modalContent.innerHTML += `<p>Facturación</p>
		<br /><br /><br /><br /><br />`;
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
