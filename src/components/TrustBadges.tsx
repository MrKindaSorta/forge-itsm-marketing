import { Shield, Lock, Globe } from 'lucide-react';

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30">
          <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium">Powered by Cloudflare</span>
      </div>

      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        <div className="p-1.5 rounded-md bg-green-100 dark:bg-green-900/30">
          <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <span className="font-medium">GDPR Compliant</span>
      </div>

      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/30">
          <Lock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        </div>
        <span className="font-medium">256-bit SSL Encryption</span>
      </div>
    </div>
  );
}
