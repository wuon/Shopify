define({ "api": [  {    "type": "get",    "url": "/products",    "title": "Fetch all products, or all products in stock",    "examples": [      {        "title": "Example usage with axios:",        "content": "axios.get(`${BASE_URI}/products`);\naxios.get(`${BASE_URI}/products`, {\n  params: {\n    inStock: 'true',\n  },\n});",        "type": "js"      }    ],    "name": "_products",    "group": "products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "inStock",            "description": "<p>if true, returns all products in stock</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "[\n\n]",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/products.js",    "groupTitle": "products"  },  {    "type": "get",    "url": "/products/:id",    "title": "Fetch a specific product",    "examples": [      {        "title": "Example usage with axios:",        "content": "axios.get(`${BASE_URI}/products/1`);",        "type": "js"      }    ],    "name": "_products__id",    "group": "products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>the product's unique identifier</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "[\n\n]",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/products.js",    "groupTitle": "products"  }] });
