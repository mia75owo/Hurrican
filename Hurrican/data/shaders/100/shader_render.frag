/* Input */
varying vec4 v_Color;
varying vec2 v_Texcoord0;
uniform sampler2D u_Texture0;
uniform int u_WindowHeight;

void main()
{
    /* Sample the current texture */
    vec4 p = texture2D(u_Texture0, v_Texcoord0) * v_Color;
    /* add scanlines */
    float r = float(u_WindowHeight / 216);
    float f = mod(gl_FragCoord.y, r) / r;
    gl_FragColor = mix(p, vec4(p.rgb * 0.5, p.a), f);
}
