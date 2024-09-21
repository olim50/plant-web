/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
      
        "footer-texture": "url('/img/footer-texture.png')",
      },
      content: {
        link: 'url("/icons/link.svg")',
        before: 'content-[""]',
      },
      colors: {
        "regal-blue": "#243c5a",
        color: "transparent",
        color: "currentColor",
        color: "inherit",
      },
      outlineWidth: {
        5: "5px",
      },
      outlineOffset: {
        3: "3px",
      },
      ringWidth: {
        10: "10px",
      },
      ringOffsetWidth: {
        3: "3px",
        6: "6px",
        10: "10px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      opacity: {
        67: ".67",
      },
      blur: {
        xs: "2px",
      },
      brightness: {
        25: ".25",
        175: "1.75",
      },
      contrast: {
        25: ".25",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      grayscale: {
        50: "50%",
      },
      hueRotate: {
        "-270": "-270deg",
        270: "270deg",
      },
    },

    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },

      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      scale: {
        175: "1.75",
      },
      rotate: {
        17: "17deg",
      },
      spacing: {
        4.25: "17rem",
      },
      skew: {
        17: "17deg",
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
      },
    },

    scaleUp: {
      "0%": { transform: "scale(0.8)" },
      "50%": { transform: "scale(1.2)" },
      "100%": { transform: "scale(0.8)" },
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-seri"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    borderCollapse: {
      "border-collapse": "collapse",
      "border-collapse": "separate",
    },
    spacing: {
      13: "3.25rem",
    },
    borderSpacing: {
      13: "3.25rem",
    },
    transitionProperty: {
      height: "height",
      spacing: "margin, padding",
    },
    transitionDuration: {
      2000: "2000ms",
    },
    transitionTimingFunction: {
      "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
    transitionDelay: {
      2000: "2000ms",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
}