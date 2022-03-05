import ProductCard from "../components/CatalogPage/ProductCard";
import LandingLayout from "../components/Layout/LandingLayout";

const productList = [
  {
    id: 1,
    productName: "Producto 1",
    Price: "S/. 10.00",
    Stock: "10",
  },
  {
    id: 2,
    productName: "Producto 2",
    Price: "S/. 20.00",
    Stock: "20",
  },
  {
    id: 3,
    productName: "Producto 3",
    Price: "S/. 30.00",
    Stock: "30",
  },
  {
    id: 4,
    productName: "Producto 4",
    Price: "S/. 40.00",
    Stock: "40",
  },
  {
    id: 5,
    productName: "Producto 5",
    Price: "S/. 50.00",
    Stock: "50",
  },
  {
    id: 5,
    productName: "Producto 5",
    Price: "S/. 50.00",
    Stock: "50",
  },
  {
    id: 5,
    productName: "Producto 5",
    Price: "S/. 50.00",
    Stock: "50",
  },
  {
    id: 5,
    productName: "Producto 5",
    Price: "S/. 50.00",
    Stock: "50",
  },
];

export default function Catalogo() {
  return (
    <LandingLayout>
      <div className="bg-palette-3">
        <div className="relative mt-10 grid lg:grid-cols-5 sm:grid-cols-1 xs:grid-cols-1">
          {productList.map((item) => (
            <div key={item.id}>
              <ProductCard
                productName={item.productName}
                Stock={item.Stock}
                Price={item.Price}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </LandingLayout>
  );
}
