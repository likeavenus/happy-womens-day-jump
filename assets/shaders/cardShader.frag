precision mediump float;

uniform vec2 uResolution;
uniform float uTime;
varying vec2 v_texCoord; 

vec3 palette(in float t) {
    vec3 a = vec3(0.898, 0.322, 0.656);
    vec3 b = vec3(0.905, 0.533, 0.673);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);
    return a + b*cos(6.28318*(c*t + d));
}

void main() {
    vec2 uv = v_texCoord * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;
    
    float time = uTime * 0.2;
    
    vec3 finalColor = vec3(0.0);
    for(float i = 0.0; i < 3.0; i++) {
        uv = abs(uv * 1.2) - 0.5;
        uv = uv * mat2(cos(time + i), sin(time + i), -sin(time + i), cos(time + i));
        
        float d = length(uv) * exp(-length(uv));
        vec3 col = palette(length(uv) + i * 0.4 + time * 0.5);
        
        d = sin(d * 8.0 + time * 5.0) / 8.0;
        d = abs(d);
        d = pow(0.02 / d, 1.2);
        
        finalColor += col * d;
    }
    
    finalColor = smoothstep(-0.2, 1.5, finalColor);
    finalColor = pow(finalColor, vec3(0.4545));
    
    gl_FragColor = vec4(finalColor * 1.5, 1.0);
}