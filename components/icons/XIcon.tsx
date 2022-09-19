const XIcon: React.FC<{ width?: number; height?: number; onClick?: () => void }> = ({
  width,
  height,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 20}
      height={height ?? 20}
      fill="none"
      viewBox="0 0 21 24"
      onClick={onClick}
      className={
        onClick !== null ? 'cursor-pointer transition-all hover:-translate-y-[0.1rem]' : ''
      }
    >
      <path
        fill="#FD6059"
        d="M3.37 4.804a.746.746 0 0 1-.138-.236.829.829 0 0 1 0-.559.746.746 0 0 1 .137-.236.634.634 0 0 1 .205-.158.559.559 0 0 1 .483 0c.077.036.146.09.205.158l6.49 7.498 6.49-7.498a.634.634 0 0 1 .204-.158.559.559 0 0 1 .483 0c.077.036.146.09.205.158a.744.744 0 0 1 .137.236.83.83 0 0 1 0 .559.744.744 0 0 1-.137.236l-6.49 7.497 6.49 7.496a.743.743 0 0 1 .137.237.829.829 0 0 1 0 .558.743.743 0 0 1-.137.237.632.632 0 0 1-.205.158.558.558 0 0 1-.483 0 .632.632 0 0 1-.205-.158l-6.49-7.498-6.489 7.498a.632.632 0 0 1-.205.158.558.558 0 0 1-.483 0 .632.632 0 0 1-.205-.158.745.745 0 0 1-.137-.237.828.828 0 0 1 0-.558.745.745 0 0 1 .137-.237l6.491-7.496-6.49-7.497Z"
      />
    </svg>
  )
}

export default XIcon
