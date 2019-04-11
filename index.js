'use strict';

$(() => {
    let $img = $('.cover>div:nth-child(1)');
    $img.animate({opacity: 1}, 1500);
    let $text = $('.cover>div:nth-child(3)');
    $text.animate({opacity: 1}, 2000);
    let $smallText = $('.cover>div:last-child');
    $smallText.animate({opacity: 1}, 4000);
});

$(() => {
    //首页效果
    let $body = $('body');
    $body.click((e) => {
        let $tar = $(e.target);
        $body.html(`
        <div class="backgroundImg"></div>
    <div class="container">
        <div class="resumeTitle row"><div class="col-xs-12">个人简历</div></div>
        <div class="main-content row">
            <div class="content-margin col-xs-12 col-md-8 col-md-offset-2 row">
                <div class="person-message col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">基本信息 | &#xe60c;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-md-6 col-xs-12"><span>姓名：</span><span>周源</span></div>
                        <div class="col-md-6 col-xs-12"><span>性别：</span><span>男</span></div>
                        <div class="col-md-6 col-xs-12"><span>毕业院校：</span><span>广州大学</span></div>
                        <div class="col-md-6 col-xs-12"><span>名族：</span><span>汉</span></div>
                        <div class="col-md-6 col-xs-12"><span>住址：</span><span>广州番禺</span></div>
                        <div class="col-md-6 col-xs-12"><span>学历：</span><span>本科</span></div>
                        <div class="col-md-6 col-xs-12"><span>联系电话：</span><span>13129860933</span></div>
                        <div class="col-md-6 col-xs-12"><span>出生日期：</span><span>1997.09.26</span></div>
                        <div class="col-md-6 col-xs-12"><span>邮箱：</span><span>564165781@qq.com</span></div>
                    </div>

                </div>
                <div class="major-skill col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">专业技能 | &#xe649;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-md-6 col-xs-12"><span>HTML+CSS</span><span>（符合设计图要求）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Javascript</span><span>（理解原理，DOM，BOM）</span></div>
                        <div class="col-md-6 col-xs-12"><span>JQuery</span><span>（在js的基础上，非常喜欢用）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Bootstrap</span><span>（一般使用流式布局配合C3的媒体查询）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Echarts</span><span>（看过相关文档，并有一定练习）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Less</span><span>（使css代码思路更清晰）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Vue</span><span>（最常使用的框架）</span></div>
                        <div class="col-md-6 col-xs-12"><span>PHP</span><span>（熟练对接）</span></div>
                        <div class="col-md-6 col-xs-12"><span>MySql</span><span>（熟练DCL，DML，DQL）</span></div>
                        <div class="col-md-6 col-xs-12"><span>NodeJS</span><span>（熟悉服务器搭建与前后端对接）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Python</span><span>（熟悉基础语法+入门爬虫）</span></div>
                        <div class="col-xs-12">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
                        <div class="col-md-6 col-xs-12"><span>PS</span><span>（个人项目的UI和图片处理）</span></div>
                        <div class="col-md-6 col-xs-12"><span>AE</span><span>（处理视频特效）</span></div>
                        <div class="col-md-6 col-xs-12"><span>VEGAS</span><span>（最常用的视频拼接工具）</span></div>
                        <div class="col-md-6 col-xs-12"><span>SAI</span><span>（配合数位板进行相关创作）</span></div>
                        <div class="col-md-6 col-xs-12"><span>PR</span><span>（配合AE使用，了解）</span></div>
                        <div class="col-md-6 col-xs-12"><span>CDR</span><span>（出过一本刊物）</span></div>
                        <div class="col-xs-12">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
                        <div class="col-md-6 col-xs-12"><span>ETC4</span><span></span></div>
                        <div class="col-md-6 col-xs-12"><span>基金从业资格</span><span></span></div>
                        <div class="col-xs-12">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
                        <div class="col-md-6 col-xs-12"><span>Angular</span><span>（正在学习）</span></div>
                        <div class="col-md-6 col-xs-12"><span>Rect</span><span>（将要学习）</span></div>
                        <div class="col-md-6 col-xs-12"><span>移动端APP</span><span>（将要学习）</span></div>
                        <div class="col-md-6 col-xs-12"><span>微信小程序</span><span>（将要学习）</span></div>
                    </div>

                </div>
                <div class="job-intention col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">求职意向 | &#xe696;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12"><span>WEB前端开发工程师</span><span></span></div>
                </div>
                <div class="project-experience col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">项目经历 | &#xe7a2;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12"><div class="col-xs-12"><span>学子商城购物网站</span><span>全栈开发（个人项目：HTML+CSS+JQuery+MySql+PHP）</span></div>
                        <div class="col-xs-12"><span>常平CPC漫协官网</span><span>全栈开发（个人项目：Vue+NodeJS+JQuery+MySql+PHP+LESS）</span></div>
                        <div class="col-xs-12"><span>个人简历</span><span>（HTML+CSS+JQuery+Bootstrap+LESS）</span></div></div>
                </div>
                <div class="hobby col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">兴趣爱好 | &#xe63c;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12"><div class="col-md-6 col-xs-12"><span>羽毛球</span><span></span></div>
                        <div class="col-md-6 col-xs-12"><span>NACG</span><span></span></div>
                        <div class="col-md-6 col-xs-12"><span>设计</span><span></span></div>
                        <div class="col-md-6 col-xs-12"><span>视频制作</span><span></span></div>
                        <div class="col-md-6 col-xs-12"><span>构思效果</span><span></span></div></div>
                </div>
                <div class="Self-evaluation col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">自我评价 | &#xe714;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12">
                    <p>学习能力强，有独自解决问题的能力，逻辑思维优秀。</p>
                    <p>团队意识强，担任过三年经济统计学心理健康卫生学会宣传部部长，指导并组织参加过多场协会大型活动。</p>
                    <p>责任心强，有一定强迫症，有良好的执行能力，能够全身心投入到工作中。</p>
                    <p>热爱编程行业，热爱前端与设计相关，关注相关公众号，主动学习新编程技术，并养成良好学习习惯。</p>
                    </div>
                </div>
                <div class="self-page col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">个人主页 | &#xe623;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12"><a href="https://space.bilibili.com/3048588" target="_blank">https://space.bilibili.com/3048588</a></div>
                </div>
                <div class="enclosure col-xs-10 col-xs-offset-1 row" >
                    <div class="tipStyle col-xs-12">
                        <div class="iconfont">作品附件 | &#xe600;</div>
                        <span class="iconfont">&#xe929;</span><span>............................</span>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/1.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/2.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/3.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/4.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/5.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/6.jpg" alt=""></div></div>
                        <div class="col-xs-12 col-md-3 showPicture"><div>点击查看大图</div><div><img src="./assets/7.png" alt="" style="margin-top:20px;"></div></div>
                    </div>
                </div>
            </div>

    </div>

    </div>
    <div class="picShow"><div class="showLg"><img src="" alt=""></div></div>
        `);
        $body.off('click');//注意清空body的事件
        $(() => {//更换页面元素完成后调用ready
            let $container = $('.container');
            $container.animate({opacity: 1}, 2000);
            let $pictureGrounp = $('.enclosure>div:nth-child(2)');
            let $showLg = $('.showLg');
            let $picShow = $('.picShow');
            // 鼠标移入预加载图片
            $pictureGrounp.on('mouseover', '.showPicture>div:first-child', (e) => {
                let $tar = $(e.target);
                let path = "./assets/enclosure/" + $tar.next().children().attr('src').slice(-5);
                $showLg.children().attr('src', path);
            });
            //鼠标点击mask出现并加载图片
            $pictureGrounp.on('click', '.showPicture>div:first-child', (e) => {
                let $tar = $(e.target);
                $picShow.show();
            });
            //出现大图随意点击消失
            $picShow.click((e) => {
                let $tar = $(e.target);
                $picShow.hide();
        });

        });
    });
});




