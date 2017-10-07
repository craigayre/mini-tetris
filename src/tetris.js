// _() – Main loop
// D() – Draw updated field b and set P=p.
// M(code) – Map P to p using code and merge it with field B into field b.
//           Return true if piece overlaps with B.

// B – Current state of playing field, format: [c00<<0|c01<<1|…, c10<<0|c11<<1|…, …]
// b - Updated state of playing field
// P – Current piece, format: [x0, y0, x1, y1, …]
// p – Updated piece
// Q – Spawn coordinates of all pieces
// k – Last key code pressed (- 38)
// S - Total score
// s – Tally of current move used to reward clearing multiple lines
// I - Offset of next piece

M=e=>(p=P.map((v,i)=>eval(e[0]),b=[...B])).some((x,i)=>i%2?0:(b[h=x<0|x>9|b[y=p[i+1]]>>x&1|y>17,y]|=1<<x,h)),
B=[...Q='202131304050606171'].fill(S=P=k=0),
D=e=>b.map(v=>{$+='\n';for(x=10;x--;)Z.innerText=$+='□■'[v>>x&1]},$=S,P=p),
(_=e=>D(
    I=setTimeout(_,k-2&&200),
    P=P||[...Q.substr(I%6*2,k=8)],
    M`+v+i%2`&&M`v`&(B=[s=p=0,0,0,0,...b].filter(v=>v-1023||!(S+=++s)).slice(-18))
))(
onkeyup=e=>
    P?((k=e.which-38)-1&&~k
        ?k||M`P[2]-(q=i%2*2-1)*(P[i-q]-P[3])`
        :M`+v+~i%2*k`
    )
    ||D():0
)
