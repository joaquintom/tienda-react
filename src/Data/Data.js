
import DB from '../Api/firebaseConfig'
import {collection, getDocs} from "firebase/firestore"


const products = [
    
        {

        id: 0,
        marca: "Edelrid",
       
        descripcion: "Singing Rock Arnés de escalada Ray es un arnés para principiantes en escalada deportiva. Te lo recomendamos para los que empizan a escalar. También se utiliza en centros donde se realizan cursos de escalada y en gimnasios. Cuenta con 3 hebillas ajustables, una en la parte central y dos en las piernas.",
       
        categoria: 'arnes',
        img: "../image/arnes/singing-rock-arnes.jpg",
        precio: 17950,
        stock:5,
        initial:1

         },

        {

        id:1,
        marca: "Edelrid",
        
        descripcion: "Un arnés completo especialmente diseñado para la anatomía femenina con perneras ajustables y un punto de amarre fácil de centrar. Apto para todas las actividades verticales.",

        categoria: 'arnes',
        img:"../image/arnes/edelrid-arnes-mujer.jpg",
        precio: 15550,
        stock: 15,
        initial:1
    },

        {

        id:2,
        marca: "Edelrid",

        descripcion: "Arnés de escalada deportivo moderno y cómodo con perneras ajustables para un ajuste perfecto.",

        categoria: 'arnes',
        img: "../image/arnes/edelrid_moe.jpg",
        precio: 12700,
        stock: 4,
        initial:1
    },

    {

        id:3,
        marca: "Edelrid",

        descripcion: "Arnés regulable para niño de la marca Edeldrid pensado para que los más pequeños puedan disfrutar de la práctica de la escalada y deportes en los que es necesario el encordamiento.",

        categoria: 'arnes',
        img: "../image/arnes/edelrid-arnes-nino.jpg",
        precio: 14100,
        stock: 19,
        initial:1
    },

    {

        id:4,
        marca: "La Sportiva",
       
        descripcion: "Pies de gato para escala deportiva, conocido modelo de la marca La Sportiva pero en su novedosa versión con velcro, una solución eficaz y rápida para competición o escaladores exigentes.",

        categoria: 'zapatillas',
        img: "../image/zapatillas/la_sportiva_miura.jpg",
        precio: 22300,
        stock: 20,
        initial:1
    },

    {

        id:5,
        marca: "La Sportiva",

        descipcion: "La Sportiva Tarantula.El pie de gato Tarantula de La Sportiva es cómodo y fácil de ajustar. La parte superior sin forro es excelente para la gestión de la humedad y muy cómodo para llevarlos en los pies durante un tiempo prolongado.", 
        
        categoria: 'zapatillas',
        img: "../image/zapatillas/la-sportiva-tarantulace.jpg",
        precio: 20140,
        stock: 14,
        initial:1
    },

    {

        id:6,
        marca: "La Sportiva",
               
        descripcion:  "Rediseño técnico y estético de la pédula polivalente creada en Italia, diseñado para uso indoor y outdoor.",
       
        categoria: 'zapatillas',
        img: "../image/zapatillas/la-sportiva-cobra.jpg",
        precio: 18950,
        stock: 12,
        initial:1
    },

    {

        id:7,
        marca: "La Sportiva",
        
        descripcion:  "Es la versión femenina del modelo tradicional Miura VS, que se ajusta al calce y a los colores originales. Este modelo top ha sido diseñado para las mujeres escaladoras de todo el mundo y combina precisión, sensibilidad y apoyo para los pies.",
        
        categoria: 'zapatillas',
        img: "../image/zapatillas/la_sportiva_finale_woman.jpg",
        precio: 17950,
        stock: 11,
        initial:1
    },


    {

        id:8,
        marca: "Edelrid",

        descripcion: "La cuerda doble más fina y ligera del mercado. La primera opción para la escalada exigente en hielo y mixta, cuando cada gramo cuenta. Ahora también con acabado Eco Dry sin PFC según lo estipulado por la norma UIAA para cuerdas repelentes al agua.",

        categoria: 'cuerdas',
        img: "../image/cuerda/edelrid_skimmer_eco_dry_7_1mm_60.jpeg",
        precio: 30950,
        stock: 11,
        initial:1
    },

    
    {

        id:9,
        marca: "Edelrid",

        descripcion: "Cuerda especial de entrenamiento con funda de poliéster extremadamente resistente a la abrasión. La cuerda ideal para el entrenamiento intensivo en el muro.",

        categoria: 'cuerdas',
        img: "../image/cuerda/edelrid_boa_gym_9_8mm_35m.jpg",
        precio: 28550,
        stock: 10,
        initial:1
    },


    {

        id:10,
        marca: "Edelrid",

        descripcion: "El modelo Parrot 9,8 mm de Edelrid es una cuerda simple todoterreno fabricada con un toque ecológico, utilizando hilos de resto de otras producciones, protegen el medio ambiente sin descuidar la calidad y seguridad de las cuerdas Edelrid",

        categoria: 'cuerdas',
        img: "../image/cuerda/edelrid_parrot_9_8mm_70m.jpg",
        precio: 25900,
        stock: 11,
        initial:1
    },
    

    {

        id: 11,
        marca: "Edelrid",

        descripcion: "Cuerda para escalada en roca y utilización en simple. De un diámetro de 9,8 la Boa es una buena introducción al manejo de cuerdas de diámetro inferior a 10 mm.",

        categoria: 'cuerdas',
        img: "../image/cuerda/edelrid_boa_9_8mm_40m.jpg",
        precio: 23950,
        stock: 9,
        initial:1
    }

]



export async function getProducts () {

    // creo la referencia a la coleccion que quiero traer (productos)
    const colRef = collection(DB, 'productos');

    try{

        //voy a buscar en la bbdd los documentos de esa coleccion y le digo al interprete que espere
    const snapshot = await getDocs(colRef);

    //objeto con nuestros productos
      const productosConFormato = snapshot.docs.map((rawDoc) => {
        return{
          id:rawDoc.id,
          ...rawDoc.data() 
        }
      });

      return (productosConFormato); //resultado real

    } catch (err) {
   
        console.log('>> error al probar traer los docs', err)

    }
}

    
//Por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })

}


//Por id
export const getProductById = (id) => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
       }, 1000 )

    })
    
}
