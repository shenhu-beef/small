export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProdect = null;
            //循环判断新添加的商品是否已经在购物车中
            for (let item of context.state.cartList) {
                if (item.iid == payload.iid) {
                    oldProdect = item
                }
            }

            //判断oldProduct,如果为true，则证明购物车中已有该商品，该商品数量+1
            if (oldProdect) {
                context.commit('addCounter', oldProdect);
                resolve('当前商品数+1')
            } else {
                //反之，在购物车中添加该商品，数量为1
                payload.count = 1;
                // context.state.cartList.push(payload)
                context.commit('addToCart1', payload)
                resolve('添加了新的商品')
            }
        })
    }
}