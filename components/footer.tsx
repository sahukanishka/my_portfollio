import Link from "next/link";
import { navigation } from "./navigation/index";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div>
            <p className="font-mono text-sm font-medium mb-2">kanishka.</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building things that excites me.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                  title={item.name}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kanishka Sahu</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
