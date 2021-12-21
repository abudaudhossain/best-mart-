const localeDB = () => {
   
    const addStorage = (value) => {
        
        let cart_item = {};
        let exitItem = getStorageData();
        console.log(getStorageData())
        if (exitItem) {
            cart_item = exitItem;
            if (cart_item[value]) {

                cart_item[value] += 1
            }
            else {
                cart_item[value] = 1;

            }
        }

        localStorage.setItem("addToCartProduct", JSON.stringify(cart_item));
        console.log(getAllProductQuantity())
    }

    const getStorageData = () => {
        const addedItems = localStorage.getItem("addToCartProduct");
        if (addedItems) {
            return JSON.parse(addedItems);
        } else {
            return {};
        }
    }
    const getAllProductQuantity = () =>{
       const addItem = getStorageData();
       let quantity = 0;
       for(let i in addItem){
           quantity += addItem[i]; 
       }
       return quantity;
    }
   
    return { addStorage, getStorageData, getAllProductQuantity }
}

export default localeDB;