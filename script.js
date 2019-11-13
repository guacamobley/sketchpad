
const ELEMENT_CLASS = "grid-element";
const ELEMENT_ID = "grid";
const DEFAULT_DIVS_WIDE = 16;
const SHADE10 ="drawn1";
const SHADE20 = "drawn2";
const SHADE30 = "drawn3";
const SHADE40 = "drawn4";
const SHADE50 = "drawn5";
const SHADE60 = "drawn6";
const SHADE70 = "drawn7";
const SHADE80 = "drawn8";
const SHADE90 = "drawn9";
const SHADE100 = "drawn10";

function clearGrid(){
	const gridElements = Array.from(gridContainer.getElementsByClassName(ELEMENT_CLASS));
	gridElements.forEach(element => {element.remove();});
}

//currently unused
function updateSquareWithRandomColor(e){

	let newR = Math.floor(255*Math.random());
	let newG = Math.floor(255*Math.random());
	let newB = Math.floor(255*Math.random());
	e.target.setAttribute("style",`background-color: RGB(${newR}, ${newG}, ${newB})`);
}

function darkenSquare(e){

	//e.target.classList.add("drawn");
	const classes = Array.from(e.target.classList);
	let shadeStyle = "";
	for (style of classes){
		if (style == ELEMENT_CLASS) continue;
		shadeStyle = style;
	}

	switch(shadeStyle){

		case SHADE10:
			e.target.classList.remove(SHADE10);
			e.target.classList.add(SHADE20);
			break;
		case SHADE20:
			e.target.classList.remove(SHADE20);
			e.target.classList.add(SHADE30);
			break;
		case SHADE30:
			e.target.classList.remove(SHADE30);
			e.target.classList.add(SHADE40);
			break;
		case SHADE40:
			e.target.classList.remove(SHADE40);
			e.target.classList.add(SHADE50);
			break;
		case SHADE50:
			e.target.classList.remove(SHADE50);
			e.target.classList.add(SHADE60);
			break;
		case SHADE60:
			e.target.classList.remove(SHADE60);
			e.target.classList.add(SHADE70);
			break;
		case SHADE70:
			e.target.classList.remove(SHADE70);
			e.target.classList.add(SHADE80);
			break;
		case SHADE80:
			e.target.classList.remove(SHADE80);
			e.target.classList.add(SHADE90);
			break;
		case SHADE90:
			e.target.classList.remove(SHADE90);
			e.target.classList.add(SHADE100);
			break;
		case SHADE100:
			break;
		default:
			e.target.classList.add(SHADE10);
			break;
	}

	//e.target.attributes["backgroundColor"] 
	//when a square is entered, update its appearance.
}

function updateContainerStyle(divsWide){
	gridContainer.setAttribute("style", `grid-template-rows: repeat(${divsWide}, 1fr); grid-template-columns: repeat(${divsWide}, 1fr);`)
}

function updateGrid(){
	let desiredSize = prompt("What size grid would you like? (e.g. typing '16' will produce a 16x16 grid)");
	if (!desiredSize || !Number.parseInt(desiredSize)){
		alert("grid not updated: no number was input by user");
		return;
	}
	clearGrid();
	updateContainerStyle(desiredSize);
	populateGrid(Number.parseInt(desiredSize));
}

function populateGrid(divsWide){
	//create a div
	//create grid style


	for (let y = 0; y < divsWide; y++){
		for(let x = 0; x < divsWide; x++){
			const gridElement = document.createElement("div");
			gridElement.id = `grid-${x}-${y}`;
			gridElement.classList.add(ELEMENT_CLASS);
			gridElement.addEventListener("mouseover",darkenSquare);
			gridContainer.appendChild(gridElement);
		}	
	}
}

const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("#grid-updater");
button.addEventListener("click",updateGrid);
populateGrid(DEFAULT_DIVS_WIDE);
