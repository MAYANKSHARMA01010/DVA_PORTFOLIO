import "./globals.css";

export const metadata = {
  title: "Mayank Sharma | AI/ML Engineer & Data Analyst",
  description: "Portfolio of Mayank Sharma — AI/ML Engineer, LangGraph Agent Builder, and Data Visualization Analyst specializing in intelligent systems and agentic AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
