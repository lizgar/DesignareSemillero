import { Calendar, User, Building2, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import type { CreativeWork } from '../App';

type WorksListProps = {
  works: CreativeWork[];
  onSelectWork: (work: CreativeWork) => void;
};

export function WorksList({ works, onSelectWork }: WorksListProps) {
  if (works.length === 0) {
    return (
      <div className="bg-card border rounded-lg p-12 text-center">
        <p className="text-muted-foreground">
          No se encontraron proyectos con los criterios seleccionados.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">
          {works.length} {works.length === 1 ? 'proyecto encontrado' : 'proyectos encontrados'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map(work => (
          <Card key={work.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            {work.coverImage && (
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={work.coverImage} 
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="line-clamp-2">{work.title}</CardTitle>
                <Badge>{work.category}</Badge>
              </div>
              <CardDescription className="flex items-center gap-2 mt-2">
                <User className="h-3 w-3" />
                {work.author}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                {work.description}
              </p>
              
              {work.tools && work.tools.length > 0 && (
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <Wrench className="h-3 w-3 text-muted-foreground" />
                  {work.tools.slice(0, 3).map((tool, idx) => (
                    <Badge key={idx} variant="outline">{tool}</Badge>
                  ))}
                  {work.tools.length > 3 && (
                    <span className="text-muted-foreground">+{work.tools.length - 3}</span>
                  )}
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{work.year}</span>
                </div>
              </div>
              
              <Button variant="outline" onClick={() => onSelectWork(work)}>
                Ver proyecto
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
