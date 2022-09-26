import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [{
  id:'1',
  title:'first product',
  price:10,
  description:'This is first product'
},
{
  id:'2',
  title:'second product',
  price:20,
  description:'This is second product'
}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) =>   
        <ProductItem
          id={prod.id}
          key={prod.id}
          title={prod.title}
          price={prod.price}
          description={prod.description}
        />
      )}
      </ul>
    </section>
  );
};

export default Products;
