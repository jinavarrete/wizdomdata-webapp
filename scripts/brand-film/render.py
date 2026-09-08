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

def render(t):
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

OUT.parent.mkdir(parents=True,exist_ok=True)
cmd=['ffmpeg','-y','-hide_banner','-loglevel','error','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-an','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart',str(OUT)]
proc=subprocess.Popen(cmd,stdin=subprocess.PIPE)
for frame in range(FPS*DURATION):
    proc.stdin.write(render(frame/FPS).tobytes())
    if frame%150==0:print(f'Rendered {frame/FPS:.0f}s / {DURATION}s',flush=True)
proc.stdin.close()
if proc.wait()!=0:raise RuntimeError('FFmpeg failed')
render(24.5).save(ROOT/'public/media/wizdomdata-film-poster.jpg',quality=92)
# A contact sheet for reviewing every scene at its fully readable state.
sheet=Image.new('RGB',(960,810),BONE)
for j,t in enumerate([2.8,7.7,11.8,16.8,20.8,24.5]):
    sheet.paste(render(t).resize((480,270),Image.Resampling.LANCZOS),((j%2)*480,(j//2)*270))
sheet.save(ROOT/'artifacts/brand-film/storyboard.jpg',quality=93)
print(f'Created {OUT}',flush=True)
