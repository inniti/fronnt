/**
 * @type MiddleConnector
 */
module.exports = {
    getTypeDefs() {
        return [];
    },
    getResolvers() {
        return [
            {
                Query: {
                    shop: (_, args, ctx) => {
                        return {
                            pricePrecision: 100
                        };
                    }
                }
            }
        ];
    }
};
