function CreateArr(){
  array = [];
  let string = ' ';
  let show_array = document.querySelector(".box");
  for (var i = 0; i < 15; i++) {
      array.push(Math.round(Math.random() * 50-10))
      string += ' [' + array[i] + '] ';
  }
  show_array.innerHTML = string;
  return 0;
}

function FineElement(){
    var element = prompt("Введіть елемент, який Ви хочете знайти в масиві:");
    element = parseInt(element);
    for (var i = 0; i < array.length; i++) {
      if (array[i] == element){
          alert("Так, в масиві містяться елементи, значення яких дорівнює '" + element + "'.");
          return true;
        }
    }
    alert("Ні, масив не містить елментів, значення яких дорівнює '" + element + "'.");
    return false;
}
