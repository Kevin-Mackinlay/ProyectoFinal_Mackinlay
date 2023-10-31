export const list = [
  { category:'calzados', name: "zapatillas Nike", stock: 10, price: 30000, description: "lorem lorem lorem", img: "../images/zapas.avif" },
  {  category:'camisetas', name: "white shirt", stock: 10, price: 20000, description: "lorem lorem lorem", img: "../images/remera.jpg" },
  {  category:'shorts', name: "black shorts", stock: 8, price: 30000, description: "lorem lorem lorem", img: "../images/short1.webp" },
  {  category:'calzados', name: "zapatillas Puma", stock: 5, price: 40000, description: "lorem lorem lorem", img: "../images/zapatillas puma.jpg" },
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