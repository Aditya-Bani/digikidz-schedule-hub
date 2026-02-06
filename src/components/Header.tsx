import { CalendarDays } from 'lucide-react';
import logodk from '@/assets/logodk.png';

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logodk} alt="DIGIKIDZ Logo" className="h-14 w-auto" />
            <div>
              <p className="text-sm text-muted-foreground">Kota Wisata Cibubur</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="w-5 h-5" />
            <span className="text-sm font-medium">Jadwal Les</span>
          </div>
        </div>
      </div>
    </header>
  );
}
