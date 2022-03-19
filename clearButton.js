function clearRedInterest () {
	let listInterest = document.querySelectorAll("div.item > span.color.red ~ div.close-btn");


	for (let i = 0; i < listInterest.length; i++ ) {
		listInterest[i].click();
	}
}


let divUtama = document.createElement("div");
let divCustomSplit = document.createElement("div");
let divActionList = document.createElement("div");
let divClearInterest = document.createElement("div");

divClearInterest.setAttribute("onclick", "clearRedInterest();");
divClearInterest.innerText = "Clear Red Interests";

divUtama.classList.add("mb8");
divCustomSplit.classList.add("custom-split-variant");
divActionList.classList.add("action");
divClearInterest.classList.add("point");

divActionList.append(divClearInterest);
divCustomSplit.append(divActionList);
divUtama.append(divCustomSplit);


document.querySelectorAll("#app > div.managix-content > div.managix-main-content > div > div > div.col-sm-auto.col-md-7 > div:nth-child(2) > div > div > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(2)")[0].prepend(divUtama);
