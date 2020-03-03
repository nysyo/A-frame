var scene = document.querySelector('a-scene');
var t = 0;
var x = 0;
var y = 0;
var z = 0;
const a = 0.8;
const b = 0.05;
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
        scene.appendChild(line);
        prePos = `${x} ${y} ${z}`;
    }
}
render();