import image0 from "@/assets/reference-00.jpg.asset.json";
import image1 from "@/assets/reference-01.jpg.asset.json";
import image2 from "@/assets/reference-02.jpg.asset.json";
import image3 from "@/assets/reference-03.jpg.asset.json";
import image4 from "@/assets/reference-04.jpg.asset.json";
import image5 from "@/assets/reference-05.jpg.asset.json";
import image6 from "@/assets/reference-06.jpg.asset.json";
import image7 from "@/assets/reference-07.jpg.asset.json";
import image8 from "@/assets/reference-08.jpg.asset.json";
import image9 from "@/assets/reference-09.jpg.asset.json";
import image10 from "@/assets/reference-10.jpg.asset.json";
import image11 from "@/assets/reference-11.jpg.asset.json";
import image12 from "@/assets/reference-12.jpg.asset.json";
import image13 from "@/assets/reference-13.jpg.asset.json";
import image14 from "@/assets/reference-14.jpg.asset.json";
import image15 from "@/assets/reference-15.jpg.asset.json";
import image16 from "@/assets/reference-16.jpg.asset.json";
import image17 from "@/assets/reference-17.jpg.asset.json";
import image18 from "@/assets/reference-18.jpg.asset.json";
import image19 from "@/assets/reference-19.jpg.asset.json";
import image20 from "@/assets/reference-20.jpg.asset.json";
import image21 from "@/assets/reference-21.jpg.asset.json";
import image22 from "@/assets/reference-22.jpg.asset.json";
import image23 from "@/assets/reference-23.jpg.asset.json";
import image24 from "@/assets/reference-24.jpg.asset.json";
import image25 from "@/assets/reference-25.jpg.asset.json";
import image26 from "@/assets/reference-26.jpg.asset.json";
import image27 from "@/assets/reference-27.jpg.asset.json";
import image28 from "@/assets/reference-28.jpg.asset.json";
import image29 from "@/assets/reference-29.jpg.asset.json";
import image30 from "@/assets/reference-30.jpg.asset.json";
import pinkHoodieFront from "@/assets/youngboy-pink-forever-hoodie-front.jpg";
import pinkHoodieBack from "@/assets/youngboy-pink-forever-hoodie-back.jpg";
import creamLongSleeveFront from "@/assets/youngboy-cream-green-long-sleeve-front.jpg";
import creamLongSleeveBack from "@/assets/youngboy-cream-green-long-sleeve-back.jpg";
import redTeeFront from "@/assets/youngboy-red-forever-tee-front.jpg";
import redTeeBack from "@/assets/youngboy-red-forever-tee-back.jpg";
import whiteDragonVestFront from "@/assets/youngboy-white-dragon-vest-front.jpg";
import whiteDragonVestBack from "@/assets/youngboy-white-dragon-vest-back.jpg";

