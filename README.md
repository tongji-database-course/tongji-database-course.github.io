# 数据库系统原理课程网站

适用于 GitHub Pages 的静态网站，无第三方运行依赖。包含课程介绍、授课教师、19 份课程 PDF，以及课件目录搜索。

## 本地查看

直接打开 `index.html` 即可使用，PDF 链接与目录搜索也支持本地打开。

如需 HTTP 预览：安装 Node.js 后执行 `node serve.cjs`，访问终端显示的地址。

## 发布到 GitHub Pages

1. 创建 GitHub 仓库，例如 `database-course`。
2. 上传本目录中的网站文件及 `assets`、`slides` 目录，保留 `.nojekyll`。
3. 进入仓库 Settings → Pages，Source 选择 Deploy from a branch。
4. 选择 main 分支及 / (root)，保存并等待部署完成。
5. 访问 `https://你的用户名.github.io/database-course/`。

所有资源均使用相对路径，支持项目仓库网址和自定义域名。

## 学院标识

页眉 Logo 取自同济大学计算机科学与技术学院官网：`https://cs.tongji.edu.cn/images/sr-logo1.png`，本地保存为 `assets/images/tongji-cs-logo.png`。使用官网白色透明原图，在深蓝底色上等比例显示，点击可进入学院官网。

## 更新内容

- 修改课程介绍或教师资料：编辑 `build.cjs` 内的正文数据，再执行 `node build.cjs`，提交生成的 HTML。
- 替换课件：用同名 PDF 替换 `slides` 目录中的文件，执行 `node build.cjs` 更新大小信息。
- 新增课件：按 `Ch20-章节名称.pdf` 命名放进 `slides`，执行 `node build.cjs`。目录自动按章节数字排序。
- 调整样式：编辑 `assets/style.css`。

生成的三个 HTML 可以直接部署，不需要 GitHub Actions 或服务器端运行 Node.js。

教师简介与照片来自所提供的课程团队 PPT，邮箱及学院信息来自 Ch0 课件；课程目标来自课程介绍文本。学期、课时、地点和考核信息未提供，未作填充。
