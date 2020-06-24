const returnName = {
    tags: ['TEST'],
    security: {Bearer: []},
    description: "こんにちはと挨拶してくれます",
    operationId: 'returnName',
    parameters: [
        {
            name:"name",
            description: "アナタの名前",
            in: "query",
            required: true,
            type: "string"
        }
    ],
    responses:{
        200:{
            description: "nameにJohnを指定した場合、挨拶を返す",
            examples:{
                result:{
                    message: "Hello Jon!"
                }
            }
        }
    }
};


export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        title: 'MAMANのAPI',
        version: '1.0.0'
    },
    components:{
        securitySchemes: {
            "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
            },
            Bearer: {
                type: "apiKey",
                name: "Authorization",
                in: "header"
            },
            JWT: {
                type: "apiKey",
                name: "token",
                in: "header"
            }

        }
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Local server'
        }
    ],
    tags: [
        {
            name: 'TEST'
        }
    ],
    paths: {
        "/hello": {
            "get": returnName
        }
    }
};

