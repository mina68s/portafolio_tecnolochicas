let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #27005D;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #27005D;">Soy técnica en sistemas computacionales y me gusta mucho programar.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
