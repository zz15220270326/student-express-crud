# Express - crud

## 起步

- 初始化
- 模板处理

## 路由设计

| 请求方法  |       请求路径       | get 参数 |           post 参数              |       备注       |
|----------|---------------------|----------|--------------------------------|------------------|
| GET      | /students           |          |                                | 渲染首页         |
| GET      | /students/add       |          |                                | 渲染添加学生页面 |
| POST     | /students/add       |          | name、age、gender、hobbies     | 处理添加学生请求 |
| GET      | /students/update    | id       |                                | 渲染编辑页面     |
| POST     | /students/update    |          | id、name、age、gender、hobbies | 处理编辑请求     |
| GET      | /students/delete    | id       |                                | 处理删除请求     |
|          |                     |          |                                |                  |

<input type="hidden" name="id" value="{{ student.id }}">