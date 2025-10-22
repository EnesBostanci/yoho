import Hero from "@/components/sections/hero";
import WhatIs from "@/components/sections/WhatIs";
import Browse from "@/components/sections/Browse";
import WhyBecome from "@/components/sections/WhyBecome";
import Map from "@/components/sections/map";
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
  return (
    <div>
      <main>
      <Hero/>
      <WhatIs/>
      <WhyBecome/>
      <Browse  render={smCards} header="Browse Opportunities by Fields"/>
      <Map/>
      <Browse  render={smCards_2} header="Browse Freelancers by Talent"/>
      </main>
    </div>
    );
}
