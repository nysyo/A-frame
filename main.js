var t = 0;
var x = 0;
var y = 0;
var z = 0;
const a = 0.8;
const b = 0.05;
const defalt = {
    x: 0,
    y: 1,
    z: 0
};
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
bar.setAttribute("line", `start:${1-b+defalt.x} ${defalt.y} ${defalt.z}; end: ${1-b+a+defalt.x} ${defalt.y} ${defalt.z}; color: #000000`);
draw_circle2(defalt.x,defalt.y,defalt.z,1);
draw_circle(1-b+defalt.x,defalt.y,defalt.z,b);
scene.append(bar);
var prePos = `${1-b+a+defalt.x} ${defalt.y} ${defalt.z}`
function render() {
    if(t < 2*Math.PI){
        t += 0.005;
        x = (1-b)*Math.cos(t)+a*Math.cos(t-t/b)+defalt.x;
        y = (1-b)*Math.sin(t)+a*Math.sin(t-t/b)+defalt.y;
        z = defalt.z;
        var line = document.createElement('a-entity');
        line.setAttribute("line", `start: ${prePos}; end: ${x} ${y} ${z}; color: #136FFF`);
        requestAnimationFrame(render);
        scene.append(line);
        move_circle((1-b)*Math.cos(t)+defalt.x,(1-b)*Math.sin(t)+defalt.y,defalt.z,b);
        bar.setAttribute("line", `start:${(1-b)*Math.cos(t)+defalt.x} ${(1-b)*Math.sin(t)+defalt.y} ${defalt.z}; end: ${(1-b)*Math.cos(t)+a*Math.cos(t-t/b)+defalt.x} ${(1-b)*Math.sin(t)+a*Math.sin(t-t/b)+defalt.y} ${defalt.z};`);     
        prePos = `${x} ${y} ${z}`;
    }
}
render();