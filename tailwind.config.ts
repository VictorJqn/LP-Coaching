
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Couleurs personnalisées basées sur l'image
				artistic: {
					blue: '#0D4D6C',
					orange: '#EB6B1F',
					teal: '#2A8C8C',
					sand: '#F5E6C5',
					navy: '#052E40',
					rust: '#AB4016',
				}
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				},
				'geometric-shift': {
					'0%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'25%': {
						transform: 'rotate(1deg) scale(1.01)'
					},
					'50%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'75%': {
						transform: 'rotate(-1deg) scale(0.99)'
					},
					'100%': {
						transform: 'rotate(0deg) scale(1)'
					}
				},
				'border-flow': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'color-cycle': {
					'0%': {
						filter: 'hue-rotate(0deg) saturate(1)'
					},
					'50%': {
						filter: 'hue-rotate(15deg) saturate(1.2)'
					},
					'100%': {
						filter: 'hue-rotate(0deg) saturate(1)'
					}
				},
				'text-shimmer': {
					'0%': {
						backgroundPosition: '-500% 0'
					},
					'100%': {
						backgroundPosition: '500% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'pulse-soft': 'pulse-soft 2s infinite ease-in-out',
				'geometric-shift': 'geometric-shift 6s infinite ease-in-out',
				'border-flow': 'border-flow 8s ease infinite',
				'color-cycle': 'color-cycle 10s infinite ease-in-out',
				'text-shimmer': 'text-shimmer 8s infinite linear'
			},
			backgroundImage: {
				'gradient-artistic': 'linear-gradient(45deg, #0D4D6C, #2A8C8C, #EB6B1F, #0D4D6C)',
				'geometric-pattern': "url('/lovable-uploads/13e355f9-0387-4f74-b40e-0444af06d550.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
