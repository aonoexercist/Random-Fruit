function choice(items){
    let rand = Math.floor((Math.random() * items.length) );
    let check = items.some( val => {
        return val.qty > 0;
    });
    if(check){
        return ( items[rand].qty !== 0 ) ? items[rand] : choice(items) ;
    }else{
        return '';
    }
}

function remove(items, item){
    let check = items.some( val => {
        return val.qty > 0;
    });
    if(check){
        items.map( val => {
            if(val.pic === item.pic){
                val.qty = val.qty-1;
            }
        });
    }
    return items;
}

export {choice, remove};