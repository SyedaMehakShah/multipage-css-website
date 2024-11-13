import "../styles/main.css";
import Image from 'next/image';

export default function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="image-container">
          <Image
            className="image"
            src="https://cakemeawayie.com/cdn/shop/collections/small_celebration_cakes_banner.webp?v=1703907649"
            alt="Celebration Cakes Banner"
            layout="responsive"
            width={50}
            height={50}
          />
        </div>

        <div className="flex">
          <h2 className="catalogue-title">Our Catalogue</h2>
          <div className="product">
            <Image
              src="https://bellyfull.net/wp-content/uploads/2022/12/Chocolate-Swiss-Roll-blog-3.jpg"
              alt="Chocolate Swiss Roll"
              width={200}
              height={200}
            />
            <p className="product-name">Chocolate Swiss Roll</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://previews.123rf.com/images/ketriket/ketriket1802/ketriket180200008/95335860-donut-on-a-plate-and-on-a-white-background-photo-of-sweets-top-view-copy-space-mock-up.jpg"
              alt="Creame Donut"
              width={200}
              height={200}
            />
            <p className="product-name">Creame Donut</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5bc319cfa09a7e06a471700a/ece5b263-f80f-4a15-aa94-d406471fc302/no+bake+cheesecake+hero.jpg"
              alt="Strawberry Cheesecake"
              width={200}
              height={200}
            />
            <p className="product-name">Strawberry Cheesecake</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://i.pinimg.com/736x/95/ae/09/95ae090185c62fd31adb22eca2d94a3d.jpg"
              alt="Blueberry Macarons"
              width={200}
              height={200}
            />
            <p className="product-name">Blueberry Macarons</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://img.freepik.com/premium-photo/red-velvet-cake-plate_165536-4610.jpg"
              alt="Red Velvet Pastry"
              width={200}
              height={200}
            />
            <p className="product-name">Red Velvet Pastry</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://preppykitchen.com/wp-content/uploads/2021/10/Cake-Pops-Blog-1.jpg"
              alt="Vanilla Cake Pops"
              width={200}
              height={200}
            />
            <p className="product-name">Vanilla Cake Pops</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46kfFJLS36CFnlwgBjUXh1pn-Zz910L5zV-IWlhpFvEUhHz1C4LhwUJ8Hxh5ZT0U3jaU&usqp=CAU"
              alt="Chocolate Chips Cupcake"
              width={200}
              height={200}
            />
            <p className="product-name">Chocolate Chips Cupcake</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="https://thefirstyearblog.com/wp-content/uploads/2024/01/Pancake-Recipe-26.jpg"
              alt="Buttermilk Pancakes"
              width={200}
              height={200}
            />
            <p className="product-name">Buttermilk Pancakes</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
        </div>
      </div>
    </div>
  );
}