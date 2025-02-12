import React, { useState } from 'react';
import './card.css';

export class Cart {
    static items = {};

    static addItem(id, quantity) {
        if (Cart.items[id]) {
            Cart.items[id] += quantity;
        } else {
            Cart.items[id] = quantity;
        }
    }

    static removeItem(id) {
        delete Cart.items[id];
    }

    static clearCart() {
        Cart.items = {};
    }

    static getItems() {
        return Cart.items;
    }

    static getTotalPrice(products) {
        return Object.entries(Cart.items).reduce((total, [id, quantity]) => {
            return total + (products[id].price * quantity);
        }, 0);
    }
}

export const products = {
    '0x1': {
        class: 'onion',
        farm: 1,
        quant: 10,
        unit: 'kg',
        price: 1.5,
        travel_history: {
            '06/05/2024': {
                from: 'Chicago',
                to: 'Boston',
                medium: 'flight',
                co2: 2000,
            }
        },
        date_harvest: '06/01/2024',
        date_expiry: '06/30/2024'
    },
    '0x2': {
        class: 'tomato',
        farm: 2,
        quant: 5,
        unit: 'kg',
        price: 2.0,
        travel_history: {
            '06/02/2024': {
                from: 'Los Angeles',
                to: 'San Francisco',
                medium: 'truck',
                co2: 500,
            }
        },
        date_harvest: '05/28/2024',
        date_expiry: '06/15/2024'
    },
    '0x3': {
        class: 'potato',
        farm: 3,
        quant: 20,
        unit: 'kg',
        price: 0.8,
        travel_history: {
            '06/03/2024': {
                from: 'Denver',
                to: 'Chicago',
                medium: 'train',
                co2: 800,
            }
        },
        date_harvest: '05/25/2024',
        date_expiry: '06/20/2024'
    },
    '0x4': {
        class: 'carrot',
        farm: 4,
        quant: 8,
        unit: 'kg',
        price: 1.2,
        travel_history: {
            '06/04/2024': {
                from: 'Seattle',
                to: 'Portland',
                medium: 'truck',
                co2: 300,
            }
        },
        date_harvest: '05/30/2024',
        date_expiry: '06/25/2024'
    },
    '0x5': {
        class: 'broccoli',
        farm: 1,
        quant: 15,
        unit: 'kg',
        price: 2.5,
        travel_history: {
            '06/01/2024': {
                from: 'Miami',
                to: 'Orlando',
                medium: 'van',
                co2: 200,
            }
        },
        date_harvest: '05/27/2024',
        date_expiry: '06/22/2024'
    },
    '0x6': {
        class: 'cabbage',
        farm: 2,
        quant: 12,
        unit: 'kg',
        price: 1.3,
        travel_history: {
            '06/06/2024': {
                from: 'Austin',
                to: 'Dallas',
                medium: 'truck',
                co2: 400,
            }
        },
        date_harvest: '05/31/2024',
        date_expiry: '06/26/2024'
    },
    '0x7': {
        class: 'spinach',
        farm: 3,
        quant: 7,
        unit: 'kg',
        price: 3.0,
        travel_history: {
            '06/07/2024': {
                from: 'Boston',
                to: 'New York',
                medium: 'train',
                co2: 150,
            }
        },
        date_harvest: '06/02/2024',
        date_expiry: '06/27/2024'
    },
    '0x8': {
        class: 'pepper',
        farm: 4,
        quant: 9,
        unit: 'kg',
        price: 2.8,
        travel_history: {
            '06/08/2024': {
                from: 'San Diego',
                to: 'Las Vegas',
                medium: 'truck',
                co2: 600,
            }
        },
        date_harvest: '06/03/2024',
        date_expiry: '06/28/2024'
    },
    '0x9': {
        class: 'onion',
        farm: 2,
        quant: 14,
        unit: 'kg',
        price: 1.6,
        travel_history: {
            '06/01/2024': {
                from: 'Houston',
                to: 'Dallas',
                medium: 'truck',
                co2: 300,
            }
        },
        date_harvest: '05/28/2024',
        date_expiry: '06/25/2024'
    },
    '0xA': {
        class: 'tomato',
        farm: 3,
        quant: 18,
        unit: 'kg',
        price: 2.2,
        travel_history: {
            '06/02/2024': {
                from: 'Phoenix',
                to: 'Las Vegas',
                medium: 'van',
                co2: 450,
            }
        },
        date_harvest: '05/30/2024',
        date_expiry: '06/20/2024'
    },
    '0xB': {
        class: 'potato',
        farm: 4,
        quant: 22,
        unit: 'kg',
        price: 0.9,
        travel_history: {
            '06/03/2024': {
                from: 'Dallas',
                to: 'Houston',
                medium: 'train',
                co2: 700,
            }
        },
        date_harvest: '05/26/2024',
        date_expiry: '06/18/2024'
    },
    '0xC': {
        class: 'carrot',
        farm: 1,
        quant: 10,
        unit: 'kg',
        price: 1.3,
        travel_history: {
            '06/04/2024': {
                from: 'Seattle',
                to: 'Vancouver',
                medium: 'truck',
                co2: 250,
            }
        },
        date_harvest: '05/29/2024',
        date_expiry: '06/24/2024'
    },
    '0xD': {
        class: 'broccoli',
        farm: 2,
        quant: 12,
        unit: 'kg',
        price: 2.4,
        travel_history: {
            '06/01/2024': {
                from: 'Tampa',
                to: 'Orlando',
                medium: 'van',
                co2: 150,
            }
        },
        date_harvest: '05/25/2024',
        date_expiry: '06/19/2024'
    },
    '0xE': {
        class: 'cabbage',
        farm: 3,
        quant: 16,
        unit: 'kg',
        price: 1.2,
        travel_history: {
            '06/06/2024': {
                from: 'Denver',
                to: 'Salt Lake City',
                medium: 'truck',
                co2: 350,
            }
        },
        date_harvest: '05/27/2024',
        date_expiry: '06/23/2024'
    },
    '0xF': {
        class: 'spinach',
        farm: 4,
        quant: 9,
        unit: 'kg',
        price: 3.1,
        travel_history: {
            '06/07/2024': {
                from: 'New York',
                to: 'Philadelphia',
                medium: 'train',
                co2: 100,
            }
        },
        date_harvest: '06/01/2024',
        date_expiry: '06/26/2024'
    },
    '0x10': {
        class: 'pepper',
        farm: 1,
        quant: 11,
        unit: 'kg',
        price: 2.7,
        travel_history: {
            '06/08/2024': {
                from: 'San Jose',
                to: 'San Francisco',
                medium: 'truck',
                co2: 200,
            }
        },
        date_harvest: '06/04/2024',
        date_expiry: '06/27/2024'
    },
    '0x11': {
        class: 'onion',
        farm: 3,
        quant: 20,
        unit: 'kg',
        price: 1.7,
        travel_history: {
            '06/01/2024': {
                from: 'Chicago',
                to: 'New York',
                medium: 'flight',
                co2: 1800,
            }
        },
        date_harvest: '05/30/2024',
        date_expiry: '06/22/2024'
    },
    '0x12': {
        class: 'tomato',
        farm: 4,
        quant: 15,
        unit: 'kg',
        price: 2.1,
        travel_history: {
            '06/02/2024': {
                from: 'Miami',
                to: 'Orlando',
                medium: 'truck',
                co2: 250,
            }
        },
        date_harvest: '05/27/2024',
        date_expiry: '06/18/2024'
    },
    '0x13': {
        class: 'potato',
        farm: 1,
        quant: 25,
        unit: 'kg',
        price: 0.75,
        travel_history: {
            '06/03/2024': {
                from: 'Dallas',
                to: 'Austin',
                medium: 'train',
                co2: 600,
            }
        },
        date_harvest: '05/24/2024',
        date_expiry: '06/16/2024'
    },
    '0x14': {
        class: 'carrot',
        farm: 2,
        quant: 14,
        unit: 'kg',
        price: 1.1,
        travel_history: {
            '06/04/2024': {
                from: 'San Francisco',
                to: 'San Diego',
                medium: 'truck',
                co2: 300,
            }
        },
        date_harvest: '05/26/2024',
        date_expiry: '06/20/2024'
    },
    '0x15': {
        class: 'broccoli',
        farm: 3,
        quant: 20,
        unit: 'kg',
        price: 2.6,
        travel_history: {
            '06/01/2024': {
                from: 'Seattle',
                to: 'Portland',
                medium: 'van',
                co2: 200,
            }
        },
        date_harvest: '05/28/2024',
        date_expiry: '06/21/2024'
    },
    '0x16': {
        class: 'cabbage',
        farm: 4,
        quant: 18,
        unit: 'kg',
        price: 1.4,
        travel_history: {
            '06/06/2024': {
                from: 'Atlanta',
                to: 'Nashville',
                medium: 'truck',
                co2: 300,
            }
        },
        date_harvest: '05/29/2024',
        date_expiry: '06/19/2024'
    },
    '0x17': {
        class: 'spinach',
        farm: 1,
        quant: 11,
        unit: 'kg',
        price: 2.9,
        travel_history: {
            '06/07/2024': {
                from: 'Phoenix',
                to: 'Tucson',
                medium: 'train',
                co2: 120,
            }
        },
        date_harvest: '06/05/2024',
        date_expiry: '06/28/2024'
    },
    '0x18': {
        class: 'pepper',
        farm: 2,
        quant: 10,
        unit: 'kg',
        price: 2.75,
        travel_history: {
            '06/08/2024': {
                from: 'Denver',
                to: 'Salt Lake City',
                medium: 'truck',
                co2: 450,
            }
        },
        date_harvest: '06/02/2024',
        date_expiry: '06/24/2024'
    },
    '0x19': {
        class: 'onion',
        farm: 4,
        quant: 13,
        unit: 'kg',
        price: 1.65,
        travel_history: {
            '06/01/2024': {
                from: 'New York',
                to: 'Philadelphia',
                medium: 'van',
                co2: 100,
            }
        },
        date_harvest: '05/31/2024',
        date_expiry: '06/23/2024'
    },
    '0x1A': {
        class: 'tomato',
        farm: 1,
        quant: 12,
        unit: 'kg',
        price: 2.15,
        travel_history: {
            '06/02/2024': {
                from: 'Chicago',
                to: 'Indianapolis',
                medium: 'truck',
                co2: 200,
            }
        },
        date_harvest: '05/25/2024',
        date_expiry: '06/17/2024'
    },
};



