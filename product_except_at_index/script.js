const getProductsOfAllElementsExcetpAtIndex = (arr) => {
    if (arr.length < 3) {
        console.log("not enough elements");
        return false;
    }
    let listOfProducts = arr.map(el => 0);

    let productNow = 1;
    arr.map((el, i) => {
        listOfProducts[i] = productNow;
        productNow *= arr[i];
    });

    console.log(`list or the products of all the previous elements ${listOfProducts}`);

    productNow = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        listOfProducts[i] *= productNow;
        productNow *= arr[i];
    }
    
    console.log(`list or the products of all the previous and next elements ${listOfProducts}`);

};

getProductsOfAllElementsExcetpAtIndex([1, 2, 6, 5, 9]);