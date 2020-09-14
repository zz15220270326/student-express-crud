/*
 * @Author: 张先生
 * @Date: 2020-09-14 13:58:59
 * @LastEditTime: 2020-09-14 20:00:13
 * @FilePath: \express-crud\students.js
 */
/*
  不关心业务
  主要存储操作数据的方法
*/
const fs = require('fs')

exports.show = (pathname, res, filename) => {
  fs.readFile(pathname,'utf8' , (err, data) => {
    if (err) {
      return res.status(500).send('System Error!')
    } else {
      let students = JSON.parse(data).students
      let fruits = JSON.parse(data).fruits
      res.render(filename, {
        students,
        fruits
      })
    }
  })
}

exports.add = (pathname, query, res) => {
  fs.readFile(pathname, (err, data) => {
    if (err) {
      return res.send('404 not found')
    } else {
      let database = JSON.parse(data.toString())
      database.students.push(query)
      fs.writeFile(pathname, JSON.stringify(database), (err) => {
        if (err) {
          return res.send('写入文件失败')
        } else {
          // 3. 发送响应
          res.redirect('/students')
        }
      })
    }
  })
}

exports.update = (pathname, number, query, res) => {
  fs.readFile(pathname, (err, data) => {
    if (err) {
      return res.send('404 not found')
    } else {
      // 获取学生对象
      let database = JSON.parse(data.toString())
      let students = database.students
      // 根据number获取要修改信息的学生 的index
      let student =  students.find((item) => {
        return item.number === number
      })
      let index = students.indexOf(student)
      // 将student替换成新加入的query
      students.splice(index, 1, query)
      // 写入文件
      fs.writeFile(pathname, JSON.stringify(database), (err) => {
        if (err) {
          return res.send('写入失败')
        } else {
          console.log('写入成功')
          // 更新成功后重定向回到students界面
          res.redirect('/students')
        }
      })
    }
  })
}

exports.delete = (pathname, number, res) => {
  fs.readFile(pathname, (err, data) => {
    if (err) {
      return res.send('404 not found')
    } else {
      // 获取学生对象
      let database = JSON.parse(data.toString())
      let students = database.students
      // 根据number获取要修改信息的学生 的index
      let student =  students.find((item) => {
      return item.number === number
      })
      let index = students.indexOf(student)
      // 删除index对应的内容
      students.splice(index, 1)
      // 重新写入
      fs.writeFile(pathname, JSON.stringify(database), (err) => {
        if (err) {
          console.log('写入失败');
        } else {
          console.log('写入成功')
          // 更新成功后重定向回到students界面
          res.redirect('/students')
        }
      })
    }
  })
}
