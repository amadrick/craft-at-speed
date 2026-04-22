interface AvatarProps {
  initials: string
  colorClass: string
  size?: 'sm' | 'lg'
}

export default function Avatar({ initials, colorClass, size = 'sm' }: AvatarProps) {
  const sizeClass = size === 'lg'
    ? 'w-9 h-9 text-footnote'
    : 'w-8 h-8 text-caption'

  return (
    <div className={`${sizeClass} rounded-full ${colorClass} flex items-center justify-center font-bold text-white shrink-0`}>
      {initials}
    </div>
  )
}
