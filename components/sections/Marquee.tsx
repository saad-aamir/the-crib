import { Fragment } from "react";

const items = [
  "Soon to come private cinema room",
  "Game room",
  "Chaye & coffee station",
  "Forest views",
  "Two bespoke apartments",
  "Open 365 days",
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
