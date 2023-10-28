const list = [
  { id: "01", category:'calzados', name: "Zapatillas", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/zapas.avif" },
  { id: "02", category:'camisetas', name: "Remeras", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/remera.jpg" },
  { id: "03", category:'shorts', name: "Remeras", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/remera.jpg" },
];


 export const getProducts = () => {
   return new Promise((resolve, reject) => {
     let error = false;

     setTimeout(() => {
       if (error) {
         reject("No hay data");
       } else {
         resolve(list);
       }
     }, 3000);
   });
 };

 export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
 }