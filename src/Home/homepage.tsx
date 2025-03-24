import React from 'react';
import { motion } from 'framer-motion';

const Layout = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2, // Delays each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Container for the whole layout */}

        <div style={{ display: 'flex', gap: '10px' }}>
          {/* First Row */}
          <div style={{ flex: '1', backgroundColor: '#e0f2fe', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://in.danielwellington.com/cdn/shop/collections/paulabiadacz_1_1_7f0fec07-5449-4332-8abd-aa8dd2bfadbc.jpg?v=1724745090"
              alt="Personal Care"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '3', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/529b7e34-6ab6-11ea-9b62-c26870b9ad9f.jpg"
              alt="Vizio TV"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1', backgroundColor: '#e0f2fe', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/12/365430631/LB/YJ/FA/6215968/casual-women-shoes.jpg"
              alt="Sports Equipment"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1', backgroundColor: '#fce4ec', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/6/317254722/UW/OY/OR/84525815/unsstitled-2-500x500.jpg"
              alt="OLLY Vitamins"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Second Row */}
          <div style={{ flex: '1', backgroundColor: '#f8bbd0', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI"
              alt="Fashion"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1', backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://www.ikea.com/in/en/images/products/barlast-table-lamp-black-white__1032423_pe836911_s5.jpg"
              alt="Patio"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1', backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2aaca524-ed9c-48c4-b1f5-1fd8fd307562/tote-bags_hero_D6E1FF2x.png"
              alt="Bag"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', color: 'black', overflow: 'hidden' }}>
            <img
              src="https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fnew-osbert-set%2F1-750x650.jpg"
              alt="Tiny Fits"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />


      {/* About Section */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 20px', gap: '20px' }}>
        {[
          { title: 'WHO ARE WE', color: '#2e7d32', bg: '#c8e6c9', text: 'Market x connects buyers and sellers worldwide, offering a seamless shopping experience with curated products.' },
          { title: 'WHAT WE OFFER', color: '#880e4f', bg: '#f8bbd0', text: 'From handmade crafts to the latest tech gadgets, we provide a diverse range of high-quality products at competitive prices.' },
          { title: 'HOW IT WORKS', color: '#1565c0', bg: '#bbdefb', text: 'Buyers can browse and purchase in a few clicks, while sellers can easily list and manage their products.' },
          { title: 'OUR COMMITMENT', color: '#e65100', bg: '#ffe0b2', text: 'We are committed to fair trade, eco-friendly packaging, and supporting small businesses globally.' }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: item.bg, padding: '30px', borderRadius: '12px', textAlign: 'left', flex: '1' }}
          >
            <h3 style={{ margin: '0 0 10px', fontSize: '1.4em', color: item.color }}>{item.title}</h3>
            <p style={{ margin: '10px 0', fontSize: '1em', lineHeight: '1.6' }}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    

      {/* Trending Categories Section */}
     

    <div>
      {/* Other content */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Trending Categories</h2>
        <motion.div
          style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '10px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              name: 'Smart Watch',
              image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEbXg1Q9Dx8zWNDxnj4yUCTNCnICM28veDrsstJ15LJhmIkyWRee9qnyM5eOyW4W9zegF1yVvdfl4m8ibSwt-AnaSBcJKvdyF0_aun1NpQwbeC9gmdfXeL',
              bgColor: '#FFCDD2',
            },
            {
              name: 'Wireless Earbuds',
              image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzJwCRznZWh95VUlSFWbJVtOHpGpGnPiD1jKpmp6WQHfaxM2_rQZhDSS1JVuPrqYPnbHzfTTY6OUi5qrdqKmmNId2jGR5B_93MtTEylyCc52Tgp29XDY_I85w',
              bgColor: '#C8E6C9',
            },
            {
              name: 'Sneakers',
              image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTU0G9NGLq4ZteIQsL5v3miTDLmNiI9KC9ZR3YyY3D8G9cRNCleT8RNQfnCgumMZQqXNzPOtfj35VuwGjs6bAjXlAuKFu0aINub77X_Aurig2zFIvQOI0ZUnw',
              bgColor: '#BBDEFB',
            },
            {
              name: 'Designer Handbag',
              image: 'https://images.meesho.com/images/products/442519293/xjwgv_1200.jpg',
              bgColor: '#FFECB3',
            },
            {
              name: 'Gaming Headset',
              image: 'https://whatnot.in/wp-content/uploads/2023/08/61m35lRdcxL._SX679_.jpg',
              bgColor: '#D1C4E9',
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              style={{
                backgroundColor: product.bgColor,
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center',
                minWidth: '200px',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
              <h4 style={{ margin: '10px 0 5px', fontSize: '1.2em' }}>{product.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
    {/* Our Speciality Heading */}
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Our Speciality</h2>
      </div>
 
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>
          Users can negotiate the prices of items directly with sellers to get the best price with our specialized chat Application.
        </p>
      </div>
    </div>
    
    
    
          
          
        
        
    
  );
};

export default Layout;