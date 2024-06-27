fetch("https://raw.githubusercontent.com/jakiichu/data/main/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(
      `Город: ${data.address.city} Улица: ${data.address.street} Дом: ${data.address.house}`
    );
    console.log(
      `${data.person.lastName} ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`
    );
  })
  .catch((error) => console.error("Ошибка:", error));
