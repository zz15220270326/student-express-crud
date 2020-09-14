/*
 * @Author: 张先生
 * @Date: 2020-09-14 13:59:01
 * @LastEditTime: 2020-09-14 20:04:31
 * @FilePath: \express-crud\router\index.js
 */
// const fs = require('fs')
const express = require('express')

const students = require('../students')
// 1
const router = express.Router()

// 2
// 2.1 default-page
router.get('/', (req, res) => {
  res.redirect('/students')
})
router.get('/students', (req, res) => {
  students.show('./data/db.json', res, 'index.html')
})

// 2.2 add-students-page
router.get('/students/add', (req, res) => {
  res.render('add.html')
})
router.post('/students/add', (req, res) => {
  // console.log(req.body)
  // 1. 获取表单数据
  let query = req.body
  // 2. 处理数据  // 3. 响应并重定向
  students.add('./data/db.json', query, res)
  // fs.writeFile('./data/db.json',',' + query, )
})

// 2.3 update-students-page
/* 获取被选中的学生的id */
let studentNumber = ''
router.get('/students/update', (req, res) => {
  studentNumber = req.query.number
  res.render('update.html')
})
router.post('/students/update', (req, res) => {
  // 1. 获取表单数据
  let query = req.body
  // 发送响应
  students.update('./data/db.json', studentNumber, query, res)
})

// 2.4 delete-students-page
router.get('/students/delete', (req, res) => {
  studentNumber = req.query.number
  students.delete('./data/db.json', studentNumber, res)
})

// 3
module.exports = router