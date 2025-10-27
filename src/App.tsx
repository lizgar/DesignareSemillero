import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { RepositoryPage } from './components/RepositoryPage';
import { Toaster } from './components/ui/sonner';

export type CreativeWork = {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  year: number;
  institution: string;
  tools?: string[];
  fileUrl?: string;
  coverImage?: string;
  createdAt: Date;
};

export type Category = {
  id: string;
  name: string;
  count: number;
};

// Datos de ejemplo - Proyectos creativos
export const initialWorks: CreativeWork[] = [
  {
    id: '1',
    title: 'Cortometraje Animado: El estallido de un recuerdo',
    author: 'Mariana Bello,Sara Ochoa Durango, Laura Alejandro Romo, Kevin Andres Álvarez, Brayan Hernan Piñeros, Martha Liliana Gonzales',
    category: 'Animación 3D',
    description: 'EL ESTALLIDO DE UN RECUERDO es un cortometraje sobre un niño enfrenta la pérdida de su abuela y el desarraigo de su hogar a causa del conflicto armado en Colombia. A través de la animación 3D, esta obra busca visibilizar el dolor, la resiliencia y la esperanza de miles de familias víctimas de la violencia y el desplazamiento forzado. Este cortometraje es un ejercicio artístico y social que combina narrativa audiovisual con animación digital. Su propósito es invitar a la reflexión sobre la memoria, la infancia y la importancia de construir una cultura de paz.',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Blender', 'Maya', 'Premiere'],
    coverImage: 'https://lizgar.github.io/ImgDesignare/assets/estallido.jpeg',
    createdAt: new Date('2025'),
  },
  {
    id: '2',
    title: 'Cortometraje Animado: Sed de Venganza',
    author: 'Miguel Ángel Mora, María Camila Ordóñez, Daiana Nicole Buitrago, Daniel Felipe Real, Óscar Adrián Rodríguez, Simon Rico.',
    category: 'Animación 3D',
    description: 'Sed de venganza cuenta y evidencia, un poco de lo que es el racismo y las consecuencias psicológicas qué esto podría llegar a tener, teniendo como referencia los colegios, donde más se presenta esta situación. Esto mediante procesos de guionización, creación de personajes y arte conceptual en 2D',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Blender', 'Maya', 'Premiere'],
    coverImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMzk3MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2025'),
  },
  {
    id: '3',
    title: 'Metrika, Red de Construcción - CDA',
    author: 'Daniel Blanco, César Arévalo, Vanessa López, Marcela Murcia, Duvan Jiménez, Andrés Pineda' ,
    category: 'Producción de Multimedia',
    description: 'METRIKA es una iniciativa innovadora que busca posicionar y fortalecer la Red de Construcción del SENA en Chía',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Visual Code Studio', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere'],
    coverImage: 'https://lizgar.github.io/ImgDesignare/assets/Metrika.jpeg',
    createdAt: new Date('2025'),
  },
  {
    id: '4',
    title: 'Dragons League: Liga de E-Sports CDA - SENA',
    author: 'Daniel Stiven Rodriguez Ochoa',
    category: 'Videojuegos',
    description: 'Dragons League* es la primera liga de eSports en Colombia, creada para impulsar el talento joven en videojuegos competitivos. Promueve el entrenamiento como disciplina deportiva, organiza torneos locales y fomenta el trabajo en equipo, la creatividad y el crecimiento profesional en el mundo gamer.',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Premier After effects Photoshop Maya Zbrush Quick magic'],
    coverImage: 'https://lizgar.github.io/ImgDesignare/assets/dragonslogo2.jpg',
    createdAt: new Date('2025'),
  },
  {
    id: '5',
    title: 'Cortometraje Animado: Dream Factory',
    author: 'Michael Steven Ballen Romero, Sheila Damaris Gómez Castiblanco, Lizeth Dayanna León León y Nicole Stephania Montenegro Vanegas',
    category: 'Animación 3D',
    description: 'Heartnnet explora, desde una mirada introspectiva, las fisuras emocionales de una familia rota. Tres hermanas intentan sostener su frágil hogar marcado por la ausencia de sus padres y la falta de comunicación. Nick, la menor, se siente invisible y busca en un extraño en línea el consuelo y la validación que no encuentra en casa, sin sospechar que esa aparente conexión oculta manipulación y peligro. ',
    year: 2023,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Blender', 'Maya', 'Premiere'],
    coverImage: 'https://lizgar.github.io/ImgDesignare/assets/Dream Factory.jpeg',
    createdAt: new Date('2025'),
  },
  {
    id: '6',
    title: 'Cortometraje Animado: LACTIKA',
    author: 'German Triviño, Daniel Beltran, Johan Torres, Viviana Ovalle, Christian Buñay, Arwen Pardo.',
    category: 'Animación 3D',
    description: 'Don lucho es un campesino lechero que vive de su labor hasta que llega una mega industria lechera que afecta sus ventas, en este corto se verá como Don Lucho atraviesa esta crisis económica y saca adelante su emprendimiento',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Maya Autodesk, Adobe Substance Painter, Adobe Photoshop, Adobe Illustrator, Krita, Adobe Premiere Pro y Adobe Audition.'],
    coverImage: 'https://lizgar.github.io/ImgDesignare/assets/lactika.jpeg',
    createdAt: new Date('2025'),
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'repository'>('landing');

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToRepository={() => setCurrentPage('repository')} />
      ) : (
        <RepositoryPage onNavigateToHome={() => setCurrentPage('landing')} />
      )}
      <Toaster />
    </>
  );
}
