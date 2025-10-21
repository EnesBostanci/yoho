import Hero from "@/components/sections/hero";
import WhatIs from "@/components/sections/WhatIs";
import Browse from "@/components/sections/Browse";
import WhyBecome from "@/components/sections/WhyBecome";

export default function Home() {
  const topass="";
  return (
    <div>
      <main>
      <Hero/>
      <WhatIs/>
      <WhyBecome/>
      <Browse/>
      <Browse/>
      </main>
    </div>
    );
}
