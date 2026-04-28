export default function Logo() {
  return (
    <div className="nav-logo" data-magnetic>
      <svg viewBox="0 0 60 60" fill="none">
        <path d="M30 6 L30 50" stroke="currentColor" strokeWidth="1.2" />
        <path d="M22 18 L30 12 L38 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M20 26 L30 18 L40 26" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M18 34 L30 24 L42 34" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M14 44 Q30 34 46 44" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M8 44 L18 44 M42 44 L52 44" stroke="currentColor" strokeWidth="0.8" />
      </svg>
      <div className="lockup">
        <span>The Crib</span>
        <small>Murree Hills</small>
      </div>
    </div>
  );
}
