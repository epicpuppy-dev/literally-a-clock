var elt = document.getElementById('clock');
var calculator = Desmos.GraphingCalculator(elt, {
    keypad: false, 
    graphpaper: true, 
    expressions: false,
    settingsMenu: false,
    zoomButtons: false,
    lockViewport: true,
    border: false,
    degreeMode: true,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false
});

calculator.setExpression({id: 'circle', latex: 'r=1', color: "black"});
calculator.setExpression({id: 'marklist', latex: 'a=\\left[0,\\frac{90}{3}...157.5\\right]', color: "black"});
calculator.setExpression({id: 'marks', latex: 'y=\\frac{\\sin\\left(a\\right)}{\\cos\\left(a\\right)}x\\left\\{0.8<x^{2}+y^{2}<1\\right\\}', color: "black"});
calculator.setExpression({id: 'markslist2', latex: 'b=\\left[0,6,...,174\\right]'});
calculator.setExpression({id: 'marks2', latex: 'y=\\frac{\\sin\\left(b\\right)}{\\cos\\left(b\\right)}x\\left\\{0.95<x^{2}+y^{2}<1\\right\\}', color: "black"});
calculator.setExpression({id: 'vertical', latex: 'x=0\\left\\{0.8<x^{2}+y^{2}<1\\right\\}', color: "black"});
calculator.setExpression({id: 'minutes', latex: 'm=0'});
calculator.setExpression({id: 'seconds', latex: 'j=0'});
calculator.setExpression({id: 'step', latex: 'l=-j'});
calculator.setExpression({id: 'time', latex: 't=-m'});
calculator.setExpression({id: 'secdeg', latex: 'k=\\operatorname{mod}\\left(6l,360\\right)+90'});
calculator.setExpression({id: 'hours', latex: 'd=\\operatorname{mod}\\left(6t,360\\right)+90'});
calculator.setExpression({id: 'degrees', latex: 's=\\operatorname{mod}\\left(6\\frac{t}{12},360\\right)+90'});
calculator.setExpression({id: 'minutea', latex: 'y=\\frac{\\sin\\left(d\\right)}{\\cos\\left(d\\right)}x\\left\\{x>0\\right\\}\\left\\{d>270,d<90\\right\\}\\left\\{x^{2}+y^{2}<0.5\\right\\}', color: "#55f"});
calculator.setExpression({id: 'minuteb', latex: 'y=\\frac{\\sin\\left(d\\right)}{\\cos\\left(d\\right)}x\\left\\{x<0\\right\\}\\left\\{270>d>90\\right\\}\\left\\{x^{2}+y^{2}<0.5\\right\\}', color: "#55f"});
calculator.setExpression({id: 'minutec', latex: 'x=0\\left\\{-0.7<y<0\\right\\}\\left\{d=270\\right\\}', color: "#55f"});
calculator.setExpression({id: 'minuted', latex: 'x=0\\left\\{0<y<0.7\\right\\}\\left\\{d=90\\right\\}', color: "#55f"});
calculator.setExpression({id: 'houra', latex: 'y=\\frac{\\sin\\left(s\\right)}{\\cos\\left(s\\right)}x\\left\\{x>0\\right\\}\\left\\{s>270,s<90\\right\\}\\left\\{x^{2}+y^{2}<0.25\\right\\}', color: "#f55"});
calculator.setExpression({id: 'hourb', latex: 'y=\\frac{\\sin\\left(s\\right)}{\\cos\\left(s\\right)}x\\left\\{x<0\\right\\}\\left\\{270>s>90\\right\\}\\left\\{x^{2}+y^{2}<0.25\\right\\}', color: "#f55"});
calculator.setExpression({id: 'hourc', latex: 'x=0\\left\\{-0.5<y<0\\right\\}\\left\\{s=270\\right\\}', color: "#f55"});
calculator.setExpression({id: 'hourd', latex: 'x=0\\left\\{0<y<0.5\\right\\}\\left\\{s=90\\right\\}', color: "#f55"});
calculator.setExpression({id: 'seconda', latex: 'y=\\frac{\\sin\\left(k\\right)}{\\cos\\left(k\\right)}x\\left\\{x>0\\right\\}\\left\\{k>270,k<90\\right\\}\\left\\{x^{2}+y^{2}<0.75\\right\\}', color: "#5f5"});
calculator.setExpression({id: 'secondb', latex: 'y=\\frac{\\sin\\left(k\\right)}{\\cos\\left(k\\right)}x\\left\\{x<0\\right\\}\\left\\{270>k>90\\right\\}\\left\\{x^{2}+y^{2}<0.75\\right\\}', color: "#5f5"});
calculator.setExpression({id: 'secondc', latex: 'x=0\\left\\{-0.866<y<0\\right\\}\\left\\{k=270\\right\\}', color: "#5f5"});
calculator.setExpression({id: 'secondd', latex: 'x=0\\left\\{0<y<0.866\\right\\}\\left\\{k=90\\right\\}', color: "#5f5"});
calculator.setMathBounds({
    left: -1.2,
    right: 1.2,
    bottom: -1.2,
    top: 1.2
  });

for (var l = 1; l<=12; l++) {
    calculator.setExpression({
        id: 'num' + l, hidden: true, 
        latex: '\\left(0.82\\sin\\left(' + (30 * l) + '\\right),0.82\\cos\\left(' + (30 * l) + '\\right)\\right)', 
        color: 'black', label: l, showLabel: true, labelSize: Desmos.LabelSizes.LARGE
    })
}

setInterval(function () {
    const time = new Date();
    document.title = time.toLocaleTimeString() + " - Clock";
    calculator.setExpression({id: 'minutes', latex: 'm=' + (time.getMinutes() + (time.getHours() * 60) + (time.getSeconds()/60))});
    calculator.setExpression({id: 'seconds', latex: 'j=' + time.getSeconds()});
}, 1000);