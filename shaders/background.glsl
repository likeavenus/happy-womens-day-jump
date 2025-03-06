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