export const images = [image0.url, image1.url, image2.url, image3.url, image4.url, image5.url, image6.url, image7.url, image8.url, image9.url, image10.url, image11.url, image12.url, image13.url, image14.url, image15.url, image16.url, image17.url, image18.url, image19.url, image20.url, image21.url, image22.url, image23.url, image24.url, image25.url, image26.url, image27.url, image28.url, image29.url, image30.url, pinkHoodieFront, pinkHoodieBack, creamLongSleeveFront, creamLongSleeveBack, redTeeFront, redTeeBack, whiteDragonVestFront, whiteDragonVestBack];
export type Product = { id: number; name: string; slug: string; price: number; category: string; color: string; image: number; secondImage: number; brand: string };
export const products: Product[] = [
  {
    "id": 1,
    "name": "DBD Dragon Faux Leather Vest",
    "slug": "dbd-dragon-faux-leather-vest",
    "price": 150,
    "category": "Clothing",
    "color": "BROWN",
    "image": 1,
    "secondImage": 2,
    "brand": "Ed Hardy"
  },
  {
    "id": 2,
    "name": "Cross Snake Boxy Fleece Hoodie",
    "slug": "cross-snake-boxy-fleece-hoodie",
    "price": 198,
    "category": "Clothing",
    "color": "GREY",
    "image": 3,
    "secondImage": 4,
    "brand": "Ed Hardy"
  },
  {
    "id": 3,
    "name": "Crosses Long Fleece Short",
    "slug": "crosses-long-fleece-short",
    "price": 185,
    "category": "Clothing",
    "color": "BROWN",
    "image": 5,
    "secondImage": 6,
    "brand": "Ed Hardy"
  },
  {
    "id": 4,
    "name": "NBA Studded Boots",
    "slug": "nba-studded-boots",
    "price": 275,
    "category": "Footwear",
    "color": "BLACK",
    "image": 7,
    "secondImage": 8,
    "brand": "Ed Hardy"
  },
  {
    "id": 5,
    "name": "Crosses Boxy Thermal Hangdown Tee",
    "slug": "crosses-boxy-thermal-hangdown-tee",
    "price": 135,
    "category": "Clothing",
    "color": "MULTI",
    "image": 9,
    "secondImage": 10,
    "brand": "Ed Hardy"
  },
  {
    "id": 6,
    "name": "Never Broke Again Bandana",
    "slug": "never-broke-again-bandana",
    "price": 25,
    "category": "Accessories",
    "color": "BLACK",
    "image": 11,
    "secondImage": 11,
    "brand": "Ed Hardy"
  },
  {
    "id": 7,
    "name": "Arm Warmers",
    "slug": "arm-warmers",
    "price": 25,
    "category": "Accessories",
    "color": "MULTI",
    "image": 12,
    "secondImage": 13,
    "brand": "Ed Hardy"
  },
  {
    "id": 8,
    "name": "Youngboy Never Broke Again - Sincerely, Kentrell [VINYL LP]",
    "slug": "youngboy-never-broke-again-sincerely-kentrell-vinyl-lp",
    "price": 29.98,
    "category": "Music",
    "color": "BLACK",
    "image": 14,
    "secondImage": 14,
    "brand": ""
  },
  {
    "id": 9,
    "name": "Youngboy Never Broke Again - The Last Slimeto [VINYL LP]",
    "slug": "youngboy-never-broke-again-the-last-slimeto-vinyl-lp",
    "price": 29.98,
    "category": "Music",
    "color": "MULTI",
    "image": 15,
    "secondImage": 15,
    "brand": ""
  },
  {
    "id": 10,
    "name": "Never Broke Again - Never Broke Again: The Compilation Volume 1 CD",
    "slug": "never-broke-again-never-broke-again-the-compilation-volume-1-cd",
    "price": 11.98,
    "category": "Music",
    "color": "MULTI",
    "image": 16,
    "secondImage": 16,
    "brand": "Motown Records"
  },
  {
    "id": 11,
    "name": "Forever Kills Slowly Pink Zip Hoodie",
    "slug": "forever-kills-slowly-pink-zip-hoodie",
    "price": 200,
    "category": "Clothing",
    "color": "PINK",
    "image": 31,
    "secondImage": 32,
    "brand": "Ed Hardy"
  },
  {
    "id": 12,
    "name": "Cross Embellished Cream Long-Sleeve Tee",
    "slug": "cross-embellished-cream-long-sleeve-tee",
    "price": 120,
    "category": "Clothing",
    "color": "CREAM / GREEN",
    "image": 33,
    "secondImage": 34,
    "brand": "Ed Hardy"
  },
  {
    "id": 13,
    "name": "Forever Red Graphic Tee",
    "slug": "forever-red-graphic-tee",
    "price": 115,
    "category": "Clothing",
    "color": "RED",
    "image": 35,
    "secondImage": 36,
    "brand": "Ed Hardy"
  },
  {
    "id": 14,
    "name": "Death Before Dishonor White Dragon Vest",
    "slug": "death-before-dishonor-white-dragon-vest",
    "price": 130,
    "category": "Clothing",
    "color": "WHITE",
    "image": 37,
    "secondImage": 38,
    "brand": "Ed Hardy"
  }
];
export const articles = [
  {
    "title": "Features | BY Jordan Rose Only One King: The YoungBoy Never Broke Again Cover Story Interview",
    "image": 17,
    "url": "https://www.complex.com/music/a/j-rose/nba-youngboy-interview-cover-story-2026"
  },
  {
    "title": "News | BY Trace William Cowen YoungBoy Never Broke Again on Michael Jackson Comparisons: 'That's Going Too Far'",
    "image": 18,
    "url": "https://www.complex.com/music/a/tracewilliamcowen/youngboy-never-broke-again-michael-jackson-comparisons"
  },
  {
    "title": "Features | BY Complex Staff The Best Rapper Alive, Every Year Since 1979",
    "image": 19,
    "url": "https://www.complex.com/music/a/complexstaff3/the-best-rapper-alive-every-year-since-1979"
  },
  {
    "title": "News | BY Trey Alston NBA YoungBoy's MASA Tour on Course to Be One of Rap's Highest Grossing Ever",
    "image": 20,
    "url": "https://www.complex.com/music/a/treyalston/nba-youngboy-masa-tour-highest-grossing"
  }
];
export const artists = [
  {
    "name": "Sheck Wes",
    "image": 21,
    "url": "https://www.complex.com/shop/artists/Sheck%20Wes"
  },
  {
    "name": "Ski Mask The Slump God",
    "image": 22,
    "url": "https://www.complex.com/shop/artists/Ski%20Mask%20The%20Slump%20God"
  },
  {
    "name": "Lil Tecca",
    "image": 23,
    "url": "https://www.complex.com/shop/artists/Lil%20Tecca"
  },
  {
    "name": "Wale",
    "image": 24,
    "url": "https://www.complex.com/shop/artists/Wale"
  },
  {
    "name": "Migos",
    "image": 25,
    "url": "https://www.complex.com/shop/artists/Migos"
  },
  {
    "name": "Kid Cudi",
    "image": 26,
    "url": "https://www.complex.com/shop/artists/Kid%20Cudi"
  },
  {
    "name": "Lil Wayne",
    "image": 27,
    "url": "https://www.complex.com/shop/artists/Lil%20Wayne"
  },
  {
    "name": "City Morgue",
    "image": 28,
    "url": "https://www.complex.com/shop/artists/City%20Morgue"
  },
  {
    "name": "GELO",
    "image": 29,
    "url": "https://www.complex.com/shop/artists/GELO"
  },
  {
    "name": "Gunna",
    "image": 30,
    "url": "https://www.complex.com/shop/artists/Gunna"
  }
];

