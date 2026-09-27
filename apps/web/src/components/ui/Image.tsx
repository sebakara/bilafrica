type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Image({ fill, priority, sizes, alt = "", ...props }: ImageProps) {
  void priority;
  void sizes;

  return <img alt={alt} {...props} className={fill ? `absolute inset-0 h-full w-full ${props.className ?? ""}` : props.className} />;
}
