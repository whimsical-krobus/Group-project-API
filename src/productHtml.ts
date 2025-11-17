export const createHtml = (products: Product[]) => {
  const productsContainer = document.getElementById("products");

  if (productsContainer) {
    productsContainer.innerHTML = "";
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    const productImgContainer = document.createElement("div");
    const productImg = document.createElement("img");
    const productDetails = document.createElement("div");
    const productTitle = document.createElement("h3");
    const productPrice = document.createElement("p");

    productImg.src = product.Image;
    productImg.alt = product.Title;
    productTitle.innerHTML = product.Title;

    productsContainer?.appendChild(productCard);
    productCard.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productCard.appendChild(productDetails);
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
  });
};
