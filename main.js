var t = 0;
var x = 0;
var y = 0;
var z = 0;
const a = 0.8;
const b = 0.05;
function draw_circle(x,y,z,r){
    const n = 100;
    for(var i = 0; i < n; i++){
        var line = document.createElement('a-entity');
        line.setAttribute("id",`line${i}`);
        line.setAttribute("line", `start: ${x + r*Math.cos(((i-1)/n)*2*Math.PI)} ${y+r*Math.sin(((i-1)/n)*2*Math.PI)} ${z}; end: ${x+r*Math.cos((i/n)*2*Math.PI)} ${y+r*Math.sin((i/n)*2*Math.PI)} ${z}; color: #000000`);
        scene.append(line);
    }
}
function draw_circle2(x,y,z,r){
    const n = 100;
    for(var i = 0; i < n; i++){
        var line = document.createElement('a-entity');
        line.setAttribute("line", `start: ${x + r*Math.cos(((i-1)/n)*2*Math.PI)} ${y+r*Math.sin(((i-1)/n)*2*Math.PI)} ${z}; end: ${x+r*Math.cos((i/n)*2*Math.PI)} ${y+r*Math.sin((i/n)*2*Math.PI)} ${z}; color: #000000`);
        scene.append(line);
    }
}

function move_circle(x,y,z,r){
    const n = 100;
    for(var i = 0; i < n; i++){
        var line = document.getElementById(`line${i}`);
        line.setAttribute("line", `start: ${x + r*Math.cos(((i-1)/n)*2*Math.PI)} ${y+r*Math.sin(((i-1)/n)*2*Math.PI)} ${z}; end: ${x+r*Math.cos((i/n)*2*Math.PI)} ${y+r*Math.sin((i/n)*2*Math.PI)} ${z}; color: #000000`);
    }
}
var scene = document.querySelector('a-marker');
var circle_back = document.createElement("a-circle");
var circle_front = document.createElement("a-circle");
var bar = document.createElement('a-entity');
bar.setAttribute("line", `start:${1-b} 0 0; end: ${1-b+a} 0 0; color: #000000`);
draw_circle2(0,0,0,1);
draw_circle(1-b,0,0,b);
scene.append(bar);
var prePos = `${1-b+a} 0 0`
function render() {
    if(t < 2*Math.PI){
        t += 0.005;
        x = (1-b)*Math.cos(t)+a*Math.cos(t-t/b);
        y = (1-b)*Math.sin(t)+a*Math.sin(t-t/b);
        z = 0;
        var line = document.createElement('a-entity');
        line.setAttribute("line", `start: ${prePos}; end: ${x} ${y} ${z}; color: #136FFF`);
        requestAnimationFrame(render);
        scene.append(line);
        move_circle((1-b)*Math.cos(t),(1-b)*Math.sin(t),0,b);
        bar.setAttribute("line", `start:${(1-b)*Math.cos(t)} ${(1-b)*Math.sin(t)} 0; end: ${(1-b)*Math.cos(t)+a*Math.cos(t-t/b)} ${(1-b)*Math.sin(t)+a*Math.sin(t-t/b)} 0;`);     
        prePos = `${x} ${y} ${z}`;
    }
}
render();