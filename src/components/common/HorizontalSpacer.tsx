export default function HorizontalSpacer({
  label,
  value,
  variant = 'solid',
}: {
  label?: string
  value?: string | number
  variant?: 'solid' | 'dashed' | 'dotted'
}) {
  const lineClass = {
    solid: 'h-px bg-gray-300',
    dashed: 'border-b border-dashed border-gray-400 mb-1',
    dotted: 'border-b border-dotted border-gray-400 mb-1',
  }[variant]

  return (
    <div className="flex items-end gap-3 w-full py-2">
      {label && (
        <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
      )}
      <div className={`flex-1 ${lineClass}`} />
      {value !== undefined && (
        <span className="text-sm font-medium whitespace-nowrap">{value}</span>
      )}
    </div>
  )
}