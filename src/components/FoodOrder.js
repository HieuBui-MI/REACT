import React, { useEffect, useState } from 'react';
import productsData from '../assets/products.json';
import logo from '../assets/Logo.png';

export function AppF() {
    return (
        <div style={({ width: '100%', height: '925px' })}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}


export function CategoryMenu() {
    const categories = ["Automotive", "Furniture", "Grocery", "Health", "Jewelry", "Music"];

    return (
        <div className="category-menu" style={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: 'blue',
            alignItems: 'center',
            width: '30%',
            height: '90%',
            overflowY: 'auto',
            position: 'relative',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }}>
            <h3 style={{
                color: 'white',
                marginBottom: '10px',
                position: 'sticky',
                top: 0,
                backgroundColor: 'blue',
                padding: '10px',
                width: '100%',
                textAlign: 'center',
                zIndex: 1
            }}>Danh mục</h3>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                width: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
                {categories.map((category, index) => (
                    <li key={index} style={{
                        padding: '10px',
                        backgroundColor: 'white',
                        margin: '5px 15px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgray'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}>
                        {category}
                    </li>
                ))}
            </ul>
            <style>{`
                .category-menu::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

function ProductLists({ quantity, tag }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
        rows.push(products.slice(i, i + 3));
    }

    return (
        <div style={{
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: 'gray',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        }}>
            <style>
                {`::-webkit-scrollbar { display: none; }`}
            </style>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    backgroundColor: 'gray',
                    width: '100%',
                    height: '100%',
                    padding: '11.5px 15px'
                }}>
                    {row.map(product => (
                        <Product key={product.id} image={product.image} name={product.name} price={product.price} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export function Product({ image = "", name = "Sample Product", price = "0.00" }) {
    return (
        <div className="product-item" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
            width: '220px',
            textAlign: 'center',
            transition: 'transform 0.3s',
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={image} alt={name} style={{
                    width: '60%',
                    height: '60%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    margin: '12px 0px 0px 0px'
                }} />
                <h4 style={{ margin: '5px 0px 0px 0px', fontSize: '1.1em', fontWeight: 'bold' }}>{name}</h4>
                <p style={{ margin: '5px 0px 0px 0px', color: 'green', fontWeight: 'bold', fontSize: '1.2em' }}>${price}</p>
                <div style={{ width: '100%', padding: '15px', borderRadius: '5px' }}><button style={{
                    padding: '10px 15px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'darkblue'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'blue'}>
                    Add to Cart
                </button>
                </div>

            </div>
        </div>
    );
}

export function LogoSection() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '20%',
            }}
        >
            <Logo />
        </div>
    );
}

export function HeaderButtonGroup() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '70%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '30%',
                }}
            >
                <Button content={"Language"} iconsrc={"https://img.icons8.com/?size=100&id=30633&format=png&color=000000"}/>
                <Button content={"Login"} iconsrc={"https://img.icons8.com/?size=100&id=26211&format=png&color=000000"} />
            </div>
        </div>
    );
}

export function TopBodyButtonGroup() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                // backgroundColor: 'blue',
                width: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: '12%',
                    // backgroundColor: 'blue',
                }}
            >
                <Search />
                <Icon src={"https://img.icons8.com/?size=100&id=7695&format=png&color=000000"} />
            </div>
        </div>
    );
}

export function TextGroup() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                // backgroundColor: 'red',
                width: '100%',
                // marginLeft: '1%'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '50%',
                    marginLeft: '12%'
                }}
            >
                <Text count={productsData.products.length} />
            </div>
        </div>
    );
}

export function BottomBodyButtonGroup() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    width: '90%',
                    justifyContent: 'flex-end',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '30%', marginRight: '4.8%' }}>
                    <Button content={"Cart"} iconsrc={"https://img.icons8.com/?size=100&id=9720&format=png&color=000000"} />
                </div>
            </div>
        </div>
    );
}

export function Header() {
    return (
        <div
            className="MainWrapper"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '10%',
                backgroundColor: 'green',

            }}
        >
            <div
                className="SubWrapper"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    justifyContent: 'space-around',
                    width: '60%',
                    height: '100%',
                }}
            >
                <LogoSection />
                <HeaderButtonGroup />
            </div>
        </div>
    );
}


function Button({content, iconsrc}) {
    return (
        <div style={({ backgroundColor: 'yellow', width: "fit-content", height: "25px", marginLeft: "10px", padding: "5px", borderRadius: "5px", cursor: "pointer", display: "flex", alignItems: "center" })}>
            {content}
            <Icon src={iconsrc} />
        </div>
    );
}

function Search() {
    return (
        <div style={{ width: "200px", height: "25px", marginLeft: "10px", display: "flex", alignItems: "center", paddingRight: "15px" }}>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                style={{ width: "100%", height: "100%", border: "none", outline: "none", paddingLeft: "5px" }}
            />
        </div>
    );
}

function Icon({ src, size = 30 }) {
    return (
        <img
            src={src}
            alt="icon"
            style={{ width: size, height: size, objectFit: "contain" }}
        />
    );
}

function Text({ count }) {
    if (count === undefined) count = 0;
    return (
        <div style={({ width: "fit-content", display: "flex",justifyContent: "center", alignItems: "center", cursor: "pointer", })}>
            <p style={{
                color: 'white',
                position: 'sticky',
                top: 0,
                backgroundColor: 'blue',
                textAlign: 'center',
                zIndex: 1
            }}>Số lượng sản phẩm: {count}</p>
        </div>
        
    );
}


function Logo() {
    return (
        <div style={({ backgroundImage: `url(${logo})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "75px", height: "75px" })}>

        </div>
    );
}

export function Body() {
    return (
        <div class="MainWrapper" style={({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' })}>
            <div class="SubWrapper" style={({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'gray', width: '60%', height: '100%' })}>
                <div style={({ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'gray', width: '90%', height: '95%' })}>
                    <CategoryMenu />
                    <div style={({ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' })}>
                        <div style={({ width: '100%', height: '10%', backgroundColor: 'blue', borderRadius: '10px', display: 'flex', alignItems: 'center' })}>
                            <TextGroup />
                            <TopBodyButtonGroup />
                        </div>
                        <ProductLists quantity={20} tag="BestSeller" />
                    </div>

                </div>
                <div style={({ backgroundColor: 'black', height: '5%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' })}>
                    <BottomBodyButtonGroup style={({ marginRight: '20px' })} />
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div style={({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'green', width: '100%', height: '10%', bottom: '0' })}>

        </div>
    );
}