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
    author: 'Simón Rico, .... ',
    category: 'Animación 3D',
    description: 'Diseño completo de interfaz para una plataforma de comercio electrónico enfocada en productos ecológicos. Incluye sistema de diseño, prototipos interactivos y guías de implementación.',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Blender', 'Maya', 'Premiere'],
    coverImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMzk3MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-02-20'),
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
    author: 'Daniel....',
    category: 'Videojuegos',
    description: 'Desarrollo completo de identidad visual para el Festival Internacional de Cine Independiente. Incluye logo, paleta de colores, tipografía, aplicaciones y merchandising.',
    year: 2025,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Adobe Illustrator', 'InDesign', 'Photoshop'],
    coverImage: 'https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MDM4OTkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '5',
    title: 'Video Explainer: Cambio Climático',
    author: 'Andrea López',
    category: 'Motion Graphics',
    description: 'Video animado educativo de 3 minutos sobre el impacto del cambio climático. Utiliza motion graphics, infografías animadas y diseño de personajes vectoriales.',
    year: 2023,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    coverImage: 'https://images.unsplash.com/photo-1628494391268-c9935bc384d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NjA0NjgzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2023-12-18'),
  },
  {
    id: '6',
    title: 'App Móvil de Meditación',
    author: 'Julián Torres',
    category: 'UI/UX',
    description: 'Diseño de experiencia e interfaz de usuario para una aplicación móvil de meditación guiada. Incluye investigación de usuarios, wireframes, prototipos de alta fidelidad y pruebas de usabilidad.',
    year: 2024,
    institution: 'DESIGNARE - Semillero de Investigación',
    tools: ['Figma', 'Miro', 'Principle'],
    coverImage: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2MDQ1MTU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-04-02'),
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
