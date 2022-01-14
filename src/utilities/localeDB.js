const localeDB = () => {

    const addStorage = (id, quantity = 1) => {
        console.log(id, quantity)
        let cart_item = {};
        let exitItem = getStorageData();
        console.log(getStorageData())
        if (exitItem) {
            cart_item = exitItem;

            cart_item[id] = quantity;
        }

        localStorage.setItem("addToCartProduct", JSON.stringify(cart_item));
        console.log(getAllProductQuantity());
        console.log(getStorageData());
    }

    const getStorageData = () => {
        const addedItems = localStorage.getItem("addToCartProduct");
        if (addedItems) {
            return JSON.parse(addedItems);
        } else {
            return {};
        }
    }
    const getAllProductQuantity = () => {
        const addItem = getStorageData();
        let quantity = 0;
        for (let i in addItem) {
            quantity += addItem[i];
        }
        return quantity;
    }

    const handleDeleteItem = (id) => {
        let exitItem = getStorageData();
        delete exitItem[id];
        localStorage.setItem("addToCartProduct", JSON.stringify(exitItem));
    }
    const clearStorageData = () => {
        localStorage.removeItem("addToCartProduct");
        sessionStorage.removeItem("myOrderProducts");
    }


    return { addStorage, getStorageData, getAllProductQuantity, clearStorageData, handleDeleteItem }
}

export default localeDB;