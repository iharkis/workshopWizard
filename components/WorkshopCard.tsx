import Link from 'next/link'
import { Workshop } from '@/data/workshops'
import CategoryBadge from './CategoryBadge'
import WorkshopCardImage from './WorkshopCardImage'

interface WorkshopCardProps {
  workshop: Workshop
  templateCount?: number
  contactCount?: number
}

export default function WorkshopCard({ workshop, templateCount = 0, contactCount = 0 }: WorkshopCardProps) {
  return (
    <Link href={`/${workshop.slug}`} className="group block h-full">
      <div className="card-hippo border border-ink-100 h-full flex flex-col overflow-hidden">

        <WorkshopCardImage slug={workshop.slug} category={workshop.category} />

        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <CategoryBadge category={workshop.category} />
            {(templateCount > 0 || contactCount > 0) && (
              <div className="flex items-center gap-2 shrink-0">
                {templateCount > 0 && (
                  <span className="flex items-center gap-1 text-xs text-ink-400" title={`${templateCount} template${templateCount !== 1 ? 's' : ''}`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    {templateCount}
                  </span>
                )}
                {contactCount > 0 && (
                  <span className="flex items-center gap-1 text-xs text-ink-400" title={`${contactCount} colleague${contactCount !== 1 ? 's' : ''} with experience`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    {contactCount}
                  </span>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-500 transition-colors">
              {workshop.name}
            </h3>
            <p className="mt-1.5 text-sm text-ink-500 leading-relaxed line-clamp-3">
              {workshop.description}
            </p>
            {workshop.isCommunity && (
              <p className="mt-2 text-xs text-ink-400">
                Added by {workshop.suggesterName}
              </p>
            )}
          </div>

          <div className="mt-auto pt-2 flex items-center gap-3 text-xs text-ink-400 border-t border-ink-100">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {workshop.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              {workshop.groupSize} people
            </span>
          </div>
        </div>

      </div>
    </Link>
  )
}
