import Image from "next/image";
import Logo from "../../public/images/hero_nuis.png";

export const Hero = () => (
  <section className="flex flex-col items-center justify-center py-28 text-center">
    <Image src={Logo} alt="Nuis Logo" width={180} height={180} />
    <h1 className="text-5xl font-bold mt-8 text-white">Team Silvortox</h1>
    <p className="text-lg text-gray-400 mt-4 max-w-2xl">
      “Language’s mission is not to follow hardware — but to transcend it.”
    </p>
  </section>
);