.
├── package.json  包含插件和插件集
├── .umirc.ts     配置文件
├── .env          环境变量
├── dist          umi build 生成项目目录     
├── mock          存储mock文件
├── public        此目录下所有文件会被copy到输出路径
└── src
    ├── .umi                    临时文件路径
    ├── layouts/index.tsx       约定路由时的全局布局文件
    ├── pages                   所有路由组件
        ├── index.less
        └── index.tsx
    └── app.ts                  运行时配置文件
