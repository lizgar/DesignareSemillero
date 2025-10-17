import { useState } from 'react';
import { Header } from './Header';
import { CategoryFilter } from './CategoryFilter';
import { WorksList } from './WorksList';
import { WorkDetail } from './WorkDetail';
import { initialWorks } from '../App';
import type { CreativeWork, Category } from '../App';

type RepositoryPageProps = {
  onNavigateToHome: () => void;
};

export function RepositoryPage({ onNavigateToHome }: RepositoryPageProps) {
  const [works, setWorks] = useState<CreativeWork[]>(initialWorks);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);

  // Calcular categorías con conteo
  const categories: Category[] = [
    { id: 'all', name: 'Todas las categorías', count: works.length },
    ...Array.from(new Set(works.map(w => w.category))).map(cat => ({
      id: cat.toLowerCase().replace(/\//g, '-'),
      name: cat,
      count: works.filter(w => w.category === cat).length,
    })),
  ];

  // Filtrar trabajos
  const filteredWorks = works.filter(work => {
    const matchesCategory = selectedCategory === 'all' || work.category === categories.find(c => c.id === selectedCategory)?.name;
    const matchesSearch = searchQuery === '' || 
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddWork = (newWork: Omit<CreativeWork, 'id' | 'createdAt'>) => {
    const work: CreativeWork = {
      ...newWork,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setWorks([work, ...works]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddWork={handleAddWork}
        onNavigateToHome={onNavigateToHome}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>
          
          <div className="lg:col-span-3">
            <WorksList
              works={filteredWorks}
              onSelectWork={setSelectedWork}
            />
          </div>
        </div>
      </main>

      {selectedWork && (
        <WorkDetail
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </div>
  );
}
