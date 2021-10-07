"use strict"; function _interopRequireDefault(obj)
 { return obj && obj.__esModule ? obj : { default: obj };
 }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, );

app.use(_express2.default.json());

app.get('/', (req, res) => {
    res.status(200).send({message: 'Aplicação online'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);