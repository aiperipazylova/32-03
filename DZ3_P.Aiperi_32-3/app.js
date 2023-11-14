// Задача-1
var tags = ['li','div','li','p','h1','p','h1','div','div','li','h1','p','h1','d','br']
var tagsForFound = {}

for(var i = 0; i < tags.length; i++){
    var tag = tags[i]
    tagsForFound[tag] = (tagsForFound[tag] || 0) + 1;
}   
console.log(tagsForFound)


//Задача-2
var starbucks = {
  coffee: {
    americano: 'Classic Americano.',
    latte: 'Latte is a coffee drink made with espresso and steamed milk.',
    cappuccino:'Cappuccino is a coffee drink that consists of espresso, hot milk, and steamed milk foam.',
  },

  tea: {
    greentea: 'Green tea is a type of tea that is made from Camellia sinensis leaves and buds.',
    blacktea: 'Black tea is a type of tea that is more oxidized than green, oolong, and white teas.',
    chamomiletea: 'Chamomile tea is a herbal tea made from dried chamomile flowers.',
  }
}
var var1 = prompt('Заказ').toLowerCase();
console.log(var1);

if(starbucks.coffee[var1] !== undefined || starbucks.tea[var1] !== undefined) {
  console.log('Заказ принят!')
}else{
  console.log('error');
}





