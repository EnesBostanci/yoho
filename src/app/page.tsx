import Hero from "@/components/sections/hero";
import WhatIs from "@/components/sections/WhatIs";
import Browse from "@/components/sections/Browse";
import WhyBecome from "@/components/sections/WhyBecome";
import Map from "@/components/sections/map";
import For from "@/components/sections/For";
import {Landmark, Monitor} from "lucide-react";

export default function Home() {

  const smCards=[
    {
        url:"cardSm.svg",
        title:"Multimedia",
    },
    {
        url:"cardSm-2.svg",
        title:"Translation",
    },
    {
        url:"cardSm-3.svg",
        title:"Photography",
    },
    {
        url:"cardSm-4.svg",
        title:"Accounting",
    },
]

const smCards_2=[
  {
      url:"cardSm-5.svg",
      title:"Multimedia",
  },
  {
      url:"cardSm-6.svg",
      title:"Translation",
  },
  {
      url:"cardSm-7.svg",
      title:"Photography",
  },
  {
      url:"cardSm-8.svg",
      title:"Accounting",
  },
]

const forData=[
    {
        img:"for1.svg",
        span:"For Freelancers",
        header:<>Are You Ready To Take <br/> Your Career To A Whole <br/> New Level?</>,
        lines:["Access global opportunities for skill enhancement and professional development.","Earn a sustainable livelihood under any circumstances.","Engage in projects that have a meaningful, positive impact on the world."],
        img2:{icon:<Landmark className="text-primary1"/>,text:"Learn more about our Freelancer Academy & Programs"},
        reverse:false    
    },
    {
        img:"for2.svg",
        span:"For Companies",
        header:<>Need to Innovate While <br/> Empowering Communities?</>,
        lines:["Connect with a global pool of skilled freelancers ready to meet diverse business needs.","Streamline business operations by eliminating logistical hurdles and reducing overhead costs.","Enhance your brand’s social impact by supporting freelancers from various backgrounds."],
        img2:{icon:<Monitor className="text-primary1"/>,text:"Learn more about our pool of experts & freelancers"},
        reverse:true    
    }
]

const heroData={
    span:{
        text:"YohoWork",
        color:"primary1"
    },
    header:"Skill Up, Scale Up, Rise Up",
    text:(<>Welcome to YohoWork, the global platform empowering freelancers to <br/>make a positive impact worldwide.</>),
    expolorColor:"black"
}


  return (
    <div>
      <main>
      <Hero span={heroData.span} header={heroData.header} text={heroData.text} expolorColor={heroData.expolorColor} />
      <WhatIs header={<>What is<br /> YohoWork?</>} headerSize="lg:text-8xl" button={true} reverse={false} img="Layer_1.svg" />
      <WhyBecome title={<>Why Become a <br /> WonderMaker?</>} render={true} />
      <Browse  render={smCards} header={<>Browse<br/>Opportunities<br/>by Fields</>}/>
      <For img={forData[0].img} span={forData[0].span} header={forData[0].header} lines={forData[0].lines} img2={forData[0].img2} reverse={forData[0].reverse}/>
      <Map/>
      <Browse  render={smCards_2} header={<>Browse<br/>Freelancers<br/>by Talent</>}/>
      <For img={forData[1].img} span={forData[1].span} header={forData[1].header} lines={forData[1].lines} img2={forData[1].img2} reverse={forData[1].reverse}/>
      </main>
    </div>
    );
}
