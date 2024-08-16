type Props = {
  url?: string;

  backdrop?: { active: boolean; percent: Number; hexcolor: string };
  children?: React.ReactNode;
  height: number;
};

export default function FixedBannerResponsivo(props: Props) {
  return (
    <section
      className="relative"
      style={{
        height: "100%",
        width: "100%",
        maxHeight: `${props.height}px`,
      }}
    >
      <img
        src={props.url}
        style={{
          height: "100%",
          width: "100%",
          maxHeight: `${props.height}px`,
        }}
      ></img>
      {props.backdrop?.active && (
        <div
          className=" absolute top-0 left-0"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: `${props.height}px`,
            backgroundColor: hexToRgb(
              String(props.backdrop.hexcolor),
              props.backdrop.percent
            ),
          }}
        >
          {props.children}
        </div>
      )}
      <div className="w-full h-full absolute top-0 left-0">
        {props.children}
      </div>
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
