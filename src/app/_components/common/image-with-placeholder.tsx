import Image from 'next/image';

interface ImageWithPlaceholderProps {
  src: string | null;
  width: number;
  height: number;
  alt: string;
  className: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  width,
  height,
  alt,
  className,
}) => {
  const placeholderImage = '/images/logo/Logo_Image_Light_Moharu.png';
  const imageSrc = src ? src : placeholderImage;

  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default ImageWithPlaceholder;
