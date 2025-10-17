import { Calendar, MapPin, Users, Sparkles,BookHeart, Palette, Lightbulb, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';


type LandingPageProps = {
  onNavigateToRepository: () => void;
};

export function LandingPage({ onNavigateToRepository }: LandingPageProps) {
  const activities = [
    {
      icon: Palette,
      title: 'Temáticas sobre las industrias creativas',
      description: 'Aprende técnicas avanzadas de diseño, animación 3D e ilustración digital.',
      image: 'src/assets/card1.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Conferencias Industria',
      description: 'Escucha a líderes de la industria creativa compartir sus experiencias, tendencias y visiones del futuro del diseño.',
      image: 'src/assets/heroIMG.jpg',
    },
    {
      icon: Trophy,
      title: 'Exposición de Proyectos',
      description: 'Exhibe tu trabajo y conecta con otros creativos. Los mejores proyectos serán reconocidos!',
      image: 'src/assets/card2.jpg',
    },
  ];

  const categories = [
    'Animación 3D',
    'Videojuegos',
    'Producción de Multimedia',
    'Motion Graphics',
    'UI/UX',
    'Fotografía',
    
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="src/assets/logo2.png" alt="DESIGNARE" className="h-16 w-auto" />
               <img src="src/assets/sena.png" alt="DESIGNARE" className="h-16 w-auto" />
            </div>
            
            <div className="flex items-center gap-4">
                    <Button onClick={onNavigateToRepository}>
                
                <BookHeart className="h-3 w-3 mr-2" />
                Repositorio
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">
                <Sparkles className="h-3 w-3 mr-2" />
                Evento del Año 2025
              </Badge>
             
              <div className="flex items-center gap-4">
                <img style={{
          width: '14%',
          height: '14%',
        }}
                src="src/assets/logo3.png"
                alt="DESIGNARE Logo"
                className="h-16 w-auto"
              />
              <h1 className="text-5xl md:text-6xl">
                DESIGNARE <span className="text-primary">FEST</span>
              </h1>
              </div>
              <p className="text-xl text-muted-foreground">
               "Inspírate, descubre y participa creativamente: vive Designare Fest."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                  Registrarse
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={onNavigateToRepository}>
                  Ver proyectos
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Fecha</p>
                    <p>16-17 Oct 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Lugar</p>
                    <p>CDA-SENA Chía</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Asistentes</p>
                    <p>Comunidad académica</p>
                    <p>Expertos</p>
                    <p>Público general</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img 
                src="src/assets/hero.gif"
                alt="DESIGNARE FEST"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 style={{fontSize: '2em', fontWeight:'700'
        }}>¿Qué es Designare Fest?</h1>
            <p className="text-xl text-muted-foreground">
              DESIGNARE FEST es un evento de diseño y creatividad que busca acercar a comunidades diversas
               a obras y productos de investigación-creación, 
               fomentando la reflexión crítica sobre su impacto y significado. 
               Con un enfoque accesible y riguroso, combina experiencias artísticas, 
               académicas y didácticas para que la ciudadanía participe activamente en la 
               apropiación y validación de la producción creativa.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 style={{fontSize: '1.5em'}} className="mb-4">Actividades del Festival</h2>
            <p className="text-xl text-muted-foreground">
              Dos días llenos de aprendizaje, inspiración y networking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <activity.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{activity.title}</CardTitle>
                  </div>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-bold">Áreas Temáticas</h2>
            <p className="text-xl text-muted-foreground">
              Explora las diferentes disciplinas creativas del festival
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="px-4 py-2">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Agenda Destacada</h2>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Día 1 - Apertura, Presentaciones y Charlas Industria animación Colombia</CardTitle>
                      <CardDescription>Jueves 16 de Octubre</CardDescription>
                    </div>
                    <Badge>08:00 AM</Badge>
                    <Badge>05:00 PM</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Saludo de bienvenida e inauguración festival.
                  </p>
                </CardContent>
                <CardContent>
                  <p className="text-muted-foreground">
                   Presentación resultado proyectos de formación - Sed de Venganza, Estallido de un Recuerdo, Metrika y Dragons League.   
                  </p>
                </CardContent>
                <CardContent>
                  <p className="text-muted-foreground">
                   Presentación Semillero JOBS - UMNG
                  </p>
                </CardContent>
                <CardContent>
                  <p className="text-muted-foreground">
                   Charlas industria Animación - Insert Coin Animation Studios, Dinamita Animación.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Día 2 -  Presentaciones proyectos y Charlas Industria animación Colombia</CardTitle>
                      <CardDescription>Viernes 17 de Octubre</CardDescription>
                    </div>
                    <Badge>08:00 AM</Badge>
                    <Badge>05:00 PM</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Presentación Proyectos Formativos Animación 3D.
                  </p>
                  <p className="text-muted-foreground">
                   Charlas Industria - David Mendez 
                  </p>
                  <p className="text-muted-foreground">
                   Presentación Semillero Sapiens, Designare 
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-xl mx-auto text-center space-y-6">
            <h2>Charlas destacadas</h2>
            <p className="text-xl opacity-90">
              Nos acompañan empresas de la industria de la Animación en Colombia. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

              <div className="flex items-center gap-4">
              <a href='https://insertcoin.com.co/' target='_blank'><img src="src/assets/Logo_InsertCoin.png" alt="Insert coin"  /></a>
              </div>
              <div className="flex items-center gap-4">
              <a href='https://dinamitaanimacion.com/' target='_blank'><img src="src/assets/Dinamita-Foco_logo.png" alt="Dinamita"  /></a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              
              <p className="text-muted-foreground">
                Semillero de Investigación Designare - Centro de Desarrollo Agroempresarial.
                <br></br> SENA-Chía
              </p>
            </div>
            <div>
              <h4 className="mb-4">Contacto</h4>
              <p className="text-muted-foreground">
                Email: designare.cda@gmail.com<br />
              </p>
            </div>
            <div>
              <h4 className="mb-4">Síguenos</h4>
              <p className="text-muted-foreground">
                Instagram: @designare.cda<br />
              
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 DESIGNARE. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
