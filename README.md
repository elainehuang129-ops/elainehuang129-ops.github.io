# Yilin AI Portfolio

这是一个可直接发布到 GitHub Pages 的 AI 作品集网站，同时提供可编辑的演示浏览模式。

## 已包含内容

- 正式首页 `index.html`：滚动式作品集入口，集中展示代表项目、工具链、Prompt 与个人介绍。
- 演示模式 `presentation.html`：八页演示式作品集，内置浏览器编辑、拖拽、页面管理和 HTML 导出能力。
- 兼容入口 `classic-index.html`：自动跳转到正式首页，保留旧访问地址。
- 八个首页展示的脱敏案例详情页，另保留一个既有工作流恢复详情页。
- 写作模板：`templates/project-case-template.md`，用于后续添加新作品。

## 演示模式的浏览与修改

从首页点击“打开可编辑演示”，或直接打开 `presentation.html`。

- 使用方向键、空格或鼠标滚轮切换页面。
- 按 `E` 进入编辑模式；点击文字后可直接修改内容。
- 编辑模式下拖动对象左侧把手可移动内容，选中对象后可调整大小。
- 在编辑模式下按 `P` 可快速打开或关闭“页面”面板。
- 鼠标移至左上角可打开“页面”“保存”“添加元素”“撤销/重做”等控件。
- “页面”面板支持页面排序、复制、删除、新增以及导出独立 HTML。
- `Ctrl+S` 可将当前页面结构保存到浏览器本地。

## 发布前需要替换

1. 核对首页与演示模式中的公开联系方式是否为你希望展示的邮箱、GitHub 主页或公开社交链接。
2. 核对所有案例内容是否获得公开展示许可。
3. 如有公开 Demo 或 GitHub 项目，可在对应案例页补充链接。
4. 如需要更明确的个人身份介绍，可在“关于我”部分补充公开简历信息。

## GitHub Pages 发布步骤

1. 在 GitHub 创建仓库。个人主页仓库建议命名为 `你的GitHub用户名.github.io`。
2. 将本目录中的全部文件上传到仓库根目录。
3. 打开仓库 `Settings` -> `Pages`。
4. 在发布来源中选择从 `main` 分支根目录发布。
5. 发布完成后访问 `https://你的GitHub用户名.github.io/`。

如使用普通项目仓库，网站地址通常为：

```text
https://你的GitHub用户名.github.io/仓库名/
```

站点全部使用相对路径，因此两种发布地址均可正常工作。

## 目录结构

```text
ai-portfolio-site/
  index.html
  presentation.html
  classic-index.html
  assets/
    styles.css
    site.js
  projects/
    ai-daily-report.html
    risk-knowledge-base.html
    sql-trainer.html
    human-review-platform.html
    drug-knowledge-base.html
    disease-rule-review.html
    doc-formatter.html
    n8n-workflow.html
    workflow-recovery.html
  templates/
    project-case-template.md
```

## 本地查看

直接打开 `index.html` 即可浏览正式首页；需要拖拽编辑作品集时打开 `presentation.html`。为接近线上发布效果，也可以使用任意静态网页预览服务打开本目录。

## 公开发布提醒

网站展示的是工作相关 AI 能力，不应上传客户信息、内部业务数据、模型密钥、内部链接、未授权截图或可反推公司业务策略的资料。
