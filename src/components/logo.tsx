export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="45"
      viewBox="0 0 200 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_102_2)">
        <circle cx="22.5" cy="22.5" r="18" stroke="#EAC276" strokeWidth="2" />
        <path
          d="M22.5 12C19.5 17.5 16.5 22 22.5 33C28.5 22 25.5 17.5 22.5 12Z"
          fill="url(#paint0_linear_102_2)"
        />
        <ellipse
          cx="22.5"
          cy="22.5"
          rx="22"
          ry="6"
          transform="rotate(-20 22.5 22.5)"
          stroke="#55C7D8"
          strokeWidth="1.5"
        />
        <ellipse
          cx="22.5"
          cy="22.5"
          rx="22"
          ry="9"
          transform="rotate(20 22.5 22.5)"
          stroke="#55C7D8"
          strokeWidth="1.5"
        />
      </g>
      <text
        x="58"
        y="21"
        fontFamily="Poppins, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#0B2545"
      >
        AQUORIS
      </text>
      <text
        x="58"
        y="40"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="400"
        fill="#55C7D8"
      >
        intelligence
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_102_2"
          x1="22.5"
          y1="12"
          x2="22.5"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55C7D8" />
          <stop offset="1" stopColor="#00A7C4" />
        </linearGradient>
        <clipPath id="clip0_102_2">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
