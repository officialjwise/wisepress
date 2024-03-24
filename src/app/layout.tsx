import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WisePress",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
       <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        
        >

          <body className={font.className}>{children}
          </body>
        </ThemeProvider>
      
    </html>
    
   
  );
}
