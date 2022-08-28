import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../stock.json";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemdetail, setItemdetail] = useState([]);

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(Data);
            }, 2000);
        })
            .then((res) => res.json)
            .then(setItemdetail(Data.find((el) => el.id == id)));
    }, [id]);

    return (
        <>
            {Object.keys(itemdetail).length && < ItemDetail item = { itemdetail } />}
        </>
        
    )
};

export default ItemDetailContainer;
