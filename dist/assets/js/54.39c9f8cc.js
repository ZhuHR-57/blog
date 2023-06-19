(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{530:function(s,t,a){"use strict";a.r(t);var e=a(41),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("个人常用命令和遇到的问题总结")])]),s._v(" "),a("h2",{attrs:{id:"初次使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初次使用"}},[s._v("#")]),s._v(" 初次使用")]),s._v(" "),a("p",[a("code",[s._v("必须设置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git config --global user.name "xxx"\ngit config --global user.email "xxx@xxx.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("补充说明")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('查看用户名 ：git config user.name\n\n查看密码： git config user.password\n\n查看邮箱：git config user.email\n\n查看配置信息： $ git config --list  \n\n修改用户名\ngit config --global user.name "xxxx(新的用户名)"\n\n修改密码\ngit config --global user.password "xxxx(新的密码)"\n\n修改邮箱\ngit config --global user.email "xxxx@xxx.com(新的邮箱)"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"初次上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初次上传"}},[s._v("#")]),s._v(" 初次上传")]),s._v(" "),a("p",[a("strong",[s._v("第一步：建立 git 仓库，cd 到你的本地项目根目录下，执行 git 命令")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("第二步：去 github 上创建自己的 Repository，创建后的页面如下图所示：")])]),s._v(" "),a("p",[s._v("点击"),a("strong",[s._v(" Clone or download")]),s._v(" 按钮，复制弹出的地址 **"),a("a",{attrs:{href:"mailto:git@github.com"}},[s._v("git@github.com")]),s._v("😗**/test.git**，记得要用 SSH 的地址，尽量不要用 HTTPS 的地址，如上图所示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-a4e249c5e85f6f5ca6c56fc916c150ac_1440w.jpg",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("第三步：将本地的仓库关联到 github 上 --- 把上一步复制的地址放到下面")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git remote add origin git@github.com:***/test.git\n//git remote add origin http://xxx@localhost:5700/xxx-Design.git\n\n// 要是已经设置过了，想修改\ngit remote rm origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("第四步：上传 github 之前，要先 pull 一下，执行如下命令：")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git pull origin master\ngit pull origin master --allow-unrelated-histories\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("第五步：将项目的所有文件添加到仓库中")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("git add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("第六步：将 add 的文件 commit 到仓库")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git commit -m "注释语句"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("第七步，上传代码到 github 远程仓库")])]),s._v(" "),a("div",{staticClass:"language-Github line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"常用windows-dos命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用windows-dos命令"}},[s._v("#")]),s._v(" 常用 Windows DOS 命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dos ->cmd黑框命令")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dir = ls  查看文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /d D: 切换盘符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir = md file 创建文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rd file 删除文件夹，不询问(且文件夹必须为空)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rd /q/s file 一锅端，不询问")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rd /q/s file 一锅端，询问")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# copy 123.txt C:\\User\\Lido\\Desktop\\123 赋值文件到桌面的123文件夹中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# move 1234.txt C:\\User\\Lido\\Desktop\\123\\1234 将文件1234.txt移动到1234文件夹中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cls 清屏")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit 退出dos")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接在文件目录输入cmd就可打开对应文件夹的cmd窗口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程端口 netstat -ano")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终止进程    taskkill /pid 端口号 /F ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\t\t taskkill /im 应用名称 /F")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"遇到的错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的错误"}},[s._v("#")]),s._v(" 遇到的错误")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("Git 使用出现 git@github.com: Permission denied (publickey). 处理")])])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_43768946/article/details/90411154",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("解决 Git 中 fatal: refusing to merge unrelated histories")])])]),s._v(" "),a("p",[a("strong",[s._v("如果你是 git pull 或者 git push 报 fatal: refusing to merge unrelated histories")])]),s._v(" "),a("p",[a("strong",[s._v("git pull origin master --allow-unrelated-histories")])]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"3"}},[a("li",[s._v("! [rejected]        master -> master (non-fast-forward)"),a("br"),s._v("\nerror: failed to push some refs to 'github.com:ZhuHR-57/Learn-yolov5-Pytroch.git'"),a("br"),s._v("\nhint: Updates were rejected because the tip of your current branch is behind"),a("br"),s._v("\nhint: its remote counterpart. Integrate the remote changes (e.g."),a("br"),s._v("\nhint: 'git pull ...') before pushing again."),a("br"),s._v("\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.")])])]),s._v(" "),a("p",[s._v("出现问题的原因是，所以在 remote add 后不要着急 git add，一定要 git pull origin master，出现这个原因是因为你在码云创建的仓库有 ReadMe 文件，而本地没有，造成本地和远程的不同步")]),s._v(" "),a("p",[s._v("那我就强制上传覆盖远程文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push -f origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("ol",{attrs:{start:"4"}},[a("li",[s._v("git pull 报错：Auto Merge Failed; Fix Conflicts and Then Commit the Result.")])])]),s._v(" "),a("p",[s._v("方法一：如果我们确定远程的分支正好是我们需要的，而本地的分支上的修改比较陈旧或者不正确，那么可以直接"),a("strong",[s._v("丢弃本地分支内容")]),s._v("，运行如下命令 (看需要决定是否需要运行 git fetch 取得远程分支)：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reset --hard origin/master\nor\ngit reset --hard ORIG_HEAD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("方法二：我们不能丢弃本地修改，因为其中的某些内容的确是我们需要的，此时需要对 unmerged 的文件进行手动修改，"),a("strong",[s._v("删掉其中冲突的部分")]),s._v("，然后运行如下命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$:git add filename\n\n$:git commit -m "message"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("方法三：如果我们觉得合并以后的文件内容比价混乱，想要"),a("strong",[s._v("废弃这次合并")]),s._v("，回到合并之前的状态，那么可以运行如下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$:git reset --hard HEAD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("ol",{attrs:{start:"5"}},[a("li",[s._v("git 提交或克隆报错 fatal: unable to access")])])]),s._v(" "),a("p",[a("code",[s._v("第一步")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.proxy//取消http代理\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset https.proxy//取消https代理 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("第二步")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sjc04pap001files.storage.live.com/y4mVqGYtRhu5giSRaMU7SLJe3vwgFt0vzjnTYSQukKpuRfQG-GbMAs9vbVR0ZKxdYO1D4-ueWSuWpbB9OSio9-bDHPLBjKH_zVO5G-ViSM9LTOe0GkthJn4mIasdOs9TulVA52kWwoNY4BUgbGuE_DH7JMwbVH56O9VTlSgW-Yp5OQntAS9WBJG3YrAZNs2oveA?width=1413&height=1026&cropmode=none",alt:""}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意修改成自己的IP和端口号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy http://127.0.0.1:7890 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.proxy http://127.0.0.1:7890\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);