const list = [
  { id: "01", name: "Zapatillas", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/zapas.avif" },
  { id: "02", name: "Remeras", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/remera.jpg" },
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

 export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(list[1])
        },2000)
    })
 }