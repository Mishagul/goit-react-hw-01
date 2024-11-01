// src/components/App.jsx

import Product from "./Product";
import { Alert } from "./Alert";


export default function App() {
return (
<div>
	<h1>Best selling</h1>
	<>
    <Alert variant="info">
        Would you like to browse our recommended products?
    </Alert>
    <Alert variant="error">
        There was an error during your last transaction
    </Alert>
    <Alert variant="success">
        Payment received, thank you for your purchase
    </Alert>
    <Alert variant="warning">
        Please update your profile contact information
    </Alert>
    </>

<Product
name="Tacos With Lime"
imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
price={10.99}
/>
<Product
name="Fries and Burger"
price={14.29}
/>
</div>
);
}
