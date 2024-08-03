# sign-languague-api

Demo a simple endpoint. 

### Build steps 
`git clone https://github.com/coloshword/sign-languague-api.git`
`npm install`
`npx tsc`

### Run step
`node ./dist/server.js`

### Endpoint 

POST /translate: 
```
- content-type: json
- Body: { "text": "Your text here" }
```

**web endpoint**: `http://34.207.80.47:3500/translate`

**locally**: `http:localhost:3500/translate`

### JS example with axios
```javascript
axios.post('http://localhost:3500/translate', {
  text: 'Hello world'
})
```



