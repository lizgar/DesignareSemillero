import { X, User, Building2, Calendar, Tag, Download, ExternalLink, Wrench } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import type { CreativeWork } from '../App';

type WorkDetailProps = {
  work: CreativeWork;
  onClose: () => void;
};

export function WorkDetail({ work, onClose }: WorkDetailProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        
        
        <DialogHeader>
          <DialogTitle>{work.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge>{work.category}</Badge>
            <Badge variant="outline">{work.year}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground">Autor</p>
                <p>{work.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg">
                <Building2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground">Institución</p>
                <p>{work.institution}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground">Año</p>
                <p>{work.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg">
                <Tag className="h-4 w-4" />
              </div>
              <div>
                <p className="text-muted-foreground">Categoría</p>
                <p>{work.category}</p>
              </div>
            </div>
          </div>

          {work.tools && work.tools.length > 0 && (
            <>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="h-4 w-4" />
                  <h4>Herramientas utilizadas</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          <Separator />

          <div>
            <h4 className="mb-2">Descripción del proyecto</h4>
            <p className="text-muted-foreground leading-relaxed">
              {work.description}
            </p>
          </div>

          <Separator />

          <div className="flex gap-3">
    
            <Button variant="outline" className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
             {work.websiteUrl}
            </Button>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">
              Agregado el {work.createdAt.toLocaleDateString('es-ES', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>

          
        </div>
      </DialogContent>
    </Dialog>
  );
}
