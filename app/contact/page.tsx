import StudioNav from "@/components/StudioNav";
import {ArrowUpRight,Github,Linkedin,Mail} from "lucide-react";
const contacts=[
 {icon:Mail,title:"Email",value:"gowthamsatyasai123@gmail.com",href:"mailto:gowthamsatyasai123@gmail.com"},
 {icon:Github,title:"GitHub",value:"github.com/gowthamsai117",href:"https://github.com/gowthamsai117"},
 {icon:Linkedin,title:"LinkedIn",value:"linkedin.com/in/gowtham-satya-sai-m",href:"https://www.linkedin.com/in/gowtham-satya-sai-m"}
];
export default function ContactPage(){return <><StudioNav/><main className="page-shell"><span className="eyebrow">/ 05 — CONTACT</span><h1 className="page-title">Let&apos;s make something <span className="serif">worth remembering.</span></h1><div className="contact-intro"><span className="eyebrow">START HERE</span><p>For frontend opportunities, collaborations, or interesting product ideas, reach out directly. I&apos;m always interested in building something useful.</p></div><div className="contact-cards">{contacts.map(({icon:Icon,title,value,href})=><a className="contact-card" href={href} key={title} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined}><span className="contact-icon"><Icon size={18}/></span><div><span>{title}</span><strong>{value}</strong></div><ArrowUpRight size={18}/></a>)}</div></main></>}
