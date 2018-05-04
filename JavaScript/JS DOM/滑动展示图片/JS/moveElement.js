function moveElement(elementID, final_x, final_y, interval) {//移动函数
    var element = document.getElementById(elementID);
    if (element.movement) {/*如果还存在前次没有运行结束的setTimeout，立刻清空！*/
        clearTimeout(element.movement);
    }
    if (!element.style.left) {//如果没有这个初始属性，则设置
        element.style.left = "0px";
    }
    if(element.style.position!="absolute")//如果没有设置他的position为absolute，则设置
        element.style.position="absolute";

    if (!element.style.top) {
        element.style.top = "0px";
    }
    var xpos = parseInt(element.style.left);//获得初始距离
    var ypos = parseInt(element.style.top);

    if (xpos == final_x && ypos == final_y)
        return true;
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos) / 10);//Math.ceil()向上取整函数，保证至少会向前移动1px
        xpos += dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x) / 10);//快速移动法
        xpos -= dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }
    element.style.left = xpos + "px";//将移动后的数据又返还回去
    element.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";//注意这里！不懂的有点多
    element.movement = setTimeout(repeat, interval);//间接性的执行这个函数,并且最好养成返回一个数据的好习惯，方便clearTimeout
}