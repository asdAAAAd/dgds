import "./style.css";

import { addListenerToButton } from "./NoButton";
import { changePage } from "./SiPage"

addListenerToButton(document.querySelector<HTMLButtonElement>("#no")!);
document.querySelector("#si")?.addEventListener("click", () => changePage())
