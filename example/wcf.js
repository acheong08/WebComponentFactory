export function register_component(name, url, shadow) {
	let cel;
	if (shadow) {
		cel = class CustomElement extends HTMLElement {
			constructor() {
				super();
				this.attachShadow({ mode: "open" });
				const template = document.createElement("template");

				// Fetch the template HTML file
				fetch(url)
					.then((response) => response.text())
					.then((data) => {
						template.innerHTML = data;
						this.shadowRoot.appendChild(template.content.cloneNode(true));
					})
					.catch((error) => console.error(error));
			}
		}
	}
	else {
		cel = class CustomElement extends HTMLElement {
			constructor() {
				super();
			}

			connectedCallback() {
				fetch(url)
					.then((response) => response.text())
					.then((data) => {
						this.innerHTML = data;
					})
					.catch((error) => console.error(error));
			}
		}

	}
	customElements.define(name, cel);
}
export default register_component;
