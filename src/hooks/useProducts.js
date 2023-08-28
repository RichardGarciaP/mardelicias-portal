import {useEffect, useState} from "react";
import {deleteEntity, getEntities, insertEntity, updateEntity} from "../services/methods";


const useProducts = () => {
    const ENTITY_NAME = 'products';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const productsPromise = await getEntities(ENTITY_NAME);

        const [productsResult] = await Promise.all([productsPromise]);
        setProducts(productsResult?.data);
        setLoading(false);
    };

    const deleteProduct = (id) => {
        deleteEntity(ENTITY_NAME, id).then(() => getProducts())
    }

    const insertProduct = async (data) => {
        await insertEntity(ENTITY_NAME, data);
    }

    const editProduct = async (id, data) => {
        await updateEntity(ENTITY_NAME, {...data, id})
    }

    useEffect(()=>{
        getProducts();
    }, [])

    return {
        products,
        insertProduct,
        editProduct,
        deleteProduct,
        loading
    }

};

export default useProducts;
