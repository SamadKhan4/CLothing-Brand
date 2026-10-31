const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
export const images = {
 hero: photo('photo-1539109136881-3be0616acf4b'),
 story: photo('photo-1483985988355-763728e1935b'),
 banner: photo('photo-1469334031218-e382a71b716b'),
};
export const products = [
 {id:'linen-dress',name:'The Linen Midi Dress',category:'Dresses',price:3290,old:4290,tag:'BESTSELLER',image:photo('photo-1595777457583-95e059d581b8'),alt:photo('photo-1515372039744-b8f02a3ae446'),colors:['#d4c4ac','#332820','#e6ddd1'],description:'A little ease, a lot of elegance. A softly structured midi with a flattering waist and fluid skirt. Made for slow mornings and evenings that linger.'},
 {id:'relaxed-coord',name:'The Everyday Co-ord',category:'Co-ord Sets',price:4490,tag:'NEW',image:photo('photo-1483985988355-763728e1935b'),alt:photo('photo-1483985988355-763728e1935b'),colors:['#b89b7d','#ece4d8'],description:'Considered separates that work beautifully together. A relaxed silhouette with an easy drape, designed to take you effortlessly through the day.'},
 {id:'satin-shirt',name:'Soft Satin Shirt',category:'Tops & Shirts',price:2290,tag:'NEW',image:photo('photo-1551803091-e20673f15770'),alt:photo('photo-1551803091-e20673f15770'),colors:['#f0e6d9','#9a785e','#332820'],description:'A modern wardrobe essential with a gentle sheen and a beautifully fluid fit. Wear it loosely tucked or open over your favourite base layer.'},
 {id:'tailored-trouser',name:'The Tailored Wide Leg',category:'Bottom Wear',price:2990,old:3590,image:photo('photo-1509631179647-0177331693ae'),alt:photo('photo-1509631179647-0177331693ae'),colors:['#bca58b','#332820'],description:'Clean lines, a flattering high waist and room to move. An elevated everyday trouser with a full length wide leg.'},
 {id:'evening-dress',name:'The After Hours Dress',category:'Dresses',price:4990,tag:'NEW',image:photo('photo-1515372039744-b8f02a3ae446'),alt:photo('photo-1595777457583-95e059d581b8'),colors:['#a77c66','#332820'],description:'An occasion in itself. A flowing dress with considered details and a graceful silhouette, made for your most memorable evenings.'},
 {id:'cotton-kurta',name:'The Everyday Cotton Kurta',category:'Ethnic Wear',price:2690,tag:'NEW',image:photo('photo-1585487000160-6ebcfceb0d03'),alt:photo('photo-1585487000160-6ebcfceb0d03'),colors:['#eee2d3','#bd9277'],description:'A timeless longline silhouette in breathable cotton. Beautifully simple, with an easy fit for everyday wear.'},
 {id:'weekend-knit',name:'The Weekend Knit',category:'Casual Wear',price:2490,image:photo('photo-1434389677669-e08b4cac3105'),alt:photo('photo-1434389677669-e08b4cac3105'),colors:['#e6ddd1','#9a785e'],description:'Your favourite slow-day layer. Soft to the touch and relaxed in shape, this is comfort with a considered finish.'},
 {id:'city-blazer',name:'The City Blazer',category:'Tops & Shirts',price:5490,tag:'BESTSELLER',image:photo('photo-1485230895905-ec40ba36b9bc'),alt:photo('photo-1485230895905-ec40ba36b9bc'),colors:['#a3876d','#332820'],description:'An effortless layer with a softly tailored shoulder. Style with matching neutrals or your favourite denim for understated polish.'},
];
export const categories=['Dresses','Co-ord Sets','Tops & Shirts','Ethnic Wear','Casual Wear','Bottom Wear'];
export const money=n=>'₹'+n.toLocaleString('en-IN');
