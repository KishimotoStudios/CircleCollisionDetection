/*
	Copyright (C) 2015 Kishimoto Studios. All Rights Reserved.
	contact@kishimotostudios.com
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', initialize);

var canvas = null;
var context = null;
var keyboard = null;

var triangle = null;
var circleKeyboard = null;
var circleKeyboardRadius = null;
var circleKeyboardRadiusToX = 0;
var circleKeyboardRadiusToY = 0;
var circleMouse = null;
var circleMouseRadius = null;
var circleMouseRadiusToX = 0;
var circleMouseRadiusToY = 0;

var CIRCLE_KEYBOARD_RADIUS = 80;
var CIRCLE_MOUSE_RADIUS = 60;
var KEYBOARD_MOVE = 10;

var language = 'en';

function initialize()
{
	configButtons();
	canvas = new KishiTechJS.Canvas('gameCanvas');
	context = canvas.getContext();
	canvas.addEventListener('mousemove', onMouseMove, false);

	keyboard = new KishiTechJS.Keyboard();	
	document.addEventListener('keydown', keyboard.onKeyDown.bind(keyboard), false);
	document.addEventListener('keyup', keyboard.onKeyUp.bind(keyboard), false);

	triangle = new KishiTechJS.Triangle(context, KishiTechJS.Constants.get('COLOR_DARK_BLUE'), 1);
	triangle.setLineWidth(0, 5);

	circleKeyboard = new KishiTechJS.Circle(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), CIRCLE_KEYBOARD_RADIUS, false);
	circleKeyboard.setXY(canvas.getWidth() * 0.5, canvas.getHeight() * 0.5);
	circleKeyboardRadius = new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), 1);
	
	circleMouse = new KishiTechJS.Circle(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), CIRCLE_MOUSE_RADIUS, false);
	circleMouse.setXY(canvas.getWidth() * 0.5, canvas.getHeight() * 0.5);
	circleMouseRadius = new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), 1);
	
	setInterval(gameLoop, KishiTechJS.Constants.get('FPS'));
}

function configButtons()
{
	var buttonEN = document.getElementById('button_en');
	var buttonPT = document.getElementById('button_pt');
	
	buttonEN.onclick = function()
	{
		language = 'en';
		loadStrings(language);		
	}
	
	buttonPT.onclick = function()
	{
		language = 'pt'
		loadStrings(language);		
	}
}

function loadStrings(language)
{
	for (var i = 0; i < Object.keys(STRINGS[language]).length; ++i)
	{
		document.getElementById('str_' + i).innerHTML = STRINGS[language]['str_' + i];
	}
}

function gameLoop()
{
	update();
	draw();
}

function update()
{
	updateCircleKeyboard();
	
	updateTriangle();
	
	updateRadii();

	circleKeyboardRadius.setPosition(circleKeyboard.getPosition());
	circleMouseRadius.setPosition(circleMouse.getPosition());
	
	if (checkCircleCollision(circleMouse, circleKeyboard))
	{
		circleKeyboard.setColor(KishiTechJS.Constants.get('COLOR_DARK_RED'));
		circleMouse.setColor(KishiTechJS.Constants.get('COLOR_DARK_RED'));
		circleKeyboardRadius.setColor(KishiTechJS.Constants.get('COLOR_DARK_RED'));
		circleMouseRadius.setColor(KishiTechJS.Constants.get('COLOR_DARK_RED'));
	}
	else
	{
		circleKeyboard.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
		circleMouse.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
		circleKeyboardRadius.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
		circleMouseRadius.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
	}
}

function draw()
{
	canvas.clear(KishiTechJS.Constants.get('COLOR_GRAY')); 
	triangle.draw();
	circleKeyboard.draw();
	circleMouse.draw();
	circleKeyboardRadius.draw(circleKeyboardRadiusToX, circleKeyboardRadiusToY);
	circleMouseRadius.draw(circleMouseRadiusToX, circleMouseRadiusToY);
	drawInfo();
	drawTriangleInfo();
	drawRadiiInfo();
}

function drawInfo()
{
	context.save();
	context.fillStyle = KishiTechJS.Constants.get('COLOR_WHITE');
	
	context.save();
	context.font = '16px Arial';
	var dx = circleMouse.getX() - circleKeyboard.getX();
	var dy = circleMouse.getY() - circleKeyboard.getY();
	var c = Math.round((dx * dx + dy * dy) * 100) / 100;
	var radii = circleMouse.getRadius() + circleKeyboard.getRadius();
	radii *= radii;
	context.fillStyle = (c > radii) ? KishiTechJS.Constants.get('COLOR_GREEN') : KishiTechJS.Constants.get('COLOR_RED');
	var textX = 10;
	var textY = 20;	
	context.fillText(STRINGS_CANVAS[language]['str_0'] + (radii > c), textX, textY);
	textY += 20;
	context.fillText('r1 + r2(' + radii + ') > c(' + c + ')? ' + (radii > c), textX, textY);
	context.restore();

	textY += 20;
	context.fillText('a = ' + dx, textX, textY);
	textY += 10;
	context.fillText('b = ' + dy, textX, textY);
	textY += 10;
	context.fillText('c^2 = a^2 + b^2', textX, textY);
	textY += 10;
	context.fillText('c^2 = ' + c, textX, textY);
	textY += 10;
	context.fillText('r1 = ' + circleMouse.getRadius() + ', r1^2 = ' + (circleMouse.getRadius() * circleMouse.getRadius()), textX, textY);
	textY += 10;
	context.fillText('r2 = ' + circleKeyboard.getRadius() + ', r2^2 = ' + (circleKeyboard.getRadius() * circleKeyboard.getRadius()), textX, textY);
	textY += 10;
	context.fillText('r1^2 + r2^2 = ' + radii, textX, textY);

	textY += 20;
	context.fillText(STRINGS_CANVAS[language]['str_1'], textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_2'], textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_3'], textX, textY);

	context.fillText('http://www.kishimotostudios.com', 10, canvas.getHeight() - 10);
	context.restore();
}

function drawTriangleInfo()
{
	var xa = (circleMouse.getY() > circleKeyboard.getY()) ? (triangle.getLinePosition(0).x + triangle.getLinePosition(2).x) * 0.5 : (triangle.getLinePosition(0).x + triangle.getLinePosition(1).x) * 0.5;
	var ya = triangle.getLinePosition(2).y + 15;

	var xb = (circleMouse.getY() > circleKeyboard.getY()) ? triangle.getLinePosition(1).x : triangle.getLinePosition(0).x;
	var yb = (triangle.getLinePosition(0).y + triangle.getLinePosition(1).y) * 0.5;

	var xc = xa;
	var yc = yb;
	
	// Argh.
	if ((circleMouse.getY() > circleKeyboard.getY() && circleMouse.getX() > circleKeyboard.getX()) || (circleMouse.getY() < circleKeyboard.getY() && circleMouse.getX() < circleKeyboard.getX()))
	{
		xb -= 15;
		xc += 10;
	}
	else if ((circleMouse.getY() > circleKeyboard.getY() && circleMouse.getX() < circleKeyboard.getX()) || (circleMouse.getY() < circleKeyboard.getY() && circleMouse.getX() > circleKeyboard.getX()))
	{
		xb += 10;
		xc -= 20;
	}

	context.save();
	context.font = '16px Arial';
	context.fillStyle = KishiTechJS.Constants.get('COLOR_DARK_BLUE');
	context.fillText('a', xa, ya);
	context.fillText('b', xb, yb);
	context.fillText('c', xc, yc);
	context.restore();
}

function drawRadiiInfo()
{
	var xr1 = (circleMouse.getX() + circleMouseRadiusToX) * 0.5;
	var yr1 = (circleMouse.getY() + circleMouseRadiusToY) * 0.5;
	var xr2 = (circleKeyboard.getX() + circleKeyboardRadiusToX) * 0.5;
	var yr2 = (circleKeyboard.getY() + circleKeyboardRadiusToY) * 0.5;
	
	// Argh.
	if ((circleMouse.getY() > circleKeyboard.getY() && circleMouse.getX() > circleKeyboard.getX()) || (circleMouse.getY() < circleKeyboard.getY() && circleMouse.getX() < circleKeyboard.getX()))
	{
		xr1 += 10;
		yr1 -= 5;
		xr2 += 10;
		yr2 -= 5;
	}
	else if ((circleMouse.getY() > circleKeyboard.getY() && circleMouse.getX() < circleKeyboard.getX()) || (circleMouse.getY() < circleKeyboard.getY() && circleMouse.getX() > circleKeyboard.getX()))
	{
		xr1 -= 10;
		yr1 -= 5;
		xr2 -= 10;
		yr2 -= 5;
	}

	context.save();
	context.font = '16px Arial';
	context.fillStyle = KishiTechJS.Constants.get('COLOR_DARK_GREEN');
	context.fillText('r1', xr1, yr1);
	context.fillText('r2', xr2, yr2);
	context.restore();
}

function onMouseMove(event)
{
	var position = canvas.screenToCanvas(event.clientX, event.clientY);
	circleMouse.setPosition(position);
}

function updateCircleKeyboard()
{
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_UP')))
	{	
		circleKeyboard.incY(-KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_DOWN')))
	{	
		circleKeyboard.incY(KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_LEFT')))
	{	
		circleKeyboard.incX(-KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_RIGHT')))
	{	
		circleKeyboard.incX(KEYBOARD_MOVE);
	}
}

function updateTriangle()
{
	triangle.setLineXY(0, circleMouse.getX(), circleMouse.getY());
	triangle.setLineXY(1, circleKeyboard.getX(), circleKeyboard.getY());
	var x = (circleMouse.getY() > circleKeyboard.getY()) ? circleKeyboard.getX() : circleMouse.getX();
	var y = Math.max(circleMouse.getY(), circleKeyboard.getY());
	triangle.setLineXY(2, x, y);
}

function updateRadii()
{
	var dx = circleMouse.getX() - circleKeyboard.getX();
	var dy = circleMouse.getY() - circleKeyboard.getY();
	var angle = Math.atan2(dy, dx);
	circleKeyboardRadiusToX = circleKeyboard.getX() + circleKeyboard.getRadius() * Math.cos(angle);
	circleKeyboardRadiusToY = circleKeyboard.getY() + circleKeyboard.getRadius() * Math.sin(angle);
	
	dx = -dx;
	dy = -dy;
	angle = Math.atan2(dy, dx);
	circleMouseRadiusToX = circleMouse.getX() + circleMouse.getRadius() * Math.cos(angle);
	circleMouseRadiusToY = circleMouse.getY() + circleMouse.getRadius() * Math.sin(angle);
}

function checkCircleCollision(circle1, circle2)
{
	var dx = circle1.getX() - circle2.getX();
	var dy = circle1.getY() - circle2.getY();
	var radii = circle1.getRadius() + circle2.getRadius();
	return radii * radii >= dx * dx + dy * dy; 
}
