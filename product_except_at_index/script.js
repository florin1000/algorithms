const getProductsOfAllElementsExceptAtIndex = (arr) => {
    let len = arr.length;
    if (len < 3) {
        console.log("not enough elements");
        return false;
    }
    let listOfProducts = arr.map(el => 0);

    let productNow = 1;
    arr.map((el, i) => {
        listOfProducts[i] = productNow;
        return productNow *= arr[i];
    });

    console.log(`list or the products of all the previous elements ${listOfProducts}`);

    productNow = 1;
    arr.map((el, i) => {
        listOfProducts[len - i - 1] *= productNow;
        return productNow *= arr[len - i - 1];
    });

    console.log(`list or the products of all the previous and next elements ${listOfProducts}`);

};

getProductsOfAllElementsExceptAtIndex([1, 2, 6, 5, 9]);