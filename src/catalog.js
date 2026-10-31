const assets = import.meta.glob('./Products/*.png', { eager: true, query: '?url', import: 'default' });
const image = name => assets[`./Products/${name}.png`];
export const instagram = 'https://www.instagram.com/tasmiya_trends/';
export const whatsapp = (name = '') => `https://wa.me/917066289827?text=${encodeURIComponent(name ? `Hi Tasmiya Trends, I'd like to know the price, available sizes and availability of ${name}.` : 'Hi Tasmiya Trends, I would like to enquire about your collection.')}`;
const catalog = [
 ['Black Noor Premium Embroidered Suit Set','Pakistani Suits','#191716','Black','An elegant black suit set featuring intricate light-toned embroidery and a richly patterned dupatta. Enquire for price, fabric details, available sizes and current stock.'],
 ['Lavender Grace Pleated Sleeve Abaya','Abayas','#9c80ba','Lavender','A flowing lavender abaya with statement pleated sleeves and a front zip detail. Contact us for pricing, measurements and availability.'],
 ['Maroon Rose Luxury Embroidered Suit Set','Pakistani Suits','#762837','Maroon','A maroon embroidered suit set with a coordinated occasion-ready look. Ask us for price, fabric information, sizes and available stock.'],
 ['Mauve Elegance Embroidered Abaya','Abayas','#967889','Mauve','A graceful mauve abaya with decorative embroidery. Message us for current pricing, fit information and availability.'],
 ['Midnight Blue Embroidered Pakistani Suit Set','Pakistani Suits','#242c48','Midnight Blue','A midnight blue Pakistani suit set with embroidered detailing. Enquire on WhatsApp for price, fabric, sizing and stock confirmation.'],
 ['Royal Plum Front Pleated Abaya','Abayas','#653a65','Plum','A rich plum abaya with front pleat detailing and a flowing silhouette. Contact Tasmiya Trends for pricing and available measurements.'],
 ['Silver Mist Premium Kaftan Abaya','Kaftans','#a4a3a5','Silver','A silver-toned kaftan abaya with an elegant drape. Enquire for price, fabric details, measurements and availability.'],
 ['Zoya Floral Embroidered Pakistani Suit Collection','Pakistani Suits','#8d3446','Collection colours','A floral embroidered Pakistani suit collection in rich, expressive shades. Message us to confirm the available colour, size and price before ordering.'],
];
export const products = catalog.map(([name,category,color,colorName,description], i) => ({ id:name.toLowerCase().replaceAll(/[^a-z0-9]+/g,'-'), name,category,price:null,tag:[1,3,4,6].includes(i)?'NEW':undefined,trending:[0,2,5,7].includes(i),image:image(name),alt:image(name),colors:[color],colorName,description }));
export const images = { hero:products[5].image, story:products[7].image, banner:products[4].image };
export const categories = ['Pakistani Suits','Abayas','Kaftans'];
export const categoryImages = [products[0].image,products[1].image,products[6].image];
export const money = n => n == null ? 'Price on request' : '₹'+n.toLocaleString('en-IN');
