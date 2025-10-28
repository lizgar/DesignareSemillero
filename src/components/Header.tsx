import { Search, Plus, Home } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { AddWorkDialog } from './AddWorkDialog';
import type { CreativeWork } from '../App';


type HeaderProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddWork: (work: Omit<CreativeWork, 'id' | 'createdAt'>) => void;
  onNavigateToHome?: () => void;
};

export function Header({ searchQuery, onSearchChange, onAddWork, onNavigateToHome }: HeaderProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddWork = (work: Omit<CreativeWork, 'id' | 'createdAt'>) => {
    onAddWork(work);
    setDialogOpen(false);
  };

  return (
    <>
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-row items-center justify-center max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
               <img
                src="https://lizgar.github.io/ImgDesignare/assets/logo2.png"
                alt="DESIGNARE Logo"
                className="h-16 w-auto"
              />
              <div>
                <h1>Repositorio Creativo</h1>
                <p className="text-muted-foreground">Semillero de Investigación DESIGNARE</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {onNavigateToHome && (
                <Button variant="outline" onClick={onNavigateToHome}>
                  <Home className="h-4 w-4 mr-2" />
                  Inicio
                </Button>
              )}
              
            </div>
          </div>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por título, autor o descripción..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </header>

      <AddWorkDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onAddWork={handleAddWork}
      />
    </>
  );
}
