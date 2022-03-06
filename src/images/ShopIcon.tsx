const ShopIcon = (props: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path
      d="M15.6 1.6H8.4c-.4 0-.7.3-.7.7v2.5h8.5V2.3c.1-.4-.2-.7-.6-.7z"
      fill="var(--primary)"
    />
    <path
      d="M19.8 10.2H4.2c-.6 0-1 .4-1 1v10.2c0 .6.4 1 1 1l15.7.1c.6 0 1-.4 1-1V11.3c-.1-.7-.5-1.1-1.1-1.1z"
      fill="var(--dark)"
    />
    <path
      d="M9.2 13.6c-1.2 0-2.3-.7-2.9-1.8-.5 1.1-1.6 1.8-2.9 1.8h-.2C1.1 13.5-.1 11.2.8 9.3l3-5.1c.3-.6.8-1 1.5-1h13.5c.6 0 1.2.4 1.5 1l3 5.1c.8 1.9-.4 4.1-2.5 4.2h-.2c-1.2 0-2.3-.7-2.9-1.8-.7 1.6-2.6 2.2-4.2 1.5-.7-.3-1.2-.8-1.5-1.5-.5 1.2-1.6 1.9-2.8 1.9z"
      fill="var(--primary)"
    />
    <g>
      <path
        d="M13.3 22.4v-5.1c0-.3.1-.5.3-.5h4c.1 0 .3.2.3.5v5.1"
        fill="var(--primary)"
      />
    </g>
  </svg>
);

export default ShopIcon;
