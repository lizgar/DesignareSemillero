import { Badge } from './ui/badge';
import type { Category } from '../App';

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
};

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="bg-card border rounded-lg p-6">
      <h3 className="mb-4">Categorías</h3>
      
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent'
            }`}
          >
            <span>{category.name}</span>
            <Badge variant={selectedCategory === category.id ? 'secondary' : 'outline'}>
              {category.count}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
}
