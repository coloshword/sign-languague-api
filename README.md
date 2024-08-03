# sign-languague-api

Demo a simple endpoint. 

### Endpoint 

POST /translate: 
```
- content-type: josn
- Body: { "text": "Your text here" }
```

**web endpoint**: ``

**locally**: `http:localhost:3500/translate`

### JS example with axios
```javascript
axios.post('http://localhost:3500/translate', {
  text: 'Hello world'
})
```



