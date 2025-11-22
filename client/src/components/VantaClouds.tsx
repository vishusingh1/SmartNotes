import { useEffect, useRef, useState } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

export default function VantaClouds() {
  const ref = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: ref.current!,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={ref} className="absolute inset-0 -z-10" />;
}
