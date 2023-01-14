export default class Difference {
	constructor(oldOfficer, newOfficer, items) {
		this.oldOfficer = document.querySelector(oldOfficer);
		this.newOfficer = document.querySelector(newOfficer);
		try {
			this.oldItems = this.oldOfficer.querySelectorAll(items);
			this.newItems = this.newOfficer.querySelectorAll(items);
		} catch (e) {}
		this.oldCounter = 0;
		this.newCounter = 0;
	}
	hideItems(items) {
		items.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = "none";
			}
		});
	}

	bindTriggers(container, items, counter) {
		container.querySelector(".plus").addEventListener("click", () => {
			if (counter !== items.length - 2) {
				items[counter].style.display = "flex";
				counter++;
			} else {
				items[counter].style.display = "flex";
				items[items.length - 1].remove();
			}
		});
	}
	init() {
		try {
			this.hideItems(this.oldItems);
			this.hideItems(this.newItems);
			this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
			this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
		} catch (e) {}
	}
}
// export default class Difference {
// 	constructor(officer, items) {
// 		this.officer = document.querySelector(officer);
// 		try {
// 		} catch (e) {
// 			this.items = this.officer.querySelectorAll(items);
// 		}
// 		this.counter = 0;
// 	}
// 	hideItems(items) {
// 		items.forEach((item, i, arr) => {
// 			if (i !== arr.length - 1) {
// 				item.style.display = "none";
// 			}
// 		});
// 	}

// 	bindTriggers(container, items, counter) {
// 		container.querySelector(".plus").addEventListener("click", () => {
// 			if (counter !== items.length - 2) {
// 				items[counter].style.display = "flex";
// 				counter++;
// 			} else {
// 				items[counter].style.display = "flex";
// 				items[items.length - 1].remove();
// 			}
// 		});
// 	}
// 	init() {
// 		try {
// 			this.hideItems(this.items);
// 			this.bindTriggers(this.officer, this.items, this.counter);
// 		} catch (e) {}
// 	}
// }
