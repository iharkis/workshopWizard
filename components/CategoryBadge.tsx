import { Category, categoryMeta } from '@/data/workshops'

export default function CategoryBadge({ category }: { category: Category }) {
  const meta = categoryMeta[category]
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${meta.bg} ${meta.border} ${meta.text}`}
    >
      {meta.label}
    </span>
  )
}
