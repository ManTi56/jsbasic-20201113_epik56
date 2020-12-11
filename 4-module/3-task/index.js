/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (i = 1; i < table.rows.length; i++) {
        if (!(table.rows[i].lastElementChild.dataset.hasOwnProperty('available'))) {
            table.rows[i].setAttribute('hidden', 'true');
        } 
         else (table.rows[i].lastElementChild.dataset.available === 'true') ? table.rows[i].classList.add('available') : table.rows[i].classList.add('unavailable')
    }
    for (j = 1; j < table.rows.length; j++) {
        (table.rows[j].children[2].innerHTML == 'm') ? table.rows[j].classList.add('male') : table.rows[j].classList.add('female')
        }
    for (k = 1; k < table.rows.length; k++) {
        (table.rows[k].children[1].innerHTML) > 18 ? console.log(table.rows[k].children[1]) : table.rows[k].style="text-decoration: line-through"
    }
}  

    //     (table.rows[i].lastElementChild.dataset.available === 'true') ? table.rows[i].classList.add('available') : table.rows[i].classList.add('unavailable')
    // }
    //         for (let key in table.rows[4].lastElementChild.dataset) {
    //         table.rows[4].classList.add('hidden')    
    //         console.log(key);
    // }
