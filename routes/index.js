var express = require('express')
var router = express.Router()

/* GET home page. */
router.post('/article', function (req, res, next) {
  console.log(req.body)
  const fs = require('fs')
  try {
    const data = fs.writeFileSync(
      'C:\\Users\\1\\Desktop\\test.txt',
      req.body.content,
      { flag: 'w+' }
    )
    //文件写入成功
    //读取出来
    const txtdata = fs.readFileSync('C:\\Users\\1\\Desktop\\test.txt', 'utf8')
    res.status(200).send(txtdata)
    return
  } catch (err) {
    console.log(err)
    res.status(404).send('写入失败')
    return
  }

  res.status(200).send('写入成功')
})

router.get('/readStudent', function (req, res, next) {
  const fs = require('fs')

  try {
    const data = fs.readFileSync('C:\\Users\\1\\Desktop\\student.txt', 'utf8')
    res.status(200).send(data)
    return
  } catch (err) {
    console.error(err)
    res.status(400).send('读取失败')
    return
  }
})
router.post('/saveScore', function (req, res) {
  const fs = require('fs')
  const content = req.body.content
  try {
    const data = fs.writeFileSync('C:\\Users\\1\\Desktop\\score.txt', content,{ flag: 'w+' })
    //文件写入成功。
    res.status(200).send('写入成功')
    return 
  } catch (err) {
    console.error(err)
    res.status(400).send('写入失败')
    return
  }
})

module.exports = router
