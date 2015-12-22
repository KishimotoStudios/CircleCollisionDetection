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

STRINGS = {
	"en": {
		"str_0": "Circle Collision Detection",
		"str_1": "An example showing how to detect collision between two circles (uses HTML5/JS).",
		"str_2": "The idea",
		"str_3": "Two circles collide if the sum of their radii is greater than or equal to the distance between their centers.",
		"str_4": "The code",
		"str_5": "Brief explanation",
		"str_6": "The distance between two points can be calculated using Pythagoras' theorem (<span class=\"code\">c^2 = a^2 + b^2</span>). In the example above, we are drawing the triangle so we can see the distance between the center of the circles (distance between two points).",
		"str_7": "We are also drawing each circle's radius (<span class=\"code\">r1</span> and <span class=\"code\">r2</span>). Notice that when the circles are not colliding, the distance <span class=\"code\">c</span> is always greater than <span class=\"code\">r1 + r2</span>. When <span class=\"code\">c = (r1 + r2)^2</span>, the circles are touching each other by a single point. And when <span class=\"code\">c < (r1 + r2)^2</span>, the circles are colliding.",
		"str_8": "A note about the code",
		"str_9": "Instead of solving <span class=\"code\">c = Math.sqrt(a^2 + b^2)</span>, we simply squared the <span class=\"code\">radii</span> variable.",
		"str_10": "You can find this slightly modified code in <span class=\"code\">main.js</span> as well as in <span class=\"code\">KishiTechJS/circle.js</span>.",
		"str_11": "What's next?",
		"str_12": "In this example, we only detected if two circles are colliding. No response were implemented, other than changing the circle color.",
		"str_13": "From here, we should implement what happens with the circles as a response to the collision. Will they bounce? Explode? Disappear? This could be a topic for us to write about in the future and an exercise for you to practice!",
		"str_14": "We hope you enjoyed this article and let us know your thoughts about it! Reach us on <a href=\"http://twitter.com/KishimotoStudio\">Twitter</a> and <a href=\"http://facebook.com/KishimotoStudios\">Facebook</a>.", 
		"str_15": "<a href=\"https://github.com/KishimotoStudios/CircleCollisionDetection\" title=\"Source code\">[Get the source code at GitHub]</a>",
		"str_16": "Copyright &copy; 2015, Kishimoto Studios. All Rights Reserved.",		 
	},
	"pt": {
		"str_0": "Detecção de Colisão de Círculos",
		"str_1": "Um exemplo mostrando como detectar colisão entre dois círculos (usando HTML5/JS).",
		"str_2": "A ideia",
		"str_3": "Dois círculos colidem se a soma dos seus raios é maior que ou igual à distância entre seus centros.",
		"str_4": "O código",
		"str_5": "Breve explicação",
		"str_6": "A distância entre dois pontos pode ser calculada usando o teorema de Pitágoras (<span class=\"code\">c^2 = a^2 + b^2</span>). No exemplo acima, desenhamos o triângulo para visualizar a distância entre o centro dos círculos (distância entre dois pontos).",
		"str_7": "Também desenhamos o raio de cada círculo (<span class=\"code\">r1</span> e <span class=\"code\">r2</span>). Note que, quando os círculos não estão colidindo, a distância <span class=\"code\">c</span> é sempre maior que <span class=\"code\">r1 + r2</span>. Quando <span class=\"code\">c = (r1 + r2)^2</span>, os círculos se tocam por um único ponto. Quando <span class=\"code\">c < (r1 + r2)^2</span>, os círculos estão colidindo.", 
		"str_8": "Nota sobre o código",
		"str_9": "Ao invés de resolver <span class=\"code\">c = Math.sqrt(a^2 + b^2)</span>, nós simplesmente elevamos a variável <span class=\"code\">radii</span> ao quadrado.",
		"str_10": "Você pode ver o código levemente modificado no arquivo <span class=\"code\">main.js</span> assim como em <span class=\"code\">KishiTechJS/circle.js</span>.",
		"str_11": "O que vem a seguir?",
		"str_12": "Neste exemplo, apenas detectamos se dois círculos estão colidindo. Nenhuma resposta foi implementada, a não ser alterar a cor dos círculos.",
		"str_13": "A partir daqui, deveríamos implementar o que acontece com os círculos em resposta à colisão. Eles quicam? Explodem? Desaparecem? Isto poderia ser um tópico para escrevermos futuramente e um exercício para você praticar!",
		"str_14": "Esperamos que tenha gostado deste artigo e nos diga o que achou! Entre em contato via <a href=\"http://twitter.com/KishimotoStudio\">Twitter</a> e <a href=\"http://facebook.com/KishimotoStudios\">Facebook</a>.", 
		"str_15": "<a href=\"https://github.com/KishimotoStudios/CircleCollisionDetection\" title=\"Código-fonte\">[Obtenha o código-fonte no GitHub]</a>",
		"str_16": "Copyright &copy; 2015, Kishimoto Studios. Todos os Direitos Reservados.",		 
	}
};

STRINGS_CANVAS = {
	"en": {
		"str_0": "collision between circles? ",
		"str_1": "[usage]",
		"str_2": "Mouse: move smaller circle.",
		"str_3": "WADS/Arrows: move larger circle.",
	},
	"pt": {
		"str_0": "colisão entre círculos? ",
		"str_1": "[uso]",
		"str_2": "Mouse: move círculo menor.",
		"str_3": "WADS/Setas: move círculo maior.",
	}
}