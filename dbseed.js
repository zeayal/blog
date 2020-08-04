// 链接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const Cat = mongoose.model('Cat', {name: String})
const wangcai = new Cat({name: '旺财'});
wangcai.save().then(() => {
  console.log('wang')
});