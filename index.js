// Creación de objetos Javascript
// Escribe una función que tome dos arreglos (a y b) como argumentos.
// Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devolver el objeto.

function myFunction(a, b) {
    let obj = {}
    for (let i = 0; i < a.length; i++) {
        // let key = a[i];
        // let value = b[i];
        obj[a[i]] = b[i];        
    }
  return obj;
}

console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]));
console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]))