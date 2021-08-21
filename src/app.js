let who = ['El Perro', 'Mi Abuela', 'Su tortuga', 'Mi pajaro'];
let action = ['comió', 'orinó', 'aplastó', 'rompió'];
let what = ['mi tarea', 'las llaves', 'mi ferrari'];
let when = ['antes de clases', 'justo a tiempo', 'cuando dormía'];

function theExcuseGenerator() {
  who.length
  action.length
  what.length
  when.length
}


function excuse(array1, array2, array3, array4) {
  let whoRandomNumber = Math.floor(Math.random() * array1.length);
  let actionWhoRandomNumber = Math.floor(Math.random() * array2.length);
  let whatRandomNumber = Math.floor(Math.random() * array3.length);
  let whenRandomNumber = Math.floor(Math.random() * array4.length);

  console.log(
    whoRandomNumber,
    actionWhoRandomNumber,
    whatRandomNumber,
    whenRandomNumber
  );