// const productsByClass = {};
// Object.entries(products).forEach(([id, product]) => {
//     if (!productsByClass[product.class]) {
//         productsByClass[product.class] = [];
//     }
//     productsByClass[product.class].push(id);
// });

export const ProductPage = () => {
    const [showHistory, setShowHistory] = useState({});

    const toggleShowHistory = (id) => {
        setShowHistory(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const buyProduct = (id) => {
        if (id in products) {
            const product = products[id];
            if (product.quant > 0) {
                product.quant -= 1;
                Cart.addItem(id, 1);
            }
        }
        toggleShowHistory(0);
        toggleShowHistory(0);
    };

    return (
        <>
            <div className='flex-horizontal product-container'>
                {Object.entries(products).map(([id, product]) => (
                    <div className='product' key={id}>
                        <img className='product-img' src={`./src/assets/${product.class}.jpg`} alt={product.class} />
                        <p>{product.class}</p>
                        <p>Quantity: {product.quant} {product.unit}</p>
                        <p>Date of Harvest: {product.date_harvest}</p>
                        <p>Date of Expiry: {product.date_expiry}</p>
                        <button onClick={() => buyProduct(id)}>Add to Cart</button>
                        {product.travel_history && (
                            <>
                                <button onClick={() => toggleShowHistory(id)}>
                                    {showHistory[id] ? 'Hide History' : 'Show History'}
                                </button>
                                {showHistory[id] && (
                                    <div className='travel-history'>
                                        {Object.entries(product.travel_history).map(([date, details], index) => (
                                            <div key={index}>
                                                <p>Date: {date}</p>
                                                <p>From: {details.from}</p>
                                                <p>To: {details.to}</p>
                                                <p>Medium: {details.medium}</p>
                                                <p>CO2 Emissions: {details.co2} kg</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductPage;
