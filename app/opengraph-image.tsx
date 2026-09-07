import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'WizdomData. Tu partner en datos, analítica e IA.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',background:'#0C0E12',color:'#E8E3D6',padding:'60px 72px',fontFamily:'sans-serif'}}><div style={{display:'flex',alignItems:'center',gap:16,fontSize:30}}><svg width="28" height="28" viewBox="0 0 28 28"><path d="M14 0L28 14L14 28L0 14Z" fill="#E8800C" /></svg> WizdomData</div><div style={{display:'flex',flexDirection:'column',fontSize:78,letterSpacing:-4,lineHeight:1.05}}><span>La claridad</span><span style={{color:'#E8800C'}}>cambia todo.</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:20,borderTop:'1px solid #2A2D33',paddingTop:24}}><span>Tu partner en datos, analítica e IA</span><span>Chile · Remoto</span></div></div>,size);
}