const complex = 'https://www.complex.com';
export type ShopMenuLink = { label: string; href: string };
export type ShopMenu = ShopMenuLink & { groups: { title: string; links: ShopMenuLink[] }[] };
const shopLink = (label: string, path: string): ShopMenuLink => ({ label, href: `${complex}${path}` });
const slug = (value: string) => value.toLowerCase().replace(/®/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const categoryPaths: Record<string, Record<string, string>> = {
  mens: {
    'New Arrivals': '/shop/category/clothing?department=Men%2CUnisex&sortBy=latest',
    Hoodies: '/shop/category/tops/hoodies?department=Men%2CUnisex&sortBy=latest',
    Jerseys: '/shop/category/tops/jerseys',
    'T-Shirts': '/shop/category/tops/t-shirts?department=Men%2CUnisex&sortBy=latest',
    Bottoms: '/shop/category/clothing/bottoms?department=Men%2CUnisex&sortBy=latest',
    Accessories: '/shop/category/accessories?department=Men%2CUnisex&sortBy=latest',
    Footwear: '/shop/category/footwear',
    'Shop All': '/shop/category/clothing?department=Men%2CUnisex',
  },
  womens: {
    'New Arrivals': '/shop/category/clothing?department=Women&sortBy=latest',
    Outerwear: '/shop/category/outerwear/jackets?department=Women&sortBy=latest',
    Tops: '/shop/category/clothing/tops?department=Women&sortBy=latest',
    Hoodies: '/shop/category/tops/hoodies?department=Women&sortBy=latest',
    Bottoms: '/shop/category/clothing/bottoms?department=Women&sortBy=latest',
    Dresses: '/shop/category/dresses?sortBy=latest',
    Footwear: '/shop/category/footwear?department=Women%2CUnisex',
    'Shop All': '/shop/collections/new?department=Women%2CUnisex',
  },
  new: {
    Outerwear: '/shop/category/outerwear?sortBy=latest',
    Hoodies: '/shop/category/tops/hoodies?sortBy=latest',
    Jerseys: '/shop/category/tops/jerseys?sortBy=latest',
    'T-Shirts': '/shop/category/tops/T-Shirts?sortBy=latest',
    Bottoms: '/shop/category/bottoms?sortBy=latest',
    Accessories: '/shop/category/accessories?sortBy=latest',
    Footwear: '/shop/category/footwear?sortBy=latest',
    'Shop All': '/shop/collections/new',
  },
  footwear: {
    'New Arrivals': '/shop/category/footwear?sortBy=latest',
    Sneakers: '/shop/category/footwear/sneakers',
    Boots: '/shop/category/footwear/boots?sortBy=latest',
    Sandals: '/shop/category/footwear/sandals?sortBy=latest',
    Clogs: '/shop/category/footwear/clogs?sortBy=latest',
    Loafers: '/shop/category/footwear/loafers?sortBy=latest',
    Mules: '/shop/category/footwear/mules?sortBy=latest',
    'Shop All': '/shop/category/footwear',
  },
  accessories: {
    'New Arrivals': '/shop/category/accessories?sortBy=latest',
    Headwear: '/shop/category/accessories/headwear',
    Sunglasses: '/shop/category/accessories/sunglasses',
    Jewelry: '/shop/category/accessories/jewelry',
    Belts: '/shop/category/accessories/belts',
    Bags: '/shop/category/accessories/bags',
    Socks: '/shop/category/accessories/socks',
    'Shop All': '/shop/category/accessories',
  },
  music: {
    'Apparel & Merchandise': '/shop/collections/music-apparel-merch',
    Bundles: '/shop/category/music/bundles',
    Cassettes: '/shop/category/music/cassettes',
    CDs: '/shop/category/music/cds',
    'ESCO Trading Cards': '/shop/brands/esco',
    'Record Labels': '/shop/labels',
    Vinyl: '/shop/category/music/vinyl',
    'Shop All': '/shop/collections/music-all',
  },
  lifestyle: {
    'New Arrivals': '/shop/category/lifestyle?sortBy=latest',
    'Complex Exclusives': '/shop/category/lifestyle/complex-exclusives',
    Art: '/shop/category/lifestyle/art',
    Collectibles: '/shop/category/lifestyle/collectibles',
    'Books & Magazines': '/shop/category/lifestyle/books-and-magazines',
    Home: '/shop/category/lifestyle/home',
    'Trading Cards': '/shop/category/lifestyle/trading-cards',
    'Shop All': '/shop/category/lifestyle',
  },
  sale: {
    Clothing: '/shop/category/outerwear/jackets?isOnSale=true',
    Outerwear: '/shop/category/outerwear?isOnSale=true',
    Hoodies: '/shop/category/hoodies?isOnSale=true',
    'T-Shirts': '/shop/category/tops/t-shirts?isOnSale=true',
    Bottoms: '/shop/category/bottoms?isOnSale=true',
    Footwear: '/shop/category/footwear?isOnSale=true',
    Accessories: '/shop/category/accessories?isOnSale=true',
    Collectibles: '/shop/category/collectibles/designer-toys?isOnSale=true',
    Sweatshirts: '/shop/category/tops/sweatshirts?isOnSale=true',
    Shirts: '/shop/category/tops/shirts?isOnSale=true',
    Jeans: '/shop/category/bottom/jeans?isOnSale=true',
    Headwear: '/shop/category/accessories/headwear?isOnSale=true',
    Jewelry: '/shop/category/accessories/jewelry?isOnSale=true',
    Music: '/shop/category/music?isOnSale=true',
    Vinyl: '/shop/category/music/vinyl?isOnSale=true',
    'Shop All': '/shop/category/sale?isOnSale=true',
  },
};
const categoryLink = (label: string, category: string) => shopLink(label, categoryPaths[category]?.[label] ?? `/shop/category/${category}`);
const brandPaths: Record<string, string> = {
  'A Bathing Ape®': '/shop/brands/A%20Bathing%20Ape',
  'Complex Core': '/shop/brands/Complex',
  'Mitchell & Ness': '/shop/brands/Mitchell%20%26%20Ness/products',
  'Mitchell & Ness + NBA': '/shop/brands/Mitchell%20%26%20Ness/products',
  PUMA: '/shop/brands/Puma/products',
  'Rolling Loud': '/shop/brands/Rolling%20Loud',
  'The North Face': '/shop/brands/The%20North%20Face/products',
  'We Are Righteous': '/shop/brands/We%20Are%20Righteous',
  'Aest Studios': '/shop/brands/Aest-Studios',
  EMPATH: '/shop/brands/EMPATH',
  GEEL: '/shop/brands/Geel',
  MOWALOLA: '/shop/brands/Mowalola',
  NiiHai: '/shop/brands/NiiHai',
  'Samaria Leah': '/shop/brands/Samaria-Leah',
  adidas: '/shop/brands/adidas',
  Barriers: '/shop/brands/barriers',
  'Off-White': '/shop/brands/off-white',
  On: '/shop/brands/On',
  'New Balance': '/shop/brands/New%20Balance/products?sortBy=latest',
  Timberland: '/shop/brands/timberland/products?sortBy=latest',
  Vans: '/shop/brands/vans/products?sortBy=latest',
  ASICS: '/shop/brands/ASICS',
  'Ed Hardy': '/shop/brands/Ed%20Hardy',
  WWE: '/shop/brands/WWE/products',
  'Playboi Carti': '/shop/artists/Playboi%20Carti',
  Brigade: '/shop/brands/Brigade',
  Vital: '/shop/brands/Vital',
  Oakley: '/shop/brands/oakley/products?sortBy=latest',
  'Alpinestars RSRV': '/shop/brands/Alpinestars%20RSRV',
  'Ohana Hatake': '/shop/brands/Ohana%20Hatake',
  'Stolen Arts': '/shop/brands/Stolen%20Arts',
  'Vintage Frames Company': '/shop/brands/Vintage%20Frames%20Company',
  'Vintage Frame Company': '/shop/brands/Vintage%20Frames%20Company',
  'Birth Of Royal Child': '/shop/brands/Birth%20Of%20Royal%20Child',
  HOWSS: '/shop/brands/HOWSS',
  'Ryoko Rain': '/shop/brands/Ryoko%20Rain',
  'Organic Garmentz': '/shop/brands/Organic%20Garmentz',
  'PELLE PELLE': '/shop/brands/Pelle%20Pelle',
  'Saint Vanity': '/shop/brands/Saint%20Vanity',
  'Stile d’Amor Galleria': '/shop/brands/Stile%20De%20Amor%20Galleria',
  Arkyve: '/shop/brands/Arkyve',
  'B.B. Simon': '/shop/brands/B.B.%20Simon/products',
  'FAITH BY LUIS': '/shop/category/accessories?brands=Faith%20By%20Luis',
  'Ian Charms': '/shop/brands/Ian%20Charms',
  'Ray-Ban': '/shop/brands/Ray%20Ban',
  ASSOULINE: '/shop/brands/ASSOULINE',
  'BE@RBRICK': '/shop/brands/BE%40RBRICK',
  'ERG Media': '/shop/brands/ERG%20Media',
  'Plushie Love': '/shop/brands/Plushie%20Love',
  TASCHEN: '/shop/brands/Taschen',
  'THE SKATEROOM': '/shop/brands/THE%20SKATEROOM',
  ToyQube: '/shop/brands/Toyqube/products',
};
const brandLink = (label: string) => shopLink(label, brandPaths[label] ?? `/shop/brands/${encodeURIComponent(label)}`);
const collectionPaths: Record<string, string> = {
  'New Arrivals': '/shop/collections/new',
  'ATL Artists': '/collections/artists-of-atlanta',
  'Late Night Listens': '/shop/collections/late-night-listens',
  'Music Festival Edit': '/shop/collections/music-festival-edit',
  'West Coast Anthems': '/shop/collections/west-coast-anthems',
  'Hip-Hop': '/shop/collections/hip-hop-1',
  'K-POP': '/shop/collections/k-pop',
  'R&B': '/shop/collections/r-b',
  'YEAT: ZINE': '/shop/products/complex-yeat-zine',
  '003 THE INFLUENCE ISSUE': '/shop/products/complex-magazine-issue-no-3',
  '002 THE INNOVATION ISSUE': '/shop/products/complex-magazine-issue-2',
  '001 THE IRL ISSUE': '/shop/products/complex-magazine-issue-no-1-fall-winter-2024-the-irl-issue',
};
const collectionLink = (label: string) => label === 'ATL Artists'
  ? { label, href: 'https://checkout.complex.com/collections/artists-of-atlanta' }
  : shopLink(label, collectionPaths[label] ?? `/shop/collections/${slug(label)}`);
const artistPaths: Record<string, string> = { 'Charlie XCX': '/shop/artists/Charli%20XCX' };
const artistLink = (label: string) => shopLink(label, artistPaths[label] ?? `/shop/artists/${encodeURIComponent(label)}`);
const links = (labels: string[], create: (label: string) => ShopMenuLink) => labels.map(create);
const categories = (labels: string[], category: string) => links(labels, label => categoryLink(label, category));
const brands = (labels: string[]) => links(labels, brandLink);
const collections = (labels: string[]) => links(labels, collectionLink);
const artistsMenuLinks = (labels: string[]) => links(labels, artistLink);
const shopAll = (category: string) => categoryLink('Shop All', category);
export const shopMenus: ShopMenu[] = [
  { ...shopLink('EXPLORE', '/'), groups: [{ title: 'Explore', links: [
    { label: 'Alice Hollywood', href: 'https://www.complex.com/style/a/mike-destefano/shane-gonzales-alice-hollywood-complexcon-2026' },
    { label: 'Air Jordan 2026', href: 'https://www.complex.com/sneakers/a/victor-deng/air-jordan-2026-release-dates' },
    { label: '100 Hottest Rappers', href: 'https://www.complex.com/music/a/dimassanfiorenzo/best-rappers-right-now' },
    { label: 'Sneaker Shopping', href: 'https://www.complex.com/v/sneaker-shopping' },
  ] }] },
  { ...shopLink('FEATURED', '/shop/collections/featured'), groups: [{ title: 'Featured', links: brands(['Playboi Carti', 'Mitchell & Ness + NBA', 'Nike', 'Air Max Metro', 'Crocs', 'Roy', 'Vans', 'Harris Tweed®']) }] },
  { ...shopLink('MENS', '/shop/category/clothing?department=Men%2CUnisex'), groups: [
    { title: 'Shop By', links: [...categories(['New Arrivals', 'Hoodies', 'Jerseys', 'T-Shirts', 'Bottoms', 'Accessories', 'Footwear'], 'mens'), shopAll('mens')] },
    { title: 'Featured Brands', links: [...brands(['A Bathing Ape®', 'Complex Core', 'Mitchell & Ness', 'PUMA', 'Rolling Loud', 'The North Face', 'We Are Righteous']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Complex Curated', links: [...collections(['Anime', 'Baseball', 'Basketball', 'Camo', 'Comics', 'Running', 'Workwear']), shopLink('Shop All', '/shop/collections/trends')] },
  ] },
  { ...shopLink('WOMENS', '/shop/collections/womens'), groups: [
    { title: 'Shop By', links: [...categories(['New Arrivals', 'Outerwear', 'Tops', 'Hoodies', 'Bottoms', 'Dresses', 'Footwear'], 'womens'), shopAll('womens')] },
    { title: 'Featured Brands', links: [...brands(['Aest Studios', 'EMPATH', 'GEEL', 'Miaou', 'MOWALOLA', 'NiiHai', 'Samaria Leah']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Complex Curated', links: [...collections(['Anime', 'Basketball', 'Camo', 'Comics', 'Jerseys', 'Running', 'Workwear']), shopLink('Shop All', '/shop/collections/trends')] },
  ] },
  { ...shopLink('NEW', '/shop/collections/new'), groups: [
    { title: 'New This Week', links: [...categories(['Outerwear', 'Hoodies', 'Jerseys', 'T-Shirts', 'Bottoms', 'Accessories', 'Footwear'], 'new'), shopAll('new')] },
    { title: 'Latest Brands', links: [...brands(['adidas', 'Barriers', 'Off-White', 'On', 'New Balance', 'Timberland', 'Vans']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Latest Music', links: [...artistsMenuLinks(['aespa', 'Ariana Grande', 'Charlie XCX', 'Hole', 'Jennie', 'KATSEYE', 'Ken Carson']), shopLink('Shop All', '/shop/collections/music-all')] },
  ] },
  { ...shopLink('BRANDS', '/shop/brands'), groups: [
    { title: 'New This Week', links: [...brands(['Brigade', 'Oakley', 'On', 'New Balance', 'Timberland', 'Vans', 'Vital']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Featured', links: [...brands(['adidas', 'ASICS', 'Complex Core', 'Ed Hardy', 'Nike', 'Off-White', 'WWE']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Trending', links: [...brands(['Alpinestars RSRV', 'C2H4', 'Crocs', 'Ohana Hatake', 'RTA', 'Stolen Arts', 'Vintage Frames Company']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Emerging', links: [...brands(['Birth Of Royal Child', 'HOWSS', 'Ryoko Rain', 'Organic Garmentz', 'PELLE PELLE', 'Saint Vanity', 'Stile d’Amor Galleria']), shopLink('Shop All', '/shop/brands')] },
  ] },
  { ...shopLink('FOOTWEAR', '/shop/category/footwear'), groups: [
    { title: 'Shop By', links: [...categories(['New Arrivals', 'Sneakers', 'Boots', 'Sandals', 'Clogs', 'Loafers', 'Mules'], 'footwear'), shopAll('footwear')] },
    { title: 'Featured Brands', links: [...brands(['adidas', 'ASICS', 'Nike', 'New Balance', 'On', 'Timberland', 'Vans']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Anima', links: categories(['Footwear'], 'footwear') },
  ] },
  { ...shopLink('ACCESSORIES', '/shop/category/accessories'), groups: [
    { title: 'Shop By', links: [...categories(['New Arrivals', 'Headwear', 'Sunglasses', 'Jewelry', 'Belts', 'Bags', 'Socks'], 'accessories'), shopAll('accessories')] },
    { title: 'Featured Brands', links: [...brands(['Arkyve', 'B.B. Simon', 'FAITH BY LUIS', 'Ian Charms', 'Ray-Ban', 'Stolen Arts', 'Vintage Frame Company']), shopLink('Shop All', '/shop/brands')] },
  ] },
  { ...shopLink('MUSIC', '/shop/collections/music-all'), groups: [
    { title: 'Shop By', links: [...categories(['Apparel & Merchandise', 'Bundles', 'Cassettes', 'CDs', 'ESCO Trading Cards', 'Record Labels', 'Vinyl'], 'music'), shopLink('Shop All', '/shop/collections/music-all')] },
    { title: 'Featured Artists', links: [...artistsMenuLinks(['Billie Eilish', 'Clipse', 'Ken Carson', 'Justin Bieber', 'Kanye West', 'Playboi Carti', 'The Weeknd']), shopLink('Shop All', '/shop/artists')] },
    { title: 'Complex Curated', links: [...collections(['00pium', 'ATL Artists', 'New York State of Mind', 'Oldies', 'Late Night Listens', 'Music Festival Edit', 'West Coast Anthems']), shopLink('Shop All', '/shop/collections/music-all')] },
    { title: 'Genre', links: [...collections(['Country', 'Hip-Hop', 'K-POP', 'Latin', 'R&B', 'Rock', 'Pop']), shopLink('Shop All', '/shop/collections/music-all')] },
  ] },
  { ...shopLink('LIFESTYLE', '/shop/category/lifestyle'), groups: [
    { title: 'Shop By', links: [...categories(['New Arrivals', 'Complex Exclusives', 'Art', 'Collectibles', 'Books & Magazines', 'Home', 'Trading Cards'], 'lifestyle'), shopAll('lifestyle')] },
    { title: 'Featured Brands', links: [...brands(['ASSOULINE', 'BE@RBRICK', 'ERG Media', 'Plushie Love', 'TASCHEN', 'THE SKATEROOM', 'ToyQube']), shopLink('Shop All', '/shop/brands')] },
    { title: 'Complex Magazine', links: [...collections(['YEAT: ZINE', '003 THE INFLUENCE ISSUE', '002 THE INNOVATION ISSUE', '001 THE IRL ISSUE']), shopLink('Shop All', '/shop/category/lifestyle')] },
  ] },
  { ...shopLink('SALE', '/shop/collections/sale-all'), groups: [
    { title: 'Featured', links: categories(['Clothing', 'Outerwear', 'Hoodies', 'T-Shirts', 'Bottoms', 'Footwear', 'Accessories', 'Collectibles'], 'sale') },
    { title: 'All Sale', links: [...categories(['Sweatshirts', 'Shirts', 'Jeans', 'Headwear', 'Jewelry', 'Music', 'Vinyl'], 'sale'), shopLink('Shop All', '/shop/category/sale?isOnSale=true')] },
  ] },
];
