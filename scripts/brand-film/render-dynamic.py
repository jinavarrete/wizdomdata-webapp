"""Render WizdomData's 26-second silent brand film with Pillow and FFmpeg.
Run from the repository root: python scripts/brand-film/render.py
Uses the existing brand mark and Inter typeface. No external media or stock footage.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import subprocess, math

W,H,FPS,DURATION=1280,720,30,26
INK='#0C0E12'; BONE='#F3EFE7'; AMBER='#E8800C'; GRAY='#A8A498'; MUTED='#6B6A60'
ROOT=Path(__file__).resolve().parents[2]
FONT=ROOT/'scripts/brand-film/Inter.woff2'
OUT=ROOT/'public/media/wizdomdata-antes-de-construir.mp4'
CACHE={}
def font(size):
    if size not in CACHE: CACHE[size]=ImageFont.truetype(str(FONT),size)
    return CACHE[size]
def ease(v): return 1-(1-max(0,min(1,v)))**3

def text(im, value, x, y, size, color, progress=1):
    p=ease(progress)
    if p<=0: return
    layer=Image.new('RGBA',(W,H))
    ImageDraw.Draw(layer).text((x,y+22*(1-p)),value,font=font(size),fill=color,anchor='lt',stroke_width=0)
    if p<1: layer.putalpha(layer.getchannel('A').point(lambda a:int(a*p)))
    im.alpha_composite(layer)

MARKS={k:Image.open(ROOT/f'artifacts/brand-film/mark-{k}.png').convert('RGBA') for k in ['dark','light']}
def mark(im,x,y,size,dark=True,alpha=1):
    m=MARKS['dark' if dark else 'light'].resize((size,size),Image.Resampling.LANCZOS)
    if alpha<1:m.putalpha(m.getchannel('A').point(lambda a:int(a*alpha)))
    im.alpha_composite(m,(int(x),int(y)))

def original_render(t):
    bounds=[0,4,9,13,18,22,26]
    i=next(k for k in range(6) if t<bounds[k+1])
    u=t-bounds[i]
    dark=i in [0,2,4,5]
    bg=INK if dark else BONE; fg=BONE if dark else INK; muted=GRAY if dark else MUTED
    im=Image.new('RGBA',(W,H),bg)
    d=ImageDraw.Draw(im)
    if i<5:
        mark(im,66,44,40,dark)
        text(im,'WizdomData',116,55,22,fg)
        text(im,'ESTRATEGIA · DATOS · IA',856,60,14,muted)
    # A restrained, continuous orange thread ties the scenes together.
    d.line((76,661,1204,661),fill='#2A2D33' if dark else '#D8D3C8',width=1)
    d.line((76,661,76+1128*t/DURATION,661),fill=AMBER,width=3)
    if i==0:
        text(im,'Antes de construir,',76,206,76,fg,u/.65)
        text(im,'hay que entender.',76,303,76,AMBER,(u-.5)/.65)
        text(im,'El valor empieza mucho antes del modelo.',80,468,24,muted,(u-1.25)/.6)
        # Existing identity mark, restrained in scale; no invented illustration.
        mark(im,1002,354,180,True,ease((u-1.5)/.8))
    elif i==1:
        for j,line in enumerate(['Tu negocio.','Tus procesos.','Tus decisiones.']):
            text(im,line,100,163+j*114,78,fg,(u-j*.65)/.6)
            p=ease((u-j*.65-.25)/.9)
            if p>0: d.rectangle((80,167+j*114,84,167+j*114+65*p),fill=AMBER)
        text(im,'Nos involucramos para entender qué necesitas cambiar.',100,555,22,muted,(u-2.1)/.6)
    elif i==2:
        text(im,'Elegimos qué resolver.',76,203,76,fg,u/.6)
        text(im,'Y para qué.',76,304,84,AMBER,(u-.55)/.6)
        text(im,'El criterio de negocio define la solución.',80,482,24,muted,(u-1.2)/.6)
    elif i==3:
        text(im,'Lo convertimos en',76,165,70,fg,u/.6)
        text(im,'un producto analítico.',76,254,70,fg,(u-.45)/.6)
        labels=['NEGOCIO','CRITERIO','PRODUCTO']
        for j,label in enumerate(labels):
            x=78+j*390
            text(im,label,x,475,21,fg,(u-1.2-j*.45)/.5)
            if j<2:
                p=ease((u-1.5-j*.45)/.6)
                if p>0:
                    d.line((x+157,486,x+157+172*p,486),fill=AMBER,width=2)
                    if p>.95:d.polygon([(x+329,486),(x+321,481),(x+321,491)],fill=AMBER)
        text(im,'Datos, analítica e IA al servicio de una decisión.',78,562,22,muted,(u-2.7)/.6)
    elif i==4:
        text(im,'Valor para tu equipo.',76,213,75,fg,u/.65)
        text(im,'Impacto en tu negocio.',76,310,75,AMBER,(u-.55)/.65)
        text(im,'Construimos contigo. Acompañamos lo que viene.',80,493,23,muted,(u-1.2)/.6)
    else:
        p=ease(u/.7)
        mark(im,70,143,178,True,p)
        text(im,'WizdomData',270,189,87,fg,u/.7)
        text(im,'Tu partner estratégico',94,377,43,fg,(u-.45)/.65)
        text(im,'en datos e inteligencia artificial.',94,435,43,fg,(u-.7)/.65)
        text(im,'La claridad cambia todo.',94,552,23,AMBER,(u-1.15)/.65)
        text(im,'hola@wizdomdata.cl',899,594,17,muted,(u-1.6)/.6)
    return im.convert('RGB')

# Continuous process diagram: the partner enters the company's processes,
# identifies opportunities, creates an analytical product and closes the loop.
DURATION=30
OUT=ROOT/'public/media/wizdomdata-dentro-del-negocio.mp4'
def mix(a,b,p):return a+(b-a)*p

def path(draw,points,color,progress=1,width=2,arrow=True):
    lengths=[math.dist(a,b) for a,b in zip(points,points[1:])]
    remaining=sum(lengths)*max(0,min(1,progress))
    last=None; angle=0
    for a,b,length in zip(points,points[1:],lengths):
        if length==0:continue
        if remaining<=0:break
        q=min(1,remaining/length)
        end=(mix(a[0],b[0],q),mix(a[1],b[1],q))
        draw.line([a,end],fill=color,width=width)
        last=end;angle=math.atan2(b[1]-a[1],b[0]-a[0]);remaining-=length
    if arrow and last:
        x,y=last
        draw.polygon([(x,y),(x-9*math.cos(angle)+4*math.sin(angle),y-9*math.sin(angle)-4*math.cos(angle)),(x-9*math.cos(angle)-4*math.sin(angle),y-9*math.sin(angle)+4*math.cos(angle))],fill=color)

def pulse(draw,points,t,color=AMBER):
    lengths=[math.dist(a,b) for a,b in zip(points,points[1:])]
    dist=(t%1)*sum(lengths)
    for a,b,length in zip(points,points[1:],lengths):
        if length==0:continue
        if dist<=length:
            x=mix(a[0],b[0],dist/length);y=mix(a[1],b[1],dist/length)
            draw.ellipse((x-4,y-4,x+4,y+4),fill=color);return
        dist-=length

def centered(im,label,x,y,size,color,progress=1):
    text(im,label,x-font(size).getlength(label)/2,y,size,color,progress)

def render(t):
    if t<4:return original_render(t)
    if t>=26:
        im=original_render(22+(t-26));d=ImageDraw.Draw(im)
        d.line((76,661,1204,661),fill="#2A2D33",width=3)
        d.line((76,661,76+1128*t/DURATION,661),fill=AMBER,width=3)
        return im
    u=t-4; compact=ease((t-19)/1.1)
    im=Image.new('RGBA',(W,H),BONE);d=ImageDraw.Draw(im)
    mark(im,66,44,40,False);text(im,'WizdomData',116,55,22,INK)
    text(im,'ESTRATEGIA · DATOS · IA',856,60,14,MUTED)
    if t<12:
        text(im,'Nos integramos a tus procesos.',76,137,56,INK,u/.7)
        text(im,'Entendemos cómo se conecta tu negocio.',80,219,23,MUTED,(u-.65)/.6)
    elif t<19:
        text(im,'Desde dentro, vemos',76,126,53,INK,(t-12)/.6)
        text(im,'dónde crear valor.',76,192,53,INK,(t-12.35)/.6)
    else:
        text(im,'Ese conocimiento se convierte',76,127,49,INK,(t-19)/.6)
        text(im,'en valor analítico.',76,190,53,INK,(t-19.4)/.6)
    frame_right=mix(1204,748,compact)
    d.rectangle((76,283,frame_right,603),outline='#D8D3C8',width=1)
    text(im,'TU EMPRESA',94,298,12,MUTED)
    xs=[mix(230,186,compact),mix(640,410,compact),mix(1050,634,compact)]
    half=mix(108,80,compact)
    for i,x in enumerate(xs):
        if i<2:
            pts=[(x+half,367),(xs[i+1]-half,367)]
            path(d,pts,'#A8A498',ease((u-.7-i*.45)/.7))
            if u>2:pulse(d,pts,u*.28-i*.3)
    for i,(x,label) in enumerate(zip(xs,['Comercial','Operación','Finanzas'])):
        appear=ease((u-i*.35)/.6)
        if appear>0:
            top=339+12*(1-appear)
            d.rectangle((x-half,top,x+half,397+12*(1-appear)),fill=BONE,outline=INK,width=1)
            centered(im,label,x,top+19,21 if compact<.5 else 18,INK,appear)
    enter=ease((u-1.6)/1.2)
    cx=mix(640,410,compact);cy=mix(560,489,enter)
    for i,x in enumerate(xs):
        pts=[(x,402),(x,432),(cx,432),(cx,452)]
        path(d,pts,'#A8A498',ease((u-2.5-i*.15)/.85),arrow=False)
        if u>4:pulse(d,pts,u*.19+i*.32)
    if enter>0:
        mark(im,cx-43,cy-43,86,False,enter)
        centered(im,'WizdomData',cx,cy+44,18,INK,enter)
        centered(im,'Dentro de tu operación',cx,cy+71,12,MUTED,enter)
    if 12<=t<19:
        v=t-12
        p=ease((v-.5)/1.0)
        # The orange path makes the opportunity visible inside the real workflow.
        path(d,[(xs[0]+half,367),(xs[1]-half,367)],AMBER,p,width=3)
        if v>1.5:
            x=(xs[0]+xs[1])/2
            d.polygon([(x,354),(x+9,367),(x,380),(x-9,367)],fill=AMBER)
        labels=['Fricciones','Prioridades','Oportunidades']
        for i,label in enumerate(labels):
            centered(im,label,xs[i],623,18,INK,(v-1-i*.65)/.55)
    if compact>0:
        # Separate the product from the company boundary; close the feedback loop.
        reveal=ease((t-20.2)/.75)
        if reveal>0:
            d.rectangle((848,342,1204,528),fill=INK)
            text(im,'PRODUCTO ANALÍTICO',873,365,14,AMBER,reveal)
            text(im,'Anticipar.',873,403,29,BONE,reveal)
            text(im,'Priorizar. Decidir.',873,443,29,BONE,reveal)
            text(im,'Datos + analítica + IA',873,491,15,GRAY,reveal)
        pts=[(cx+49,489),(797,489),(797,421),(848,421)]
        path(d,pts,AMBER,ease((t-20.8)/1),width=3)
        if t>22:pulse(d,pts,(t-22)*.28)
        loop=[(1026,529),(1026,623),(cx,623),(cx,584)]
        path(d,loop,AMBER,ease((t-22.2)/1.5),width=2)
        if t>23.7:pulse(d,loop,(t-23.7)*.2)
        centered(im,'Mejores decisiones en tu operación',815,637,15,INK,(t-23)/.6)
    d.line((76,661,1204,661),fill='#D8D3C8',width=1)
    d.line((76,661,76+1128*t/DURATION,661),fill=AMBER,width=3)
    return im.convert('RGB')

OUT.parent.mkdir(parents=True,exist_ok=True)
proc=subprocess.Popen(['ffmpeg','-y','-hide_banner','-loglevel','error','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-an','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart',str(OUT)],stdin=subprocess.PIPE)
for frame in range(FPS*DURATION):
    proc.stdin.write(render(frame/FPS).tobytes())
    if frame%180==0:print(f'Rendered {frame/FPS:.0f}s / {DURATION}s',flush=True)
proc.stdin.close()
if proc.wait()!=0:raise RuntimeError('FFmpeg failed')
render(24.5).save(ROOT/'public/media/wizdomdata-dentro-del-negocio-poster.jpg',quality=94)
sheet=Image.new('RGB',(960,810),BONE)
for j,t in enumerate([2.8,10.5,17,21.9,24.9,28.8]):sheet.paste(render(t).resize((480,270),Image.Resampling.LANCZOS),((j%2)*480,(j//2)*270))
sheet.save(ROOT/'artifacts/brand-film/storyboard-dynamic.jpg',quality=94)
print(f'Created {OUT}',flush=True)
