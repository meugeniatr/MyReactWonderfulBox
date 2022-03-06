const CrowdIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path
      d="M22.5 15.4H1.5c-.7 0-1.4.6-1.4 1.3V18c0 .7.6 1.4 1.4 1.4l21 .1c.7 0 1.4-.6 1.4-1.3v-1.3c0-.8-.6-1.5-1.4-1.5z"
      fill="var(--dark)"
    />
    <circle cx="4.8" cy="9.6" r="2.4" fill="var(--color-dark)" />
    <path d="M.1 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6" fill="var(--dark)" />
    <circle cx="19.2" cy="9.7" r="2.4" fill="var(--color-dark)" />
    <path
      d="M14.5 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6"
      fill="var(--dark)"
    />
    <circle cx="12" cy="8" r="3.5" fill="var(--color-default)" />
    <path
      d="M5.2 17.9c0-2.9 3.1-5.3 6.8-5.3 3.7 0 6.8 2.4 6.8 5.3"
      fill="var(--primary)"
    />
    <path
      d="M5.2 17.9h13.5v1.4H5.2z"
      fill="var(--primary)"
      transform="matrix(1 .00338 -.00338 1 .063 -.04)"
    />
  </svg>
);

export default CrowdIcon;
