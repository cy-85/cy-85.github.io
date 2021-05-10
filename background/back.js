<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>let canvasEle=document.getElementById('canvas');
//窗口内部宽度
canvasEle.width=window.innerWidth;
canvasEle.height=320;
let ctx=canvasEle.getContext('2d');
ctx.fillStyle='#fff';
//生命存储150个球体的数组
let circles = [];
//声明球体类
class Circle{
    constructor() {
     this.x=Math.floor(Math.random()*canvasEle.width);
    this.y=Math.floor(Math.random()*canvasEle.height);
    this.radius=Math.ceil(Math.random()*5)+3;
    this.xSpeed=Math.random()*2>1 ? Math.random()*1 : -Math.random()*1;
    this.ySpeed=Math.random()*2>1 ? Math.random()*1 : -Math.random()*1   
    }
};
//初始化 -- 绘制一帧

function init(){
   for( n=0; n<150;n++){
        /* console.log(circle.x,circle.y,circle.radius,0,2*Math.PI); */
     let circle=new Circle();
     circles.push(circle);
    ctx.beginPath();
    ctx.moveTo(circle.x,circle.y)
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx.fill();
 }
 console.log(circles);
}
//循环绘制动画帧
function animation(){
    //console.log(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx.clearRect(0,0,canvasEle.width,canvasEle.height);
    for(let n=0; n<150;n++){
     let circle = circles[n];
     circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    ctx.beginPath();
    ctx.moveTo(circle.x,circle.y);
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx.fill();
    if(circle.x > canvasEle.width - circle.radius || circle.x < 0){circle.xSpeed =- circle.xSpeed;}
    if(circle.y > canvasEle.height - circle.radius || circle.y < 0){circle.ySpeed = - circle.ySpeed;} 
    }
    connect();
   window. requestAnimationFrame(animation);

}
function connect(){
    for(let n=0;n<150;n++){
        for(let i=n+1;i<150;i++){
     let distance = Math.sqrt((circles[n].x - circles[i].x)*(circles[n].x - circles[i].x) + (circles[n].y - circles[i].y) * (circles[n].y - circles[i].y));

         /* let distance=Math.sqrt((circles[n].x-circles[i].x)*(circles[n].x-circles[i].x)-(circles[n].y-circles[i].y)*(circles[n].y-circles[i].y)); */
         
         if(distance <= 60){
             //console.log(distance);
             ctx.strokeStyle='#fff';
             ctx.beginPath();
             ctx.moveTo(circles[n].x,circles[n].y);
             ctx.lineTo(circles[i].x,circles[i].y);
             ctx.stroke();
         }
        }
    }
}
init();
animation();