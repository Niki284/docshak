import { animateBottom } from "./animateBottom.js";
import { animateCards } from "./animateCards.js";
import { animateInfoList } from "./animateInfoList.js";
import { animateTitles } from "./animateTitles.js";
import { cursorBol } from "./cursor.js";


document.addEventListener('DOMContentLoaded', () => {
    animateTitles(),
    animateBottom(),
    animateCards(),
    animateInfoList(),
    cursorBol()
    });

