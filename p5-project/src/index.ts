import * as p5 from 'p5';

export const sketch = (p: p5) => {
    let x = 0;
    p.setup = () => {
        p.createCanvas(400, 400);
    }

    p.draw = () => {
        p.background(220);
        p.ellipse(50,x + 50,80,80);
        x+=0.5;
    }

    p.mouseClicked = () => {
        console.log("uwu");
    }
}

export const myp5 = new p5(sketch, document.body);