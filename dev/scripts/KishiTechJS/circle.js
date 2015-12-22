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

KishiTechJS.Circle = function(context, color, radius, isFilled)
{
	KishiTechJS.Object.call(this, context, color);

	this.radius = radius;
	this.isFilled = isFilled;
}

KishiTechJS.Circle.prototype = Object.create(KishiTechJS.Object.prototype);

KishiTechJS.Circle.prototype.constructor = KishiTechJS.Circle;
	
KishiTechJS.Circle.prototype.draw = function()
{
	this.context.save();
	
	this.context.beginPath();
	this.context.arc(this.x, this.y, this.radius, 0, KishiTechJS.Constants.get360DegInRad());
	this.context.closePath();

	if (this.isFilled)
	{
		this.context.fillStyle = this.color;
		this.context.fill();
	}
	else
	{
		this.context.strokeStyle = this.color;
		this.context.stroke();
	}
	
	this.context.restore();
}

KishiTechJS.Circle.prototype.getRadius = function()
{
	return this.radius;
}
	
KishiTechJS.Circle.prototype.setRadius = function(radius)
{
	this.radius = radius;
}

KishiTechJS.Circle.prototype.isFilled = function()
{
	return this.isFilled;
}

KishiTechJS.Circle.prototype.setIsFilled = function(isFilled)
{
	this.isFilled = isFilled;
}

KishiTechJS.Circle.prototype.isCollidingWith = function(otherCircle)
{
	var dx = this.x - otherCircle.getX();
	var dy = this.y - otherCircle.getY();
	var radii = this.radius + otherCircle.getRadius();
	return radii * radii >= dx * dx + dy * dy; 
}
