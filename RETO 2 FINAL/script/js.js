function botoover(){
    document.getElementById('botonxd').value='Seguro que quieres finalizar compra 🛒' 
}
function botonaut(){
    document.getElementById('botonxd').value='Finalizar compra🛒' 
}

function nombreuder(){
    let nombre =document.getElementById('usernameinicio').value;
    alert("Inicio de sesion de "+nombre+" a sido exitoso");
}

function cambiocolo(){
    document.getElementById('password').style.color='blue';
}

function tukatuka(){
    document.getElementById('ueueueu').innerHTML='#Feliz navidad';
}
function tukutuku() {
    document.write('<h1> COMPRA FINALIZADA FELIZ NAVIDAD 🎁❄️ 🎄</h1> ');
}

function producto1(event){
    event.preventDefault();
    // Crea una ventana nueva
    let ventana = window.open("", "", "width=400,height=300");
    // Escribe contenido en la ventana
    ventana.document.write("<h2>Restaurado con Windows 7 Professional. Ideal para oficina y tareas diarias.</h2>");
    ventana.document.write("<p>Procesador: Intel Core i5-4570,RAM: 8 GB DDR3,Almacenamiento: 500 GB HDD,Tarjeta Gráfica: Intel HD Graphics 4600</p>");
    const cteRestaurado1='Reparado'
    ('<h2>' + cteRestaurado1 + 'con Windows 7 Professional. Ideal para oficina y tareas diarias.</h2>')

}
function producto2(event){
    event.preventDefault();
    // Crea una ventana nueva
    let ventana = window.open("", "", "width=400,height=300");
    // Escribe contenido en la ventana
    ventana.document.write("<h2>Restaurado con Windows 7 Home Premium. Ideal para trabajo y entretenimiento</h2>");
    ventana.document.write("<p>Procesador: Intel Core i7-3517U,RAM: 8 GB DDR3,Almacenamiento: 750 GB HDD,Tarjeta Gráfica: Intel HD Graphics 4000</p>");
    const cteRestaurado2='Reparado'
    ('<h2>'+cteRestaurado2+'con Windows 7 Home Premium. Ideal para trabajo y entretenimiento</h2>')
}

function producto3(event){
    event.preventDefault();
    // Crea una ventana nueva
    let ventana = window.open("", "", "width=400,height=300");
    // Escribe contenido en la ventana
    ventana.document.write("<h2>Restaurado con Windows 8. Rendimiento sólido para tareas diarias</h2>");
    ventana.document.write("<p>Procesador: AMD A8-4500M,RAM: 6 GB DDR3,Almacenamiento: 1 TB HDD,Tarjeta Gráfica: AMD Radeon HD 7640G</p>");
    const cteRestaurado3='Restaurado'
    ('<h2>'+ cteRestaurado3 +'con Windows 8. Rendimiento sólido para tareas diarias</h2>')
}
function producto4(event){
    event.preventDefault();
    // Crea una ventana nueva
    let ventana = window.open("", "", "width=400,height=300");
    // Escribe contenido en la ventana
    ventana.document.write("<h2>Restaurado con Ubuntu 16.04 LTS. Excelente para programación y uso empresarial</h2>");
    ventana.document.write("<p>Procesador: Intel Core i5-2520M,RAM: 4 GB DDR3,Almacenamiento: 320 GB HDD,Tarjeta Gráfica: Intel HD Graphics 3000</p>");
    const cteRestaurado4 ='Restaurado'
    ( '<h2>' + cteRestaurado4 + 'con Ubuntu 16.04 LTS. Excelente para programación y uso empresarial</h2>')
}



