precision mediump float;

uniform float time;
uniform vec2 resolution;

// void main() {
//     vec2 uv = gl_FragCoord.xy / resolution.xy;
//     float colorShift = (sin(time) + 1.0) / 2.0; // Получаем значение от 0 до 1
//     vec3 color1 = vec3(1.0, 0.3, 0.6); // Розовый цвет
//     vec3 color2 = vec3(0.3, 0.6, 1.0); // Приятный цвет (синий в этом примере)
//     vec3 color = mix(color1, color2, colorShift);
//     gl_FragColor = vec4(color, 1.0);
// }
vec3 pal( float t )
{
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);


   return a + b*cos( 6.28318*(c*t+d) );
   // return 1.0;
}



void main( )
{
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    uv = uv * 1.;
    
    float d = distance(fract(uv), vec2(0.5));
    
    
    vec3 col = pal(length(uv0) - time);
    
    
    d = sin(d * 8. - time) / 8.;
    d=abs(d);
    
    d = 0.01 / d;
    finalColor += col * d;
    finalColor += vec3(0.32, 0.04, 0.21);
    gl_FragColor = vec4(finalColor, 1.0);
}
// precision mediump float;

// uniform float time;
// uniform vec2 resolution;

// vec3 pal(float t) {
//     vec3 a = vec3(0.5, 0.5, 0.5);
//     vec3 b = vec3(0.5, 0.5, 0.5);
//     vec3 c = vec3(1.0, 1.0, 1.0);
//     vec3 d = vec3(0.263, 0.416, 0.557);
//     return a + b*cos(6.28318*(c*t+d));
// }

// void main() {
//     vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
//     vec3 finalColor = vec3(0.0);
    
//     // Создаем два кольца
//     for(int i = 0; i < 2; i++) {
//         // Смещаем позицию для второго кольца
//         vec2 pos = uv;
//         pos.y += float(i) * 0.5 - 0.25;
        
//         // Анимированный угол вращения
//         float angle = time * 0.5;
//         mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
//         pos = rot * pos;
        
//         // Формируем кольца
//         float d = length(pos);
//         d = sin(d * 12.0 - time * 4.0);
//         d = abs(d);
//         d = 0.02 / d;
        
//         // Цветовая схема
//         vec3 col = pal(length(pos) + time * 0.5);
//         finalColor += col * d * (1.0 - float(i)*0.3);
//     }

//     // Добавляем фоновый оттенок
//     finalColor += vec3(0.32, 0.04, 0.21) * 0.4;
//     gl_FragColor = vec4(finalColor, 1.0);
// }