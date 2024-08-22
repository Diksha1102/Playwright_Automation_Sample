import { test, expect } from '@playwright/test';
import fs from 'fs';
const { LoginPageObject } = require('../swaglabs_pom/pageobject_login');
const testdata1 = require('../test_data/test2.json')

testdata1.forEach((testdata) => {

  test('test for user - '+testdata.username,{
    tag: ['@login', '@smoke', '@e2e'],
  }, async ({ page, request }) => {
    await page.route('*/**/api/search/v2/multiple-query/uk', async route => {
      const json = {
        "products": {
            "urls": {},
            "query": "iphone",
            "paging": {
                "total": 31,
                "index": 0,
                "size": 48
            },
            "indexName": "prod_live_products_uk",
            "queryID": "7b1ace09d679fd101ac5613f06dd8ef4",
            "hits": [
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 5,
                            "currency": "GBP",
                            "text": "£5.00"
                        },
                        "current": {
                            "value": 5,
                            "currency": "GBP",
                            "text": "£5.00"
                        }
                    },
                    "objectId": "2694691",
                    "brand": "Skinnydip",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "SOLD_OUT",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "new in",
                                "label": "new in"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            },
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            }
                        ],
                        [
                            {
                                "name": "new in photo",
                                "label": "new in > new in photo"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            },
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "new in photo",
                                "label": "photo > new in photo"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": 4.4,
                        "count": 90,
                        "rounded": 4.4
                    },
                    "parent": {
                        "product": "2694690",
                        "partNumber": "10314550.P",
                        "model": "10314550",
                        "manufacturerModel": "3367983"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10314550?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10314550?op_sharpen=1",
                    "title": "ToyStory x Skinnydip Rex case iPhone 13",
                    "referenceUri": "/toystory-x-skinnydip-rex-case-iphone-13-10314550",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": true,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5>Stock sold out</h5>",
                    "adCardPoints": 15
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822199",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822198",
                        "partNumber": "10326883.P",
                        "model": "10326883",
                        "manufacturerModel": "5445175"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326883?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326883?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro beige",
                    "referenceUri": "/essentials-iphone-13-pro-chocolate-10326883",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": true,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822197",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822196",
                        "partNumber": "10326882.P",
                        "model": "10326882",
                        "manufacturerModel": "5445167"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326882?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326882?op_sharpen=1",
                    "title": "Essentials iPhone 13 beige",
                    "referenceUri": "/essentials-iphone-13-chocolate-10326882",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": true,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822195",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822194",
                        "partNumber": "10326881.P",
                        "model": "10326881",
                        "manufacturerModel": "5445159"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326881?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326881?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro beige",
                    "referenceUri": "/essentials-iphone-12-12-pro-chocolate-10326881",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": true,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822193",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822192",
                        "partNumber": "10326880.P",
                        "model": "10326880",
                        "manufacturerModel": "5445140"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326880?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326880?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr beige",
                    "referenceUri": "/essentials-iphone-11-xr-chocolate-10326880",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822191",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822190",
                        "partNumber": "10326879.P",
                        "model": "10326879",
                        "manufacturerModel": "5445132"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326879?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326879?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro chocolate",
                    "referenceUri": "/essentials-iphone-13-pro-black-10326879",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822189",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822188",
                        "partNumber": "10326878.P",
                        "model": "10326878",
                        "manufacturerModel": "5445124"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326878?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326878?op_sharpen=1",
                    "title": "Essentials iPhone 13 chocolate",
                    "referenceUri": "/essentials-iphone-13-black-10326878",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822187",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822186",
                        "partNumber": "10326877.P",
                        "model": "10326877",
                        "manufacturerModel": "5445116"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326877?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326877?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro chocolate",
                    "referenceUri": "/essentials-iphone-12-12-pro-black-10326877",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822185",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822184",
                        "partNumber": "10326876.P",
                        "model": "10326876",
                        "manufacturerModel": "5445108"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326876?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326876?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr chocolate",
                    "referenceUri": "/essentials-iphone-11-xr-black-10326876",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822183",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822182",
                        "partNumber": "10326875.P",
                        "model": "10326875",
                        "manufacturerModel": "5445094"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326875?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326875?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro black",
                    "referenceUri": "/essentials-iphone-13-pro-clear-10326875",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822181",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822180",
                        "partNumber": "10326874.P",
                        "model": "10326874",
                        "manufacturerModel": "5445086"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326874?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326874?op_sharpen=1",
                    "title": "Essentials iPhone 13 black",
                    "referenceUri": "/essentials-iphone-13-clear-10326874",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822179",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822178",
                        "partNumber": "10326873.P",
                        "model": "10326873",
                        "manufacturerModel": "5445078"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326873?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326873?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro black",
                    "referenceUri": "/essentials-iphone-12-12-pro-clear-10326873",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822177",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822176",
                        "partNumber": "10326872.P",
                        "model": "10326872",
                        "manufacturerModel": "5445051"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326872?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326872?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr black",
                    "referenceUri": "/essentials-iphone-11-xr-clear-10326872",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822175",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822174",
                        "partNumber": "10326871.P",
                        "model": "10326871",
                        "manufacturerModel": "5445043"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326871?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326871?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro clear",
                    "referenceUri": "/essentials-iphone-13-pro-clear-10326871",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822173",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822172",
                        "partNumber": "10326870.P",
                        "model": "10326870",
                        "manufacturerModel": "5445035"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326870?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326870?op_sharpen=1",
                    "title": "Essentials iPhone 13 clear",
                    "referenceUri": "/essentials-iphone-13-clear-10326870",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822171",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822170",
                        "partNumber": "10326869.P",
                        "model": "10326869",
                        "manufacturerModel": "5445027"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326869?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326869?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro clear",
                    "referenceUri": "/essentials-iphone-12-12-pro-clear-10326869",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822169",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822168",
                        "partNumber": "10326868.P",
                        "model": "10326868",
                        "manufacturerModel": "5445019"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326868?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326868?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr clear",
                    "referenceUri": "/essentials-iphone-11xr-clear-10326868",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822131",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822130",
                        "partNumber": "10326845.P",
                        "model": "10326845",
                        "manufacturerModel": "5444640"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326845?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326845?op_sharpen=1",
                    "title": "Essentials iPhone 14 Clear",
                    "referenceUri": "/essentials-iphone-14-clear-10326845",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822129",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822128",
                        "partNumber": "10326844.P",
                        "model": "10326844",
                        "manufacturerModel": "5444632"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326844?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326844?op_sharpen=1",
                    "title": "Essentials iPhone 14 Black",
                    "referenceUri": "/essentials-iphone-14-black-10326844",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822127",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822126",
                        "partNumber": "10326843.P",
                        "model": "10326843",
                        "manufacturerModel": "5444624"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326843?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326843?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro Green",
                    "referenceUri": "/essentials-iphone-13-pro-green-10326843",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822125",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822124",
                        "partNumber": "10326842.P",
                        "model": "10326842",
                        "manufacturerModel": "5444616"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326842?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326842?op_sharpen=1",
                    "title": "Essentials iPhone 13 Green",
                    "referenceUri": "/essentials-iphone-13-green-10326842",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822123",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822122",
                        "partNumber": "10326841.P",
                        "model": "10326841",
                        "manufacturerModel": "5444608"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326841?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326841?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro Green",
                    "referenceUri": "/essentials-iphone-12-12-pro-green-10326841",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822121",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822120",
                        "partNumber": "10326832.P",
                        "model": "10326832",
                        "manufacturerModel": "5444500"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326832?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326832?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr oat",
                    "referenceUri": "/essentials-iphone-11-xr-oat-10326832",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822119",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822118",
                        "partNumber": "10326840.P",
                        "model": "10326840",
                        "manufacturerModel": "5444594"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326840?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326840?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr Green",
                    "referenceUri": "/essentials-iphone-11-xr-green-10326840",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822115",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822114",
                        "partNumber": "10326839.P",
                        "model": "10326839",
                        "manufacturerModel": "5444586"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326839?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326839?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro Pink",
                    "referenceUri": "/essentials-iphone-13-pro-pink-10326839",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822113",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822112",
                        "partNumber": "10326838.P",
                        "model": "10326838",
                        "manufacturerModel": "5444578"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326838?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326838?op_sharpen=1",
                    "title": "Essentials iPhone 13 Pink",
                    "referenceUri": "/essentials-iphone-13-pink-10326838",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822111",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822110",
                        "partNumber": "10326837.P",
                        "model": "10326837",
                        "manufacturerModel": "5444551"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326837?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326837?op_sharpen=1",
                    "title": "Essentials iPhone 12/12 pro Pink",
                    "referenceUri": "/essentials-iphone-12-12-pro-pink-10326837",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822109",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822108",
                        "partNumber": "10326836.P",
                        "model": "10326836",
                        "manufacturerModel": "5444543"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326836?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326836?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr Pink",
                    "referenceUri": "/essentials-iphone-11-xr-pink-10326836",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822107",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822106",
                        "partNumber": "10326835.P",
                        "model": "10326835",
                        "manufacturerModel": "5444535"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326835?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326835?op_sharpen=1",
                    "title": "Essentials iPhone 13 pro oat",
                    "referenceUri": "/essentials-iphone-13-pro-oat-10326835",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822105",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "product_type": "phone case",
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822104",
                        "partNumber": "10326834.P",
                        "model": "10326834",
                        "manufacturerModel": "5444527"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326834?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326834?op_sharpen=1",
                    "title": "Essentials iPhone 13 oat",
                    "referenceUri": "/essentials-iphone-13-oat-10326834",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                },
                {
                    "ppuQuantity": null,
                    "pricing": {
                        "perUnit": "",
                        "regular": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        },
                        "current": {
                            "value": 4.99,
                            "currency": "GBP",
                            "text": "£4.99"
                        }
                    },
                    "objectId": "2822103",
                    "brand": "Essentials",
                    "attributes": {
                        "hasPriceAdvantageDeal": false,
                        "StockOverrideMessage": "STOCK_COMING_SOON",
                        "ProductReviewFlag": "1"
                    },
                    "variants": {
                        "colours": [],
                        "hasColours": false,
                        "hasSizes": false
                    },
                    "categories": [
                        [
                            {
                                "name": "sun & holiday",
                                "label": "sun & holiday"
                            },
                            {
                                "name": "electrical",
                                "label": "electrical"
                            },
                            {
                                "name": "photo",
                                "label": "photo"
                            }
                        ],
                        [
                            {
                                "name": "travel accessories",
                                "label": "sun & holiday > travel accessories"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "electrical > audio & visual tech"
                            },
                            {
                                "name": "audio & visual tech",
                                "label": "photo > audio & visual tech"
                            }
                        ],
                        [
                            {
                                "name": "phone & tablet accessories",
                                "label": "sun & holiday > travel accessories > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "electrical > audio & visual tech > phone & tablet accessories"
                            },
                            {
                                "name": "phone & tablet accessories",
                                "label": "photo > audio & visual tech > phone & tablet accessories"
                            }
                        ]
                    ],
                    "reviews": {
                        "average": null,
                        "count": null,
                        "rounded": null
                    },
                    "parent": {
                        "product": "2822102",
                        "partNumber": "10326833.P",
                        "model": "10326833",
                        "manufacturerModel": "5444519"
                    },
                    "images": {
                        "thumbnail": "https://boots.scene7.com/is/image/Boots/10326833?wid=45&hei=60&op_sharpen=1"
                    },
                    "offers": [],
                    "actions": {},
                    "iconUri": "https://boots.scene7.com/is/image/Boots/10326833?op_sharpen=1",
                    "title": "Essentials iPhone 11/xr clear",
                    "referenceUri": "/essentials-iphone-12-12-pro-oat-10326833",
                    "canAddToBasket": "yes",
                    "opticians": false,
                    "inStock": false,
                    "expressDelivery": false,
                    "hasOtherPromotion": false,
                    "channelPromotionalTextMap": {
                        "-1": [],
                        "-6": []
                    },
                    "productEspotStockOverrideMessage": "<h5> Stock coming soon </h5>",
                    "adCardPoints": 12
                }
            ],
            "facets": [
                {
                    "key": "brand",
                    "text": "Brand",
                    "type": "multiple",
                    "elements": [
                        {
                            "key": "Essentials",
                            "text": "Essentials",
                            "count": 30
                        },
                        {
                            "key": "Skinnydip",
                            "text": "Skinnydip",
                            "count": 1
                        }
                    ]
                },
                {
                    "key": "currentPrice",
                    "text": "Price range",
                    "type": "priceRange",
                    "minimum": 4.99,
                    "maximum": 5
                },
                {
                    "key": "product_type",
                    "text": "Product type",
                    "type": "multiple",
                    "elements": [
                        {
                            "key": "phone case",
                            "text": "Phone case",
                            "count": 22
                        }
                    ]
                },
                {
                    "key": "category",
                    "text": "Category",
                    "type": "hierarchy",
                    "elements": [
                        {
                            "key": "electrical",
                            "text": "Electrical",
                            "count": 31,
                            "children": [
                                {
                                    "key": "audio & visual tech",
                                    "text": "Audio & visual tech",
                                    "count": 31,
                                    "children": [
                                        {
                                            "key": "phone & tablet accessories",
                                            "text": "Phone & tablet accessories",
                                            "count": 31
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "key": "photo",
                            "text": "Photo",
                            "count": 31,
                            "children": [
                                {
                                    "key": "audio & visual tech",
                                    "text": "Audio & visual tech",
                                    "count": 31,
                                    "children": [
                                        {
                                            "key": "phone & tablet accessories",
                                            "text": "Phone & tablet accessories",
                                            "count": 31
                                        }
                                    ]
                                },
                                {
                                    "key": "new in photo",
                                    "text": "New in photo",
                                    "count": 1
                                }
                            ]
                        },
                        {
                            "key": "sun & holiday",
                            "text": "Sun & holiday",
                            "count": 31,
                            "children": [
                                {
                                    "key": "travel accessories",
                                    "text": "Travel accessories",
                                    "count": 31,
                                    "children": [
                                        {
                                            "key": "phone & tablet accessories",
                                            "text": "Phone & tablet accessories",
                                            "count": 31
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "key": "new in",
                            "text": "New in",
                            "count": 1,
                            "children": [
                                {
                                    "key": "new in photo",
                                    "text": "New in photo",
                                    "count": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://www.boots.com/sitesearch?searchTerm=iphone');
    await page.pause();
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
  });

});



