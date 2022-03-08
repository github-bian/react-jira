# 创建项目
```
npx create-react-app jira --template typescript
```
# 配置prettier
 [prettier中文网](https://www.prettier.cn/docs/precommit.html)

### 安装prettier
```
npm install --save-dev --save-exact prettier
```
### 创建配置文件
```
echo {}> .prettierrc.json
```
本地根目录下创建 .prettierignore 文件，用来过滤不格式话的文件，例如build coverage
 ### Pre-commit Hook
```
npx mrm@2 lint-staged
```
### 一般情况下会与自带的eslint造成冲突
```
cnpm i eslint-config-prettier -D
```
```
eslint配置文件中将prettier添加到extends中
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest",
            + "prettier"
        ]
    },
    格式化规则添加ts,tsx
      "lint-staged": {
        "*.{js,css,md,ts,tsx}": "prettier --write"
    }
```
---
# 配置json-server mock数据

### 安装json-server
```
cnpm i josn-server -D
```
### 根目录下创建 [__json_server_mock__]文件夹用来存放db.json文件
```
// db.json 用于设置造假数据的格式
{
    "users": []
}

```
### 为了方便将启用json-server的命令配置到packge.json中
```
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "prepare": "husky install",
        "json-server": "json-server 
        __json_server_mock__/db.json --watch"
    },

```