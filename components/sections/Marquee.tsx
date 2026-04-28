import { Fragment } from "react";

const items = [
  "Boutique",
  "Slow living",
  "Forest views",
  "Two apartments",
  "Deodar pines",
  "Quiet luxury",
];

function Block() {
  return (
    <span>
      {items.map((it, i) => (
        <Fragment key={i}>
          <span>{it}</span>
          <span className="dot" />
        </Fragment>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}
