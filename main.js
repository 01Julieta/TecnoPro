let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('En esta página se pretende proyectar informacion acerca de esta carrera universitaria. <br> ¿Estás listo?')
.pauseFor(200)
.deleteChars(10)
.start();