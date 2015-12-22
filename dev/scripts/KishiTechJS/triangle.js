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

var KishiTechJS = KishiTechJS || {}; 

KishiTechJS.Triangle = function(context, color, lineWidth)
{
	KishiTechJS.Object.call(this, context, color);
	
	this.lines = [
		new KishiTechJS.Line(context, color, lineWidth),
		new KishiTechJS.Line(context, color, lineWidth),
		new KishiTechJS.Line(context, color, lineWidth)
	];
}

KishiTechJS.Triangle.prototype = Object.create(KishiTechJS.Object.prototype);

KishiTechJS.Triangle.prototype.constructor = KishiTechJS.Line;

KishiTechJS.Triangle.prototype.draw = function()
{
	for (var i = 0; i < this.lines.length - 1; ++i)
	{
		this.lines[i].draw(this.lines[i + 1].getX(), this.lines[i + 1].getY());
	}
	this.lines[this.lines.length - 1].draw(this.lines[0].getX(), this.lines[0].getY());
}

KishiTechJS.Triangle.prototype.setColor = function(line, color)
{
	if (line == -1)
	{
		for (var i = 0; i < this.lines.length; ++i)
		{
			this.lines[i].setColor(color);
		}
	}
	else if (line >= 0 && line < this.lines.length)
	{
		this.lines[line].setColor(color);
	}
}

KishiTechJS.Triangle.prototype.setLineWidth = function(line, lineWidth)
{
	if (line == -1)
	{
		for (var i = 0; i < this.lines.length; ++i)
		{
			this.lines[i].setLineWidth(lineWidth);
		}
	}
	else if (line >= 0 && line < this.lines.length)
	{
		this.lines[line].setLineWidth(lineWidth);
	}
}

KishiTechJS.Triangle.prototype.getLinePosition = function(line)
{
	if (line >= 0 && line < this.lines.length)
	{
		return this.lines[line].getPosition();
	}
	
	return null;
}

KishiTechJS.Triangle.prototype.setLineXY = function(line, x, y)
{
	if (line >= 0 && line < this.lines.length)
	{
		this.lines[line].setXY(x, y);
	}
}

KishiTechJS.Triangle.prototype.setLinePosition = function(line, position)
{
	KishiTechJS.Triangle.prototype.setLineXY(line, position.x, position.y);
}
