export default function PhotoPlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <svg className="photo-icon">
        <use href="#icon-photo" />
      </svg>
      <span className="photo-fig">{caption}</span>
    </div>
  );
}
