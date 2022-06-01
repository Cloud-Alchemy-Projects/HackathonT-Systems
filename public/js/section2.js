var tables = document.querySelectorAll(".tabla")
var count = 0

tables.forEach((element) => {
    element.addEventListener("click", () =>{
        if (count<4) {
            count++
        } else {
            count =0
        }

        switch (count) {
			case 0:
                tables[0].classList.remove("hide");
				tables[1].classList.add("hide");
				tables[2].classList.add("hide");
				tables[3].classList.add("hide");
				tables[4].classList.add("hide");
				break;
            case 1:
                tables[0].classList.add("hide");
                tables[1].classList.remove("hide");
                tables[2].classList.add("hide");
                tables[3].classList.add("hide");
                tables[4].classList.add("hide");
                break;
            case 2:
                tables[0].classList.add("hide");
                tables[1].classList.add("hide");
				tables[2].classList.remove("hide");
				tables[3].classList.add("hide");
				tables[4].classList.add("hide");
				break;
            case 3:
                tables[0].classList.add("hide");
                tables[1].classList.add("hide");
                tables[2].classList.add("hide");
                tables[3].classList.remove("hide");
                tables[4].classList.add("hide");
				break;
            case 4:
                tables[0].classList.add("hide");
                tables[1].classList.add("hide");
                tables[2].classList.add("hide");
                tables[3].classList.add("hide");
                tables[4].classList.remove("hide");
				break;
			default:
				break;
		}
    })
});