interface AvatarProps {
  initials: string
  colorClass: string
  size?: 'sm' | 'lg'
}

export default function Avatar({ initials, colorClass, size = 'sm' }: AvatarProps) {
  const sizeClass = size === 'lg'
    ? 'w-9 h-9 text-[12px]'
    : 'w-8 h-8 text-[11px]'

  return (
    <div className={`${sizeClass} rounded-full ${colorClass} flex items-center justify-center font-bold text-white shrink-0`}>
      {initials}
    </div>
  )
}
