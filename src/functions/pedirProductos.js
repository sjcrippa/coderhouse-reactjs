import data from '../data/products.json';

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        },2000)
    });
};

export default pedirProductos