"use client";
import Link from "next/link";

type Props = {
  bannerUrl?: string;
  color?: string;
  backdrop?: { active: boolean; percent: Number; hexcolor: string };
  children1?: React.ReactNode;
  children2?: React.ReactNode;
  cover?: "auto" | "cover" | "contain";
  position?: "top" | "center" | "left" | "right" | "bottom";
  repeat?: "repeat" | "repeat-x" | "repeat-y" | "space" | "round" | "no-repeat";
};

export default function AdaptativeBanner(props: Props) {
  return (
    <section
      id="about"
      className="w-full h-[900px] lg:h-[700px]"
      style={{
        backgroundImage: `url('${props.bannerUrl}')`,
        backgroundPosition: `${props.position}`,
        backgroundColor: `${props.bannerUrl ? "" : props.color}`,
        backgroundSize: `${props.cover}`,
      }}
    >
      {props.backdrop?.active ? (
        <div
          className="w-full h-[900px] lg:h-[700px] relative"
          style={{
            backgroundColor: hexToRgb(
              String(props.backdrop.hexcolor),
              props.backdrop.percent
            ),
          }}
        >
          <div className="max-w-screen-2xl h-full mx-auto flex flex-col lg:flex-row lg:px-6 lg:items-center">
            <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center gap-y-6">
              {props.children1}
            </div>
            <div className="w-[90%] mx-auto h-full  flex flex-col items-center justify-center gap-y-6">
              {props.children2}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl h-full mx-auto flex flex-col lg:flex-row lg:px-6 lg:items-center">
          <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center gap-y-6 ">
            {props.children1}
          </div>
          <div className="w-[90%] mx-auto h-full  flex flex-col items-center justify-center gap-y-6 ">
            {props.children2}
          </div>
        </div>
      )}
    </section>
  );
}

function hexToRgb(hex: string, opacity?: any) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return opacity
    ? `rgba(${r},${g},${b},${opacity / 100})`
    : `rgb(${r},${g},${b})`;
}
