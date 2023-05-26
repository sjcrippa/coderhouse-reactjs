import data from '../data/products.json';

export const pedirProdsPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((e) => e.id === id);

        if (item) {
            resolve(item)
        } else {
            reject ({
                error: 'No se encontro el producto'
            })
        }
    })
}