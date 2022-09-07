const name = prompt ("Укажите ваше имя")
const age = prompt ("Сколько вам лет?");
const weather = prompt ("Сколько градусов на улице?");
if (weather > 10) {
    alert (name + " на улице жарко" )
}else if (weather < -1) {
    alert (name + " На улице холодноват,лучше посидидеть дома")
}else {
    alert (name + " погода средненькая,можно и погулять")
}